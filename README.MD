### Install

```shell
yarn add plugin-comic-pro
```


### List Comics

- [x] NetTruyen
- [ ] TruyenQQ
- [ ] Mangadex
- [ ] BlogTruyen




### Use

```js
import { Comic, Suppliers } from "plugin-comic-pro";

const cm = new Comic();
const nettruyen = cm.build(Suppliers.NetTuyen, "https://nettruyenco.vn");
```


### Feature





<details>
<summary>getAllGenres</summary>

```js
nettruyen.getAllGenres()
```

```json
[
    {
        "_genreId": "803f48473471e391",
        "name": "Tất cả",
        "path": "/tim-truyen"
    },
    {
        "_genreId": "1a97b9eca7c71254",
        "name": "Action",
        "path": "/tim-truyen/action-95"
    },
    ...
]

```
</details>


<details>
<summary>getListByGenre</summary>

```js
nettruyen
  .getListByGenre({
    _genreId: "1a97b9eca7c71254",
    name: "Action",
    path: "/tim-truyen/action-95",
  })
```

```json
{
    "totalData": 36,
    "canNext": false,
    "canPrev": false,
    "totalPage": 1,
    "currentPage": 1,
    "data": [
        {
            "_bookId": "d336f28565ffe94e",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/nguyen-thuy-bat-diet-quyet.jpg",
            "name": "Truyện tranh Nguyên Thủy Bất Diệt Quyết",
            "path": "/truyen-tranh/nguyen-thuy-bat-diet-quyet-10021"
        },
        {
            "_bookId": "d7822ac54be781ce",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/la-healer-nhung-lai-co-mat-tren-chien-truong.jpg",
            "name": "Truyện tranh Là Healer Nhưng Lại Có Mặt Trên Chiến Trường",
            "path": "/truyen-tranh/la-healer-nhung-lai-co-mat-tren-chien-truong-7248"
        },
        {
            "_bookId": "27a9bfbd8438482e",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/nu-duong-gia-suong-da-trai.jpg",
            "name": "Truyện tranh Nữ Đương Gia Sương Dã Trại",
            "path": "/truyen-tranh/nu-duong-gia-suong-da-trai-3000020852"
        },
     ...

   
    ]
}

```
</details>


<details>
<summary>getTopWeek,getTopHot,getListNew,getListComplete,getListLatestUpdate</summary>

