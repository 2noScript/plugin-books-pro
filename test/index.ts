import { Comic, Suppliers } from "../src";
import fs from "fs";

const comic = new Comic();

const nettruyen = comic.build(Suppliers.NetTuyen, "https://nettruyenco.vn");

nettruyen.getTopHot().then((data) => {
  console.log(data);
  comic.kill();
});
