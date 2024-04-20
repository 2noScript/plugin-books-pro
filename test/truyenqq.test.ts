import { comic, truyenqq, saveDataToJson } from ".";

truyenqq.search("vo").then((data) => {
  comic.kill();
  console.log(data);
});
