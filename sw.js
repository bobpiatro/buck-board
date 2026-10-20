// Photos: show the saved copy instantly, refresh in the background.
// Page + data: try the network, but fall back to the saved copy after 3s so weak signal never hangs the board.
const CACHE = "buck-board-v26";
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
const save = (req, res) => { if (res && res.ok) { const c = res.clone(); caches.open(CACHE).then(x => x.put(req, c)); } return res; };
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;
  if (url.pathname.includes("/img/") || url.pathname.includes("/icons/")) {
    e.respondWith(caches.match(req).then(hit => {
      const net = fetch(req).then(r => save(req, r));
      if (hit) { e.waitUntil(net.catch(() => {})); return hit; }
      return net;
    }));
    return;
  }
  e.respondWith(new Promise(resolve => {
    let done = false;
    const fallback = () => caches.match(req).then(m => m || caches.match("./"));
    const timer = setTimeout(() => fallback().then(m => { if (m && !done) { done = true; resolve(m); } }), 3000);
    fetch(req).then(r => { save(req, r); if (!done) { done = true; clearTimeout(timer); resolve(r); } })
      .catch(() => fallback().then(m => { if (!done) { done = true; clearTimeout(timer); resolve(m || Response.error()); } }));
  }));
});
