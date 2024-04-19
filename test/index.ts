import { Comic, Suppliers } from "../src";
import fs from "fs";

const comic = new Comic();

const nettruyen = comic.build(Suppliers.NetTuyen, "https://nettruyenco.vn");

// {
//   _id: 8762,
//   imageThumbnail: 'https://cdnnvd.com/nettruyen/thumb/ta-vuong-phuc-hac-sung-nhap-cot.jpg',
//   name: 'Truyện tranh Tà Vương Phúc Hắc Sủng Nhập Cốt',
//   path: '/truyen-tranh/ta-vuong-phuc-hac-sung-nhap-cot-8762'
// }
// nettruyen
//   .getDetailComic({
//     _bookId: "5bf2d74ea61d29f1",
//     imageThumbnail:
//       "https://cdnnvd.com/nettruyen/thumb/ta-vuong-phuc-hac-sung-nhap-cot.jpg",
//     name: "Truyện tranh Tà Vương Phúc Hắc Sủng Nhập Cốt",
//     path: "/truyen-tranh/ta-vuong-phuc-hac-sung-nhap-cot-8762",
//   })
//   .then((data) => {
//     console.log(data);
//     comic.kill();
//   });

// nettruyen
//   .getDataChapter({
//     path: "/truyen-tranh/ta-vuong-phuc-hac-sung-nhap-cot/chuong-1/362483",
//     title: "",
//     chapName: "0",
//   })
//   .then((data) => {
//     console.log(data);
//     comic.kill();
//   });

nettruyen.getTopHot().then((data) => {
  console.log(data);
  comic.kill();
});
