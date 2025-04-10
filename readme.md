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
import { Books, Suppliers } from 'plugin-comic-pro';
import { BrowserWorker } from 't2-browser-worker';

const worker = new BrowserWorker();
const books = new Books();

const crawler = books.build(Suppliers.TruyenQQ);

// Start crawling
const result = await worker.runTask(async (page) => {
    return await crawler.crawl(page);
});
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
                description: "Gol D. Roger was known as the Pirate King..."
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
                description: "A boy fights... to help people..."
            }
        },
}
```

#### Comic

### Manga Sources
| Status | Source | URL |
|--------|---------|-----|
| ✅ | TruyenQQ | https://truyenqqto.com |
| | Pops | https://pops.vn |
| | ManhuaVN | https://manhuavn.top |
| | ManhuaRock | https://manhuarockz.com |
| | MangaToon | https://mangatooncom.vn |
| | Comico | https://www.comico.jp |
| | MangaDex | https://mangadex.org |
| | Naver Comic | https://comic.naver.com |

### Novel Sources
| Status | Source | URL |
|--------|---------|-----|
|✅| Metruyencv | https://metruyencv.com |
| | TruyenFull | https://truyenfull.vision |
| | XaloSach | https://xalosach.com |
| | SSTruyen | https://sstruyen.vn |
| | TruyenFullTV | https://truyenfull.tv |
| | MeTruyenHot | https://metruyenhot.vn |
| | eNovel | https://enovel.mobi |
| | TruyenYY | https://truyenyy.vip |
| | DTruyen | https://dtruyen.net |

### Other Sources
| Status | Source | URL |
|--------|---------|-----|
| | Waka | https://waka.vn |

Legend:
- ✅ Completed