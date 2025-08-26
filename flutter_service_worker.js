'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "16ec07ff1a7451275f7286035ba8c84d",
".git/config": "7a4288d4e3c718292c6483ef242b4ac6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "ba0d084f69f401a3284525de117f3bc8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "10d3045db72c67531ce46196f1e77733",
".git/logs/refs/heads/main": "5bbf99eb8f9ddf9a8a8403eff456a2ca",
".git/logs/refs/remotes/origin/main": "f2388cf2804265352cb163918a661fa5",
".git/objects/09/f167c576a37009025de1e6dd8e98cb5af2cf0e": "f5fd99d292673194f0ce9d631d8a6c55",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "a39b5b4ad71f677d4dc37f620b141acc",
".git/objects/0b/d960eab1adeb8a4874f200da24800f785f53d0": "73ee4274ab8e0fe6549999bcbe75350c",
".git/objects/10/41c39de63473ec37abdab6d1f8d6309a6129d5": "64e4e80c6e758d0952dfcfc5b0464a5d",
".git/objects/12/d9bf8b73f78fba2bd7f3b9abe61486576f2cab": "d63911851e8b55f1023e4d02a22bcdbe",
".git/objects/15/db6f00a4a02e214817e69f22c17b5b0a226261": "0a7e48c89458b0471e526cf8e0aa35ee",
".git/objects/17/1ea44d22ec6c507748afdb59f8b14e8b021fda": "bea85f33e4bf35dc2b73fb3579c636af",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/28/871131656150105b76d17d77f207b0542dc3a5": "71b9cfc8a3a2024b3aed7242e5ef90be",
".git/objects/2b/b1bd225e43feccf62025f0068b24f607928f41": "a81eccb59560334facfd395326bd02c5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/19db74bb88e723373b28e5bbf12ffbbc825f41": "31b7aa411f57cb0222b5bdbe38968c18",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5d/6ded8fb95634735137c733b5e74a5284eb7651": "de586bf35dfdf8b219deff8092f045f5",
".git/objects/64/ed7aa549a10fabb2e540c0c66755ba59f7684a": "676b38a1dd0f2d1259e0e672939c2ce4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/9bebeda33358aeb45d787b6547ba0f0ef30d97": "3a1d774fff99b6d406a23053f8d89dd9",
".git/objects/76/b4f71f400e36ecde9a54d2d07599a3c6c64d98": "43bd63cd099e8958fa6a2c19ff94f6a9",
".git/objects/7a/1f813a9de677a778ed89f2812dea3c255ac3be": "db9900877a0e1c14476474449d9acc52",
".git/objects/88/8d16acb427d68d77bff093bbebe24874520b40": "15b53cecfff1d2260a0aa6b2711e6fd1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/c263e5ff2bc53187d6cc0decfcc01921c98f88": "69b445e4c373273d346f81707a12481f",
".git/objects/94/da8956d182ce98d953c83df8a9373216bd29e8": "e92876ac45767ae29d43c51c83af9605",
".git/objects/95/cbc26587aa85440dd3d7a7f898f6f8e88347ac": "245727e722dc519743f570077df8085d",
".git/objects/96/aab1f8de4195ea5a6c267f24c7c5811114a11e": "bc30835a12d00bf667d140b21f696864",
".git/objects/97/042eecdee90696c80065648b068aff40b7e4a6": "5649b201a7ae521422cc49f649eaaf9d",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/ad/4470e372f27d02ae054cdfefb67f2b4a0a2e24": "7d730b73b479edb740d036c7283db19b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c4/37f05ba26db594c98356273b7d030da7b7ffee": "a64f8b4182894d452d57b533fe977716",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/3f50d552dc58a421b4bc4b621a96104fad8c3c": "4254ba960c460a30742ff1269273f0dd",
".git/objects/e3/f62db130e696e11e4d166677697e9789fc5f93": "24be30047688d886e6d27bddf498d1f8",
".git/objects/e6/865fadd34927d3a22c1c5c83c281accb6c7f5f": "80aaf4c9e4bb2152c18104e01742b4c3",
".git/objects/e7/94631c1d55995c825a242090db39b5456c1b66": "fb850820f0c92423eb3c0d0b4aa600ef",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/e89b4fd46446358e7efcbb9596996b310ccb9b": "cc9464dcea264389d4992eba247c4c76",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/27fcad7b796de6252609474f54b56008d501fd": "4c2f78ccf1ebd7a6067d2b1e6fffc8d7",
".git/objects/f2/4b442aeb60a9b26b482474f49440bdeec41dd7": "6cfc479a0f17e273fcbb999bdded7dc2",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "2b65bbb5ddfe526a880a82bafee731f9",
".git/refs/remotes/origin/main": "2b65bbb5ddfe526a880a82bafee731f9",
"assets/AssetManifest.bin": "8fba62d4b20ccdb2d6821189ae4a4db2",
"assets/AssetManifest.bin.json": "89b70d129bb6a16153337032cc4ec30c",
"assets/AssetManifest.json": "c03965ca52cd052b3f67b4a1d589afe8",
"assets/assets/images/01.jpg": "549cfbbcff3abba583c96b1721fa12d4",
"assets/assets/images/02.jpg": "c9ee456af23197b0811b9d766735a73b",
"assets/assets/images/03.jpg": "ca194025b127a282bd0421aad2889843",
"assets/assets/images/04.jpg": "96e46e4c80a3009c0cd72698027f39fb",
"assets/assets/images/05.jpg": "35023355e2a9368ce860ac090163f836",
"assets/assets/images/06.jpg": "a0d22e78f538eed4aa0c60a1d4082225",
"assets/assets/images/ear.png": "a5e4ef6c0e66e3e653f259b58a9f82c6",
"assets/assets/images/logo.png": "0a3e55388867deabac236e9c478ce662",
"assets/assets/images/p1.png": "831a8b4468448ae978d48935c23da5f2",
"assets/assets/images/p2.png": "234b3d4e4947e3f9f6df2f197e36d237",
"assets/assets/images/p3.png": "113d38dda289be510a72a8a697835bec",
"assets/assets/images/p4.png": "bb8b1e180cde70f4d3fcface232e3d7a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8e477064fc0d9d54e044ec4fc209b052",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "cdea9cd8812ae57f56eb57c0c9ceaa29",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "30525f6041c755e25b08f78ec07410f9",
"/": "30525f6041c755e25b08f78ec07410f9",
"main.dart.js": "cfb3732ae9a4eb5bbcfc28c5b258597b",
"manifest.json": "a00e4e29297606e1ac47222411ee7121",
"version.json": "8e49d3a81d7dace0939204770efb3d8d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
