'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f609718a6d26cb15a9beccb8e455c2c4",
"assets/AssetManifest.bin.json": "868c5d37207934bc373e20e1e3936527",
"assets/AssetManifest.json": "7b0e65c0e0415d6a50943f1b06665265",
"assets/assets/1.jpg": "b99a90802178713c5880373549b53fb1",
"assets/assets/1307770.png": "ec7fe2079799cb0c44267ff243f83256",
"assets/assets/2.jpg": "f4745f48671d0983baf21ee5bc664a80",
"assets/assets/3.jpg": "68f30f85c75b3f3c0d429cdd77beb7d1",
"assets/assets/360.jpg": "c31defd01d249cad2c03194c0701dc47",
"assets/assets/4.jpg": "6669111a2231c01d1297a57ffeea2c34",
"assets/assets/5.jpg": "e40f252494444c975f951aac69a91b23",
"assets/assets/6.jpg": "7e2a6894ce173ccf5aa311fdc2557596",
"assets/assets/7.jpg": "ba1a1d11a9f6d9bb7f59c1a183734a38",
"assets/assets/8.jpg": "604f3c24811b61656c3263189cbfc8d2",
"assets/assets/bricksWall.jpg": "0628b8939a667163bad42f9dbffccca0",
"assets/assets/drwr.webp": "534e51b4a3faff54c374b14963d4ef89",
"assets/assets/emptyImg.jpg": "442c65853287036b1f8b5d15e1022e7c",
"assets/assets/final_puzzle.webp": "bd88681e8ed264a4b5bd2ad9252dfa0d",
"assets/assets/Flooring-Tilings.png": "cc179080ca9453d91d9399a4fc7a2946",
"assets/assets/home.jpg": "125abd315e8a3486300e5b64704d2c3f",
"assets/assets/icon/icon.jpg": "064adfd128df97aec110284d5f51a8a4",
"assets/assets/icon/new.png": "2726c2d06f89a2a509cf3f6e20eb507a",
"assets/assets/image.png": "27c085af64d023cf600ae7d12c1330a9",
"assets/assets/images-products-flyash.gif": "60422f3991ac3b70fb015f6011f13052",
"assets/assets/imgs.jpg": "f0c8cd595f1d35bf26298620c9be4c91",
"assets/assets/interlocking-brick.png": "acc75e35e2890cb9e790a621a32d7c5e",
"assets/assets/pastel.png": "2dc0ec59c932162b195f5db671417912",
"assets/assets/pavers/beeHive.webp": "9705364af8d575e55161e8049a5a9dc4",
"assets/assets/pavers/bigTryArc.png": "259ac79ea45a01fb0bdfed016efa86d9",
"assets/assets/pavers/cerb.webp": "aa5d5a791774b1184b16139ee4cb6564",
"assets/assets/pavers/cerbStone.webp": "77480c475884a26ca6af08601fea3665",
"assets/assets/pavers/coral.png": "ec5034e99383a9fc20717e25c9040664",
"assets/assets/pavers/grass.png": "0166168dec46b4296f169ae49ea6b79e",
"assets/assets/pavers/hexa.png": "b29714583a5169462118cc17ed22f048",
"assets/assets/pavers/ishape_product_image.png": "ea74f8f86d46acb412e3e0a299b8d5ef",
"assets/assets/pavers/oyel.png": "9c236dd902913b96f058869bed969e60",
"assets/assets/pavers/shell.png": "99e634f98cb77c3fb853e403dae5f579",
"assets/assets/pavers/square.png": "33f47b7637a33602020b2608b040e91f",
"assets/assets/pavers/squarePolish.png": "f3413aebb9d64bfb3e177d14a1fad016",
"assets/assets/pavers/squareR.webp": "7ac1c24939b48e4984e3fc93a1f2c37a",
"assets/assets/pavers/star.png": "aa454ba229a49aacd42e87b8073053ca",
"assets/assets/pavers/zigzagPolish.png": "13df7625d18f484a0cbb4317df65fd88",
"assets/assets/pavers/zigzagR.png": "015c5ce800f71eb3501979fff21a3fde",
"assets/assets/pngtree.png": "b096141649e368bbe58fe4b1ddad0772",
"assets/assets/Screenshot.jpg": "d9344206a8d85a3aea139ec6ce34342a",
"assets/assets/splash/eco.png": "60510e4fe4e7310984b8d7d798068e1b",
"assets/assets/splash/eco2.png": "6a5ed9f50135ad0e4eae35b1ca512cf9",
"assets/assets/splash/new.PNG": "726a8a5b93c8b5e40613bff2525cb0eb",
"assets/assets/splash/splash.png": "1904aa66e8fe6c3bf7387a8433d811d6",
"assets/assets/thum.webp": "fc753bc568ee1a0f548433b2b882ac47",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4de4660cd01f295b534704112cba3c1d",
"assets/NOTICES": "50cc80ef944130dae16f115d44257144",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "29cce35a9961d6f10b38863d51bc2e72",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "1108fb2533160df03fae3530dac210bd",
"icons/Icon-512.png": "1cf5d32967d83788d94aa4f32e32069c",
"index.html": "bef73de7e1a893dad7f03802f4521fc5",
"/": "bef73de7e1a893dad7f03802f4521fc5",
"main.dart.js": "d5b4f906bac465a1cb5a3dfa12d9d22f",
"manifest.json": "d4bb1500d93a83e4916a5182f3387b83",
"version.json": "be1e763d4ab16c920611b0582ffa1709"};
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
