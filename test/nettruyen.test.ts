import { comic, nettruyen, saveDataToJson } from ".";

nettruyen.getAllGenres().then((data) => {
  comic.kill();
  console.log(data);
});
