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
  for (let i = 1; i <= 10; i++) {
    processList.push(
      nettruyen.getDetailComic({
        _id: 8660,
        image_thumbnail: "https://cdnnvd.com/nettruyen/thumb/vo-nghich.jpg",
        name: "Truyện tranh Võ Nghịch",
        href: "/truyen-tranh/vo-nghich-8660",
      })
    );
  }
  const data = await Promise.all(processList);

  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFile("test/test.json", jsonData, (err) => {
    if (err) {
      console.error("write data fail", err);
      return;
    }
    console.log("write data success");
  });
  console.log("done");
};

app();
