import express from "express";
import NodeCache from "node-cache";

//____________________________supplier________________________________

import nettruyen from "./plugin/nettruyen/index.js";

const app = express();
const port = process.env.PORT || 5000;

const cache = new NodeCache({ stdTTL: 300, checkperiod: 120 });
const cacheMiddleware = (req, res, next) => {
  const key = "__express__" + req.originalUrl || req.url;
  const cachedBody = cache.get(key);

  if (cachedBody) {
    console.log("__cache__");
    res.send(cachedBody);
    return;
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      cache.set(key, body);
      res.sendResponse(body);
    };
    next();
  }
};
app.use(cacheMiddleware);

app.get("/", (req, res) => {
  res.send("comic pro");
});

app.use("/nettruyen", nettruyen);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
