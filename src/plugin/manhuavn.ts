import { Page, useBlockResource } from "t2-browser-worker"
import { BaseBook } from "../models/base"
import { IResponseListBook, DataType, IBook } from "../models/types"


export default class Manhuavn extends BaseBook {
    private readonly path = {
        NEW: "/danhsach/P1/index.html?status=0&sort=0",
        TOP: "/danhsach/P1/index.html?status=0&sort=1",
        FAVORITE: "/danhsach/P1/index.html?status=0&sort=2"
    }

    private readonly selectors = {
        bookList: ".lst_story .story_title",
        title: ".wrap-info-title-part .title",
        image: ".wrap-content-image img",
        view: ".info-row:has(i.fa-eye) view.colorblue",
        follow: ".info-row:has(i.fa-user-plus) strong#numbertheodoi",
        lastChapter: ".info-row:has(i.fa-bolt) a.colorblue",
        tags: ".clearfix:has(i.fa-tags) a",
        rating: "span[itemprop='ratingValue']",
        comment: ".header-content-part .colorblue",
        description: ".clearfix p"
    }

    private async getListBookLink(page: Page, url: string): Promise<string[]> {
        await page.goto(url, { waitUntil: "domcontentloaded" })
        await page.waitForSelector(this.selectors.bookList)
        const bookItems = await page.$$(this.selectors.bookList)
        
        return Promise.all(
            bookItems
                .slice(0, this.LIMIT_ITEMS)
                .map(book => book.getAttribute("href"))
        ).then(links => links.filter(Boolean) as string[])
    }
    
    private async extractBookData(page: Page, index: number, link: string): Promise<IBook> { 
        await page.goto(`${this.baseUrl}${link}`, { waitUntil: "domcontentloaded" }) 

        const [
            name,
            imageUrlThumbnail,
            viewText,
            followText,
            lastChapterText,
            tagTexts,
            ratingText,
            commentText,
            description
        ] = await Promise.all([
            this.getElementText(page, this.selectors.title),
            this.getElementAttribute(page, this.selectors.image, "src"),
            this.getElementText(page, this.selectors.view),
            this.getElementText(page, this.selectors.follow),
            this.getElementText(page, this.selectors.lastChapter),
            this.getElementsText(page, this.selectors.tags),
            this.getElementText(page, this.selectors.rating),
            this.getElementText(page, this.selectors.comment),
            this.getElementText(page, this.selectors.description)
        ])

        return {
            rank: index + 1,
            identifier: this.getIdentifier(name),
            name,
            imageUrlThumbnail,
            link,
            view: this.parseViewCount(viewText),
            follow: this.parseViewCount(followText),
            lastChapter: this.parseNumber(lastChapterText),
            tags: this.formatTags(tagTexts),
            rating: parseFloat(ratingText) || 0,
            comment: this.parseNumber(commentText),
            description
        }
    }

    private async getElementText(page: Page, selector: string): Promise<string> {
        const element = await page.$(selector)
        return element ? (await element.textContent() || "") : ""
    }

    private async getElementAttribute(page: Page, selector: string, attr: string): Promise<string> {
        const element = await page.$(selector)
        return element ? (await element.getAttribute(attr) || "") : ""
    }

    private async getElementsText(page: Page, selector: string): Promise<string[]> {
        const elements = await page.$$(selector)
        return Promise.all(elements.map(el => el.textContent()))
            .then(texts => texts.filter(Boolean) as string[])
    }

    private formatTags(tags: string[]): string {
        return tags.map(tag => tag.trim()).join(',')
    }

    private parseNumber(text: string): number {
        return parseInt(text.replace(/[^0-9]/g, '')) || 0
    }

    private parseViewCount(viewText: string): number {
        const cleanText = viewText.toLowerCase().trim()
        const number = parseFloat(cleanText.replace(/[^0-9.]/g, '')) || 0
        
        if (cleanText.includes('k')) {
            return Math.round(number * 1000)
        }
        if (cleanText.includes('m')) {
            return Math.round(number * 1000000)
        }
        return Math.round(number)
    }


    private async navigateAndFetch(page: Page, path: string, dataType: DataType): Promise<IResponseListBook> {
        const result: IResponseListBook = {
            dataType,
            data: [],
            status: "SUCCESS"
        };
        const bookLinks=await this.getListBookLink(page,`${this.baseUrl}${path}`)

        for (const [index,link] of bookLinks.entries()) {
            const bookData = await this.extractBookData(page,index,link);
            result.data.push(bookData)
        }

        return result
    }
        

    
    
    async getNew(page: Page): Promise<IResponseListBook> {
       
        return  this.navigateAndFetch(page, this.path.NEW, "New")
    }
    async getFavorite(page: Page): Promise<IResponseListBook> {
        return this.navigateAndFetch(page, this.path.FAVORITE, "Favorite")
        
    }
    async getTop(page: Page): Promise<IResponseListBook> {
        return this.navigateAndFetch(page, this.path.TOP, "Favorite")
        
    }


    async crawl(page: Page) {
        useBlockResource(page, [
            "image",
            "media",
            "font",
            "script",
            "stylesheet",
            "xhr"
        ]);
        return super.crawl(page);
    }

}