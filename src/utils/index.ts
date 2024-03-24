import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { browserHeader } from "fake-browser-headers";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { parse } from "node-html-parser";
import { IComicInfo, Suppliers } from "../models/types";
import { comicSuppliers } from "../constants/suppliers";
import randomUserAgent from "./puppeteer-plugin";
import { Browser } from "puppeteer";
puppeteer.use(StealthPlugin());

puppeteer.use(randomUserAgent());

async function sleep(s: number) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

export interface IOptionsHtmlParser {
  sleep?: number;
  reloadCount?: number;
}

export const getHtmlParser = async (
  url: string,
  options?: IOptionsHtmlParser
) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "load" });
    await sleep(options?.sleep ?? 0);
    for (let i = 0; i < (options?.reloadCount ?? 0); i++) {
      await page.reload();
    }
    const htmlContent = await page.content();
    const root = parse(htmlContent);
    await page.close();
    await browser.close();
    return root;
  } catch (error) {
    throw error;
  }
};

export const getBrowser = async () => {
  let browser: Browser;
  return {
    start: async () => {
      browser = await puppeteer.launch({
        headless: true,
      });
      return browser;
    },
    end: async () => {
      if (!!browser) await browser.close();
    },
  };
};

export const getComicInfoBySupplier = (
  supplier: Suppliers,
  baseUrl: string
) => {
  const comicInfo = comicSuppliers.find((item) => item.key === supplier);
  return {
    ...comicInfo,
    source: baseUrl,
  } as IComicInfo;
};

const axiosInstance: AxiosInstance = axios.create();
axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axiosInstance.defaults.headers.common["Content-Type"] =
  "application/json;charset=UTF-8";

export class SuperFetch {
  async getClient(options: AxiosRequestConfig) {
    return axiosInstance({
      ...options,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        ...browserHeader(),
        ...options.headers,
      },
    });
  }
  async getRootDomByClient(options: AxiosRequestConfig) {
    const hope = 5;
    for (let i = 0; i < hope; i++) {
      const { data, status } = await this.getClient(options);
      if (status === 200 && data) return parse(data);
    }
    return parse("");
  }
  async getClientByProxy(options: {
    url: string;
    load?: string;
  }): Promise<{ message: string; content: string; err?: any }> {
    const { data } = await this.getClient({
      method: "GET",
      url: "https://hidden-context.vercel.app/proxy",
      params: options,
    });
    return data;
  }
}