```json
{
    "totalData": 15,
    "canNext": false,
    "canPrev": false,
    "totalPage": 1,
    "currentPage": 1,
    "data": [
        {
            "_bookId": "be04722b4ed7198f",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/fategrand-order-mortalisstella.jpg",
            "name": "Truyện tranh Fate/Grand Order-Mortalis:stella",
            "path": "/truyen-tranh/fategrand-order-mortalisstella-3000012003"
        },
        {
            "_bookId": "6f99c329763c34b4",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/sat-thu-thien-tai-don-doc.jpg",
            "name": "Truyện tranh Sát Thủ Thiên Tài Đơn Độc",
            "path": "/truyen-tranh/sat-thu-thien-tai-don-doc-17439"
        },
        {
            "_bookId": "79c9c04fa390d0c7",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/di-san-tu-dong-bang-phan-than.jpg",
            "name": "Truyện tranh Đi Săn Tự Động Bằng Phân Thân",
            "path": "/truyen-tranh/di-san-tu-dong-bang-phan-than-12913"
        },
        {
            "_bookId": "97dffac1e82ad546",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/huong-dan-sinh-ton-trong-hoc-vien.jpg",
            "name": "Truyện tranh Hướng Dẫn Sinh Tồn Trong Học Viện",
            "path": "/truyen-tranh/huong-dan-sinh-ton-trong-hoc-vien-18036"
        },
        {
            "_bookId": "4f130d88bff9bc1d",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/quy-tac-chuyen-la-bat-dau-hoa-than-danh-lui-chien-than.jpg",
            "name": "Truyện tranh Quy Tắc Chuyện Lạ: Bắt Đầu Hóa Thân Đánh Lui Chiến Thần",
            "path": "/truyen-tranh/quy-tac-chuyen-la-bat-dau-hoa-than-danh-lui-chien-than-23307"
        },
        {
            "_bookId": "1a7c1dc536710f22",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/cuoc-song-thien-xa-cua-ong-chu-duoc-trieu-hoi-sang-di-gioi.jpg",
            "name": "Truyện tranh Cuộc Sống \"Thiện Xạ\" Của Ông Chú Được Triệu Hồi Sang Dị Giới",
            "path": "/truyen-tranh/cuoc-song-thien-xa-cua-ong-chu-duoc-trieu-hoi-sang-di-gioi-17917"
        },
        {
            "_bookId": "861e87a33199009a",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/su-tro-lai-cua-nguoi-choi-bi-dong-bang.jpg",
            "name": "Truyện tranh Sự Trở Lại Của Người Chơi Bị Đóng Băng",
            "path": "/truyen-tranh/su-tro-lai-cua-nguoi-choi-bi-dong-bang-10973"
        },
        {
            "_bookId": "499954fb1c3021c0",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/toi-thang-cap-bang-ki-nang.jpg",
            "name": "Truyện tranh Tôi Thăng Cấp Bằng Kĩ Năng",
            "path": "/truyen-tranh/toi-thang-cap-bang-ki-nang-14573"
        },
        {
            "_bookId": "faa1f9c42a854f3b",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/anh-trai-anh-hung-la-nguoi-da-chet-trong-hoc-vien.jpg",
            "name": "Truyện tranh Anh Trai Anh Hùng Là Người Đã Chết Trong Học Viện",
            "path": "/truyen-tranh/anh-trai-anh-hung-la-nguoi-da-chet-trong-hoc-vien-13812"
        },
        {
            "_bookId": "fac97010d86f2867",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/son-hai-cao-trung.jpg",
            "name": "Truyện tranh Sơn Hải Cao Trung",
            "path": "/truyen-tranh/son-hai-cao-trung-3000029730"
        },
        {
            "_bookId": "3b4bf270e56768b3",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/dead-rock.jpg",
            "name": "Truyện tranh Dead Rock",
            "path": "/truyen-tranh/dead-rock-14790"
        },
        {
            "_bookId": "87982a235c097469",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/nen-van-minh-nebula.jpg",
            "name": "Truyện tranh Nền Văn Minh Nebula",
            "path": "/truyen-tranh/nen-van-minh-nebula-17710"
        },
        {
            "_bookId": "0a80fbe9ca7390ba",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/thoi-dai-cua-oman.jpg",
            "name": "Truyện tranh Thời Đại Của Oman",
            "path": "/truyen-tranh/thoi-dai-cua-oman-15156"
        },
        {
            "_bookId": "0203ee411e9b7737",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/chieu-hon-gia-sieu-pham.jpg",
            "name": "Truyện tranh Chiêu Hồn Giả Siêu Phàm",
            "path": "/truyen-tranh/chieu-hon-gia-sieu-pham-13439"
        },
        {
            "_bookId": "c6b907f7065777fb",
            "imageThumbnail": "https://cdnnvd.com/nettruyen/thumb/huyen-thien-chi-ton.jpg",
            "name": "Truyện tranh Huyền Thiên Chí Tôn",
            "path": "/truyen-tranh/huyen-thien-chi-ton-12873"
        }
    ]
}

```
</details>


<details>
<summary>getDetailComic</summary>

```js
nettruyen.getDetailComic( {
        "_genreId": "803f48473471e391",
        "name": "Tất cả",
        "path": "/tim-truyen"
    },)
```

```json
{
    "path": "/truyen-tranh/fategrand-order-mortalisstella-3000012003",
    "author": [],
    "name": "Truyện tranh Fate/Grand Order-Mortalis:stella",
    "status": "process",
    "genres": [
        {
            "_genreId": "1a97b9eca7c71254",
            "name": "Action",
            "path": "/tim-truyen/action-95"
        },
        {
            "_genreId": "3a3f667729ee3622",
            "name": "Historical",
            "path": "/tim-truyen/historical"
        },
        {
            "_genreId": "cdc5a39fa1ab7e29",
            "name": "Seinen",
            "path": "/tim-truyen/seinen"
        },
        {
            "_genreId": "7df7b0b95b057c15",
            "name": "Supernatural",
            "path": "/tim-truyen/supernatural"
        }
    ],
    "views": "6.173",
    "rate": "4.5/5",
    "rateNumber": "2862",
    "follows": "",
    "chapters": [
        {
            "path": "/truyen-tranh/fategrand-order-mortalisstella/chapter-1/286642",
            "title": "",
            "chapName": "1"
        },
        {
            "path": "/truyen-tranh/fategrand-order-mortalisstella/chapter-2/286645",
            "title": "",
            "chapName": "2"
        },
     
      ...
    ]
}

```
</details>


<details>
<summary>getDataChapter</summary>

```js
nettruyen.getDataChapter( {
            "_genreId": "1a97b9eca7c71254",
            "name": "Action",
            "path": "/tim-truyen/action-95"
})
```

```json
{
    "path": "/truyen-tranh/fategrand-order-mortalisstella/chapter-1/286642",
    "title": "",
    "chapName": "1",
    "chapterData": [
        {
            "_index": 1,
            "src": [
                "https://static.cdnnvd.com/cdn/fategrand-order-mortalisstella/1/0.jpg"
            ]
        },
        {
            "_index": 2,
            "src": [
                "https://static.cdnnvd.com/cdn/fategrand-order-mortalisstella/1/1.jpg"
            ]
        },
     ...
    ]
}

```
</details>

