import { comic, truyenqq, saveDataToJson } from ".";

truyenqq.getTopHot().then((data) => {
  comic.kill();
  console.log(data);
});
