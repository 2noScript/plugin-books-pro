import { Comic, Suppliers } from "../src";
import { SuperFetch } from "../src/utils";
import fs from "fs";

const truyenqq = new Comic().build(
  Suppliers.TruyenQQ,
  "https://truyenqqvn.com"
);

const sf = new SuperFetch();

const cm = new Comic();

const nettruyen = cm.build(Suppliers.NetTuyen, "https://nettruyenco.vn");

const app = async () => {
  const processList: any = [];
  await nettruyen.initialize();
  for (let i = 1; i <= 300; i++) {
    processList.push(nettruyen.getListLatestUpdate(i));
  }
  const data = await Promise.all(processList);

  const jsonData = JSON.stringify(data);
  fs.writeFile("test/test.json", jsonData, (err) => {
    if (err) {
      console.error("write data fail", err);
      return;
    }
    console.log("write data success");
  });
  await nettruyen.destroy();
  console.log("done");
};

app();
