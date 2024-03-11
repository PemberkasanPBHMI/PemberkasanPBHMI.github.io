'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cf8d172f9d76d3eb9fd3bde0e4c8db15",
".git/config": "96d8763d5cd541751164ded215acb312",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "20265dfee5ca4780bbd754ec51c9daae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1462ec8667b4a67d1b5a81b61a1346a6",
".git/logs/refs/heads/master": "1462ec8667b4a67d1b5a81b61a1346a6",
".git/logs/refs/remotes/origin/master": "bb7418a23770d1a3f7eb464178b8c19a",
".git/objects/00/a6223888fe5822658b21ee0a45f5da6ccab6da": "646b47d8ada806cdd2a361b7501968e1",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/17/ba97536ff4c25066d42447f7660cb7da6deebc": "1fa85e9764ba184b0bdafa45a49c2d4e",
".git/objects/19/420c07c7330c98357bbf6156e2e8debb478a24": "71cbdef6defc4b2c73783263578cec2a",
".git/objects/1b/092f4fa1b7fb9c48ff039329534aeebdeadd83": "d2077baae39d5d272c3b03c480a764c5",
".git/objects/1c/185b8e6567be8ba13b02a3829f6af965112bf8": "5f995486b980b17bbccee337b7c5da3b",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/22/e9fc84e28443303f76ba27698564460ddfd379": "70adba39cc8c69da2ffc61738f17690d",
".git/objects/2a/5630a65039c2b63a60f89434c7debb25536ef7": "0a9b0d69760077df95d9364a02d47bf4",
".git/objects/30/4661fa694281b15bac9e0ea13d09b101ee0d03": "107297bc363c802d1cee71b9a5ce9cab",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/49/7d06e0c42fdf75194ff785b41444d459480667": "96681e12f3afd589e8ef4f516b35403f",
".git/objects/4b/56fa1ef57100d8aeb5e5626699127ca1407ccd": "c56ff561270d71c77b21699348ba3f3e",
".git/objects/4f/5368b9f5586eab3470891f6fafb8fc90ec964b": "a09202c5ea65f52e8b3e24e6fa17f6b8",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5c/8e2f3ec8b184fa633d1c731c74f928e256229c": "e348d9ef9544e38f9b79189ee5c89738",
".git/objects/61/31072a7e6d73fde1de701066e3d1f8a3565a63": "eb73c16b6f4570449faf085e62726749",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/2d51c7a10495c84b50eccc51685e1f5f1f77e2": "3cfac7ed60a69a021b020819552c14bc",
".git/objects/6e/53371519cdfd88585440077cca0be3e047d97f": "871fd1d55098d91cc38811683613ef83",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/7a/703b1922a83b935ed29d372a3bf6521ba42945": "9a44d59b2ffd6880da622032adbe435c",
".git/objects/7b/33e7f458fd134cf3be5fc67a748d2498177c74": "7becff0651a0c202dea58c4ad9f4f418",
".git/objects/88/9c322991237d4e8d292e361fec2af56ea73ad0": "815d5e79c57fbbaae35406049fa1fc6c",
".git/objects/8c/2c9a9eec25ddf127066f298e56e4ee6bda5b48": "6811fc6a2b96c09da8b1873e9ce86bc9",
".git/objects/98/d842cb3b7d8ff9368ef81906c90f423138870a": "512b738d811d1d8bc4417d40ecfdedfc",
".git/objects/9a/97f94c0761c4a78f62494cb5b8f09f12a74463": "399a8f4e11c3592b8f65b3f8ad9c76c6",
".git/objects/9c/91c4163893bf5767d07e0e79f0de090ceb6e4c": "edef6ddc23c0c1be659aa3e9094f082f",
".git/objects/a4/cc54901cc4aeb4e8d800ec94e6e98c7d6a1965": "8f9bef2a62c7c4829faa231b2ad34ac5",
".git/objects/af/91c96457e2065264bdb318f03606e415e98ef0": "6fe3941f4ca419bfc1b1acab2a52708e",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/ba51025560f00f59a5e9121943032566bfdf38": "0f0f4384c519a163d3733277ec2d0ed2",
".git/objects/ba/08c75abbddc07cc1e2e78afd8feb55a8bc0cc1": "843274461f119bb2789b3ffb1bd1ab65",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/a2562754a6620df36dc94865ddda9dfa26bc3e": "c78bab8f8ea33b4fcc18e0e472364dc9",
".git/objects/bf/89000a31313f89b5cbfc1f31582e30f2585089": "c8604c522629f735cf6b0b077070f359",
".git/objects/c3/5510a36a9dda5977a828226a181e4e5c224a2f": "116e9cefbe8efbb7ea935f9db29d8b9d",
".git/objects/c3/e37d70a20b5fc45cbede9768669eaa61ef02ae": "274b571416fef277f0b860cf03338791",
".git/objects/c5/585bcb0bfd0c8c10697f1171a88bdd4b88e9f3": "9d9f029a3cacbb34bd146761d84d8129",
".git/objects/d2/ec231d36109e7ee4f98f3ecc6ee94e65a97500": "0ce683cdf8843d7381cdb3f86185cf2b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/dd06d844cf030cfb06fee5069b8b0004b89070": "6c8eda428d2a4c169755ebd1702b6032",
".git/objects/d6/6dcb60705a636265b77bff5ef940eded7d62e9": "af5f05d8a38baed72d69c10135641457",
".git/objects/db/f41a127ced5c8241b7d1129000eb4cd0e65647": "5a6efbd185ad5b30aa3bebed3545cdc8",
".git/objects/dc/ffc9279baee19253f25d7570cf9f04f4974ffe": "d27e0bd4027ef5f85ddc13f17da1b723",
".git/objects/f3/69c388980a9e022f0c9ff39586f561af716a31": "5e2055bdf01f614b8316ee1ebb7f0c08",
".git/objects/f3/e048d936ccf11d1fd76bfb40c8d53582726090": "0c93d86a6c21b2985871091b117b7ad7",
".git/objects/f9/67bf81afc42dfb98a9212d86a423e1fd0db7ed": "dc4ae9eb42eca1fc41f2710fb5ff18db",
".git/objects/fe/53f90b64baa97a7d4e21178187f2b312352877": "39961c255ae98efc67ee5e8e601019a2",
".git/refs/heads/master": "aa78f3ec6cc69e240e2dfb5c55fa734d",
".git/refs/remotes/origin/master": "aa78f3ec6cc69e240e2dfb5c55fa734d",
"assets/AssetManifest.bin": "e8290d4d9c95cc566f35b06d1dd32b57",
"assets/AssetManifest.json": "f0f22b02e13f64fa4ca19fcbcc11ba4e",
"assets/assets/image/background.png": "da10e3e503138c5c140ff89b50a0aef2",
"assets/assets/image/icon_active_faq.svg": "0cd284ca111aff6598ccc05e9e4a4032",
"assets/assets/image/icon_active_features.svg": "453a053f147191d02bf3a7e8b492985c",
"assets/assets/image/icon_active_home.svg": "73641bcf8d176597a6de0e2b525a2e09",
"assets/assets/image/icon_active_pricing.svg": "20f42b7fee935bbae020a0dca47ba39c",
"assets/assets/image/icon_inactive_faq.svg": "e22a1e20dd892abe2cda72646b1a4007",
"assets/assets/image/icon_inactive_features.svg": "788ec79a6992628ce27b91f94e05b5f8",
"assets/assets/image/icon_inactive_home.svg": "3bb5352c45869331c0c45e7de8912060",
"assets/assets/image/icon_inactive_pricing.svg": "4632a82d22a477e731293f4c65ed8216",
"assets/assets/image/logo.png": "2db94f2849a891b4e1d77d42dda89214",
"assets/assets/image/thumbnail.png": "736ae06e7f80baed1cb81d65a25d76f8",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c61dcdb3aee2da6223da58bef805a26f",
"assets/NOTICES": "e7dad62b68b5383449e2aac876c7a6c1",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"index.html": "159ae4472d07e642eeac790a54f6cc6c",
"/": "159ae4472d07e642eeac790a54f6cc6c",
"main.dart.js": "6b797ca1c8831198fc89ba4efb6f2176",
"robots.txt": "7496f0cbd367dd03cc8f60138ca1db73",
"sitemap.xml": "a8f1a9e6da6813afbe37166dbb04beb5",
"version.json": "c10ce13085693c6f86c0d0bf181e9db3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
