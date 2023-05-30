/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "014afe123bc4c9a8b015181687328ee8"
  },
  {
    "url": "assets/css/0.styles.1a28d61d.css",
    "revision": "cefff3f8c27847bd006c320ad3563c8b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.319d90cd.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.b3ff2635.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.48ce5359.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.94dcea96.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.b11b4b1c.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.4952821c.js",
    "revision": "b7e37e63b053f8899c44d96b8ab60677"
  },
  {
    "url": "assets/js/16.e2e33c06.js",
    "revision": "2970edb996bf2b7d9b9f7d3ab1889505"
  },
  {
    "url": "assets/js/17.e871db87.js",
    "revision": "d3e4f7f0a775ffa94a94e2ccb2c6e100"
  },
  {
    "url": "assets/js/18.7b5e75a7.js",
    "revision": "27067efbb1ed903a1ce8fea422a7ee02"
  },
  {
    "url": "assets/js/19.99397531.js",
    "revision": "2af13fcbc6726e6464ac3a89b6b15319"
  },
  {
    "url": "assets/js/2.6067c2ea.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.a8d21fa3.js",
    "revision": "b95f330e236beb20823e9f1df7d8ab1d"
  },
  {
    "url": "assets/js/21.5f996dad.js",
    "revision": "4001bbd23332c26199b2bdba216a3927"
  },
  {
    "url": "assets/js/22.3aee5486.js",
    "revision": "d0f94bfd870d1aed250cc1201d6fad84"
  },
  {
    "url": "assets/js/23.c8294dbe.js",
    "revision": "82613122bfc115bb30f9c54061358a74"
  },
  {
    "url": "assets/js/24.b14d8710.js",
    "revision": "a65051b4bfbbf710debfd9b889492e85"
  },
  {
    "url": "assets/js/26.bc045e76.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.a0d40ac1.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.f37a2a31.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4606a122.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.7ca211de.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.05b53819.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.aa2f625e.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.5cb427b8.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.b5b9fdf4.js",
    "revision": "de0c57d507f3f8010d4a992d1d181e9d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "be92dbb54d54fd63a6e5fe4548451134"
  },
  {
    "url": "design/index.html",
    "revision": "ad71d60e7e0c5290ef1354196ee5f507"
  },
  {
    "url": "index.html",
    "revision": "5b62337a5976a1988ca688cfa09b713c"
  },
  {
    "url": "intro/index.html",
    "revision": "d902436adc65935d708467ce85e4f0a8"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "85b3ae54435d179673b3260f56191b41"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "17a3d2b60225302ddc8cf4e743c8f57a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ba3568346aae6965a8d6a744587d4ee6"
  },
  {
    "url": "software/index.html",
    "revision": "69d432dafd5d9e29b5e3015b7f756d27"
  },
  {
    "url": "test/index.html",
    "revision": "376c6d84acc2046bb8714c47e1ad7b8a"
  },
  {
    "url": "use cases/index.html",
    "revision": "289ad6459a93106e4e988d3da9cc8371"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
