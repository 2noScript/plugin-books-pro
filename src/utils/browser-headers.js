import lodash from "lodash";

const { sample } = lodash;

const browserHeaders = [
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64; rv:57.0.4) Gecko/20100101 Firefox/57.0.4",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.2; rv:52.7.1) Gecko/20100101 Firefox/52.7.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0 Safari/537.36 OPR/58.0.3135.127",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1; rv:66.0.4) Gecko/20100101 Firefox/66.0.4",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 OPR/50.0.2762.58",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1; rv:58.0.1) Gecko/20100101 Firefox/58.0.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.158 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36 OPR/54.0.2952.54",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36 OPR/53.0.2907.110",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64; rv:60.5.2) Gecko/20100101 Firefox/60.5.2",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.158 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36 OPR/54.0.2952.54",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.5.1) Gecko/20100101 Firefox/60.5.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36 OPR/56.0.3051.52",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36 OPR/53.0.2907.99",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.62 Safari/537.36 OPR/53.0.2907.68",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Safari/537.36 OPR/51.0.2830.34",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36 OPR/56.0.3051.43",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809 Safari/537.36 OPR/58.0.3135.107",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.79 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36 OPR/55.0.2994.37",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770 Safari/537.36 OPR/57.0.3098.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770 Safari/537.36 OPR/57.0.3098.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/56.0.3051.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36 OPR/51.0.2830.40",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.1805 Safari/537.36 OPR/54.0.2952.51",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2; rv:52.7.3) Gecko/20100101 Firefox/52.7.3",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626 Safari/537.36 OPR/56.0.3051.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3; rv:57.0.3) Gecko/20100101 Firefox/57.0.3",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.2; rv:62.0.3) Gecko/20100101 Firefox/62.0.3",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3; rv:52.5.3) Gecko/20100101 Firefox/52.5.3",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64; rv:52.7.1) Gecko/20100101 Firefox/52.7.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64; rv:60.3.0) Gecko/20100101 Firefox/60.3.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626 Safari/537.36 OPR/56.0.3051.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.84 Safari/537.36 OPR/54.0.2952.71",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:52.1.1) Gecko/20100101 Firefox/52.1.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/56.0.3051.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4; rv:52.9.0) Gecko/20100101 Firefox/52.9.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36 OPR/53.0.2907.110",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36 OPR/53.0.2907.99",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626 Safari/537.36 OPR/56.0.3051.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36 OPR/53.0.2907.110",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36 OPR/51.0.2830.40",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:63.0.3) Gecko/20100101 Firefox/63.0.3",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3; rv:67.0.2) Gecko/20100101 Firefox/67.0.2",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:57.0.3) Gecko/20100101 Firefox/57.0.3",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36 OPR/53.0.2907.106",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Safari/537.36 OPR/50.0.2762.67",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/56.0.3051.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809 Safari/537.36 OPR/58.0.3135.107",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:57.0) Gecko/20100101 Firefox/57.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729 Safari/537.36 OPR/57.0.3098.106",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.62 Safari/537.36 OPR/53.0.2907.68",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2; rv:52.4.1) Gecko/20100101 Firefox/52.4.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36 OPR/55.0.2994.44",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.2; rv:57.0.1) Gecko/20100101 Firefox/57.0.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64; rv:52.8.1) Gecko/20100101 Firefox/52.8.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 OPR/50.0.2762.58",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36 OPR/53.0.2907.99",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64; rv:51.0) Gecko/20100101 Firefox/51.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2; rv:50.0.1) Gecko/20100101 Firefox/50.0.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Safari/537.36 OPR/50.0.2762.67",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0.1) Gecko/20100101 Firefox/66.0.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36 OPR/53.0.2907.110",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686; rv:50.0.2) Gecko/20100101 Firefox/50.0.2",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729 Safari/537.36 OPR/57.0.3098.106",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36 OPR/54.0.2952.54",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.1805 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64; rv:60.4.0) Gecko/20100101 Firefox/60.4.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3; rv:55.0) Gecko/20100101 Firefox/55.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36 OPR/53.0.2907.106",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36 OPR/56.0.3051.52",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686; rv:50.0.1) Gecko/20100101 Firefox/50.0.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686; rv:57.0.3) Gecko/20100101 Firefox/57.0.3",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36 OPR/55.0.2994.37",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/56.0.3051.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:59.0.2) Gecko/20100101 Firefox/59.0.2",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.1; rv:52.7.4) Gecko/20100101 Firefox/52.7.4",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36 OPR/55.0.2994.61",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626 Safari/537.36 OPR/56.0.3051.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809 Safari/537.36 OPR/58.0.3135.107",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626 Safari/537.36 OPR/56.0.3051.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0 Safari/537.36 OPR/60.0.3255.170",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64; rv:60.5.0) Gecko/20100101 Firefox/60.5.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.84 Safari/537.36 OPR/54.0.2952.71",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.80 Safari/537.36 OPR/56.0.3051.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 OPR/50.0.2762.58",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36 OPR/56.0.3051.52",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1; rv:52.7.1) Gecko/20100101 Firefox/52.7.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2; rv:52.7.0) Gecko/20100101 Firefox/52.7.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36 OPR/51.0.2830.40",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.80 Safari/537.36 OPR/56.0.3051.104",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809 Safari/537.36 OPR/58.0.3135.107",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729 Safari/537.36 OPR/57.0.3098.106",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5; rv:66.0.1) Gecko/20100101 Firefox/66.0.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3; rv:63.0) Gecko/20100101 Firefox/63.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36 OPR/54.0.2952.54",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5; rv:58.0.2) Gecko/20100101 Firefox/58.0.2",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.116 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3; rv:52.6.0) Gecko/20100101 Firefox/52.6.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64; rv:52.7.1) Gecko/20100101 Firefox/52.7.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.62 Safari/537.36 OPR/53.0.2907.68",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.79 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36 OPR/51.0.2830.40",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3; rv:62.0.2) Gecko/20100101 Firefox/62.0.2",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.1805 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36 OPR/51.0.2830.55",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36 OPR/51.0.2830.40",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3; rv:60.2.1) Gecko/20100101 Firefox/60.2.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/56.0.3051.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.1; rv:59.0.1) Gecko/20100101 Firefox/59.0.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626 Safari/537.36 OPR/56.0.3051.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36 OPR/54.0.2952.64",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.158 Safari/537.36 OPR/52.0.2871.99",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5; rv:53.0) Gecko/20100101 Firefox/53.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Safari/537.36 OPR/51.0.2830.34",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36 OPR/56.0.3051.99",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.80 Safari/537.36 OPR/56.0.3051.104",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686; rv:52.8.0) Gecko/20100101 Firefox/52.8.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:61.0.2) Gecko/20100101 Firefox/61.0.2",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36 OPR/51.0.2830.55",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.2; rv:51.0) Gecko/20100101 Firefox/51.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770 Safari/537.36 OPR/57.0.3098.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.0; WOW64; rv:59.0) Gecko/20100101 Firefox/59.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.79 Safari/537.36 OPR/54.0.2952.60",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64; rv:57.0.1) Gecko/20100101 Firefox/57.0.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.3; rv:61.0.2) Gecko/20100101 Firefox/61.0.2",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3; rv:52.0.1) Gecko/20100101 Firefox/52.0.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64; rv:52.0.1) Gecko/20100101 Firefox/52.0.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36 OPR/54.0.2952.54",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/56.0.3051.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Safari/537.36 OPR/51.0.2830.34",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686; rv:52.2.0) Gecko/20100101 Firefox/52.2.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64; rv:60.4.0) Gecko/20100101 Firefox/60.4.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1; rv:64.0.2) Gecko/20100101 Firefox/64.0.2",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64; rv:57.0.4) Gecko/20100101 Firefox/57.0.4",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64; rv:52.0.2) Gecko/20100101 Firefox/52.0.2",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/56.0.3051.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770 Safari/537.36 OPR/57.0.3098.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:59.0.2) Gecko/20100101 Firefox/59.0.2",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64; rv:60.4.0) Gecko/20100101 Firefox/60.4.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770 Safari/537.36 OPR/57.0.3098.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6; rv:50.0.2) Gecko/20100101 Firefox/50.0.2",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.170 Safari/537.36 OPR/52.0.2871.64",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.79 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.80 Safari/537.36 OPR/56.0.3051.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2; rv:51.0.1) Gecko/20100101 Firefox/51.0.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1; rv:67.0) Gecko/20100101 Firefox/67.0",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/56.0.3051.116",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:58.0.1) Gecko/20100101 Firefox/58.0.1",
  },
  {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36",
  },
];
export const randomHeaders = () => {
  return sample(browserHeaders);
};
