import { Comic, Suppliers } from "../src";
import { SuperFetch } from "../src/utils";
import fs from "fs";

const comic = new Comic();

const nettruyen = comic.build(Suppliers.NetTuyen, "https://nettruyenco.vn");

nettruyen.getAllGenres().then((data) => {
  console.log(data);
  comic.kill();
});
