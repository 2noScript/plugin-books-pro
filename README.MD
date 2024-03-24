## Install

```shell
yarn add plugin-comic-pro
```

## use

```js

import {Comic ,Suppliers } from 'plugin-comic-pro'

const cm=new Comic()
const nettruyen=cm.build(Suppliers.NetTuyen,'https://www.nettruyenff.com')
const truyenqq=cm.build(Suppliers.TruyenQQ,'https://truyenqqvn.com')


```