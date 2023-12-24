async function execute(url) {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  console.log(url);
  const res = await fetch(proxyUrl + url);
  const html = await res.text();
  console.log(html);
}
