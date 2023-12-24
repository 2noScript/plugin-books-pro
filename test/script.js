const executeScript = (url) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.text();
    })
    .then((jsCode) => {
      //   const dynamicFunction = new Function("param1", jsCode);
      //   eval(jsCode);
      //   console.log(jsCode);
      //   dynamicFunction("xx");
      eval(`(${jsCode})('https://www.nettruyenus.com')`);
    })
    .catch((error) => {
      console.error(`Không thể tải nội dung từ ${url}: ${error}`);
    });
};

const path =
  "https://raw.githubusercontent.com/2noScript/plugin-comic-pro/main/test/githubContentExcute.js";

executeScript("./rex.js");
