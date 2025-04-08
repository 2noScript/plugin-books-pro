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
| | Metruyencv | https://metruyencv.com |
| | TruyenFull | https://truyenfull.io |
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