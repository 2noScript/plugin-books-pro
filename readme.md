# Plugin Comic Pro

[![npm version](https://badge.fury.io/js/plugin-comic-pro.svg)](https://badge.fury.io/js/plugin-comic-pro)

A powerful library for crawling manga and novel content from various sources.

### Mode Develop

```shell
yarn dev:[supplier-name]
```

### Build

```shell
yarn build
```

## Installation

```bash
yarn add plugin-comic-pro
```

## Usage

```ts
import { Books, Suppliers } from "plugin-comic-pro"
import { BrowserWorker } from "t2-browser-worker"

const worker = new BrowserWorker()
const books = new Books()

const crawler = books.build(Suppliers.TruyenQQ)

// Start crawling
const result = await worker.runTask(async page => {
    return await crawler.crawl(page)
})
```

## Crawl Response Data

Example response:

```ts
{
    top: {
        dataType: "Top",
        status: "SUCCESS",
        data: [
            {
                identifier: "ONE PIECE",
                name: "One Piece",
                rank: 1,
                view: 1500000,
                like: 50000,
                follow: 100000,
                tags: "Action,Adventure,Comedy,Fantasy,Shounen",
                lastChapter: 1108,
                author: "Oda Eiichiro",
                comment: 3000,
                imageUrlThumbnail: "https://example.com/one-piece.jpg",
                imagePathThumbnail: "/images/manga/one-piece.jpg",
                description: "Gol D. Roger was known as the Pirate King...",
                link: "https://mangadex.org/title/a1c7c817-4e59-43b7-9365-09675a149a6f"
            },
            // ... more items
        ]
    },
    bookNew: {
        dataType: "New",
        status: "SUCCESS",
        data: [
            {
                identifier: "JUJUTSU KAISEN",
                name: "Jujutsu Kaisen",
                rank: 1,
                view: 500000,
                like: 20000,
                follow: 50000,
                tags: "Action,Supernatural,School Life,Shounen",
                lastChapter: 253,
                author: "Gege Akutami",
                comment: 1500,
                imageUrlThumbnail: "https://example.com/jjk.jpg",
                imagePathThumbnail: "/images/manga/jujutsu-kaisen.jpg",
                description: "A boy fights... to help people...",
                link: "https://mangadex.org/title/c52b2ce3-7f95-469c-96b0-479524fb7a1a"
            }
        },
}
```

### Book Fields

| Field              | Type   | Required | Description                         |
| ------------------ | ------ | -------- | ----------------------------------- |
| rank               | number | ✓        | Position in the list                |
| identifier         | string | ✓        | Unique identifier (normalized name) |
| name               | string | ✓        | Book title                          |
| link               | string | ✓        | URL to book page                    |
| imageUrlThumbnail  | string | ✓        | Cover image URL                     |
| view               | number |          | View count                          |
| like               | number |          | Like count                          |
| follow             | number |          | Follow/bookmark count               |
| tags               | string |          | Categories/genres (comma-separated) |
| lastChapter        | number |          | Latest chapter number               |
| author             | string |          | Author name                         |
| comment            | number |          | Comment count                       |
| imagePathThumbnail | string |          | Local path to cover image           |
| description        | string |          | Book synopsis                       |
| rating             | number |          | Rating score (0-5)                  |

### Manga Sources

| Status | Key         | Icon                                                                                                                | URL                     |
| ------ | ----------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| ✓      | TruyenQQ    | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/truyenqq.ico" width="20">   | https://truyenqqto.com  |
| ✓      | Manhuavn    | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/manhuavn.ico" width="20">   | https://manhuavn.top    |
|        | ManhuaRock  | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/manhuarock.ico" width="20"> | https://manhuarock2.site |
|        | MangaToon   | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/mangatoon.ico" width="20">  | https://mangatooncom.vn |
| ✓      | Mangadex    | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/mangadex.ico" width="20">   | https://mangadex.org    |
|        | NaverComic | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/naver_comic.ico" width="20">      | https://comic.naver.com |

### Novel Sources

| Status | Key          | Icon                                                                                                                  | URL                       |
| ------ | ------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| ✓      | Metruyencv   | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/metruyencv.ico" width="20">   | https://metruyencv.com    |
|        | TruyenFull   | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/truyenfull.ico" width="20">   | https://truyenfull.vision |
|        | XaloSach     | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/xalosach.ico" width="20">     | https://xalosach.com      |
|        | SSTruyen     | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/sstruyen.ico" width="20">     | https://sstruyen.vn       |
|        | TruyenFullTV | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/truyenfulltv.ico" width="20"> | https://truyenfull.tv     |
|        | MeTruyenHot  | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/metruyenhot.ico" width="20">  | https://metruyenhot.vn    |
|        | eNovel       | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/enovel.ico" width="20">       | https://enovel.mobi       |
|        | TruyenYY     | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/truyenyy.ico" width="20">     | https://truyenyy.vip      |
|        | DTruyen      | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/dtruyen.ico" width="20">      | https://dtruyen.net       |

<!-- ### Other Sources

| Status | Key  | Icon                                                                                                          | URL             |
| ------ | ---- | ------------------------------------------------------------------------------------------------------------- | --------------- |
|        | Waka | <img src="https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/waka.ico" width="20"> | https://waka.vn |
 -->

## Dependencies

-   [t2-browser-worker](https://www.npmjs.com/package/t2-browser-worker)
-   [playwright](https://www.npmjs.com/package/playwright)
