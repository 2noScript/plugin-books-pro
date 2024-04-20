import { comic, truyenqq, saveDataToJson } from ".";

truyenqq.getAllGenres().then((data) => {
  comic.kill();
  console.log(data);
});
