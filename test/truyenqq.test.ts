import { comic, truyenqq, saveDataToJson } from ".";

truyenqq
  .getListByGenre({
    _genreId: "a7f9959d19ea18aa",
    name: "Comic",
    path: "/the-loai/comic-60.html",
  })
  .then((data) => {
    comic.kill();
    // console.log(data);
    console.log(process.env.NODE_END);
  });

// {
//   _genreId: 'f8d1f48f2807fde2',
//   name: 'Demons',
//   path: '/the-loai/demons-99.html'
// },
