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
    "revision": "d491ae315be9345bd429ed2a0d58a128"
  },
  {
    "url": "about.html",
    "revision": "176566eab586c8aa6446779044aad0fd"
  },
  {
    "url": "assets/css/0.styles.12d0744c.css",
    "revision": "17863ffb47abf34be8086829038be229"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6c160eac.js",
    "revision": "ed935520b1705a4d4e6937d2575285e5"
  },
  {
    "url": "assets/js/11.0409c95e.js",
    "revision": "595163f1af7d970f1a22c3e137513bd3"
  },
  {
    "url": "assets/js/12.27d6c98f.js",
    "revision": "e3b854ba1f62b836d206ee0f3e017edf"
  },
  {
    "url": "assets/js/13.a3c07268.js",
    "revision": "17f092de192995da24ae938869f03697"
  },
  {
    "url": "assets/js/14.14e019d3.js",
    "revision": "22c06e9ebc445edb333d09337342f32f"
  },
  {
    "url": "assets/js/15.e322c637.js",
    "revision": "33617ace758c8593f35354c3a756da25"
  },
  {
    "url": "assets/js/16.e9949b27.js",
    "revision": "673ca71b9e39bebaa1860a34e8fa05c5"
  },
  {
    "url": "assets/js/17.c293b89d.js",
    "revision": "ba0a9f2bb0f05d9414e56b689e3e11a9"
  },
  {
    "url": "assets/js/18.48f3c7a8.js",
    "revision": "0d665ee34a4fda4dfd8369076a5601c0"
  },
  {
    "url": "assets/js/19.3364ee53.js",
    "revision": "5d5d4be3b7b1cccc1ad1877e08beae59"
  },
  {
    "url": "assets/js/2.1025e516.js",
    "revision": "341999e518f9cb42abdad44120764fda"
  },
  {
    "url": "assets/js/20.0e2c8922.js",
    "revision": "e07f4b38ac0ec703ca02f5666faeef77"
  },
  {
    "url": "assets/js/21.d2e4e1be.js",
    "revision": "aa93cf38f50779857bce704275023b6e"
  },
  {
    "url": "assets/js/22.32de6686.js",
    "revision": "ac569e05c67d49e91b2971f40d0b9cdb"
  },
  {
    "url": "assets/js/23.4fd34717.js",
    "revision": "868a5faaa736007b4d396c4b3baf69fb"
  },
  {
    "url": "assets/js/24.e3a3c0b9.js",
    "revision": "84afb798b876ef6c8eadd623790815e4"
  },
  {
    "url": "assets/js/25.268d5185.js",
    "revision": "10c6bd2eb5b929a16506c3d52434e680"
  },
  {
    "url": "assets/js/26.45a763ee.js",
    "revision": "8d10bc0673bbd7564478d4a721dca97e"
  },
  {
    "url": "assets/js/27.b230c0dd.js",
    "revision": "0ccba0eae0d175c40c81e2a427352b85"
  },
  {
    "url": "assets/js/28.e69327d1.js",
    "revision": "7faafa84e277853b075f8a0cd8b12970"
  },
  {
    "url": "assets/js/29.1c961335.js",
    "revision": "95c9a995463d861c62f3e92c370edeb5"
  },
  {
    "url": "assets/js/3.6736e6ee.js",
    "revision": "8b08f679eb1cd8efbb0c546201b919e2"
  },
  {
    "url": "assets/js/4.a41aa6be.js",
    "revision": "0b4014143777262ee1a69abcf6874c7a"
  },
  {
    "url": "assets/js/5.d789b75a.js",
    "revision": "497a75bb51c716ddbecd6bf42da283d9"
  },
  {
    "url": "assets/js/6.b8dcb539.js",
    "revision": "f2651ec0cabb3cc10533c541f7c29bae"
  },
  {
    "url": "assets/js/7.6568cc16.js",
    "revision": "7b398d65a98a8033e5ad033a72db40c3"
  },
  {
    "url": "assets/js/8.5c21f5be.js",
    "revision": "bf9b895683b03e38d267601a2c951743"
  },
  {
    "url": "assets/js/9.5dc0d465.js",
    "revision": "b45530ac26d17b170096622fa550efac"
  },
  {
    "url": "assets/js/app.054bf114.js",
    "revision": "2422e19cd5bc7a4db7bc84908500bdd9"
  },
  {
    "url": "demo.html",
    "revision": "bc17a040fd5fb8b41e416eb01116da7b"
  },
  {
    "url": "en/about.html",
    "revision": "46a42b7f562a36b0db945c27a3bf33d1"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "3600538fe5b0006421cbfe1da8eeb4be"
  },
  {
    "url": "en/guide/config.html",
    "revision": "025adce8326f1579b0178c3573619aab"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "b38a0b0e9fc810521968cc3465ca2af0"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "74d45eff8fa4b3b154217c58d2e372e7"
  },
  {
    "url": "en/guide/index.html",
    "revision": "6e001b5aa9648d3ad447bb70eb49f23f"
  },
  {
    "url": "en/guide/page.html",
    "revision": "49766370aa8a3aaa872ddb2687f7c461"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "ef375f674dca36e39ab42f8b8f46d58c"
  },
  {
    "url": "en/guide/Todo.html",
    "revision": "fca4f708030e22cabc92ea7af2be0900"
  },
  {
    "url": "en/index.html",
    "revision": "3e4c7833f1e7a615689037204e34b688"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "76fe8a0ee57305fdeeb30b71d284b091"
  },
  {
    "url": "guide/config.html",
    "revision": "00cca253f3ca7c12670520181223279a"
  },
  {
    "url": "guide/faq.html",
    "revision": "99dcb9eb2db3000de49ede4a5107fc2b"
  },
  {
    "url": "guide/icon.html",
    "revision": "933f93130e470eb0ef6f1df63126e2b0"
  },
  {
    "url": "guide/index.html",
    "revision": "d7bc03ea8dc916fca176b4dcff531706"
  },
  {
    "url": "guide/page.html",
    "revision": "a63374405c29c46d02b0b44a2ab8ddca"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "aa5ff993abd733451c26a25c0238bd1f"
  },
  {
    "url": "guide/Todo.html",
    "revision": "ee8eb1a876e9c0e0277055fae5438539"
  },
  {
    "url": "index.html",
    "revision": "59816fd6f41f276bea5f52a4d1b0177b"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "sponsor.html",
    "revision": "a6690ad721d02b017926b13b86055164"
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
