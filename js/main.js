/* =========================================================
   LABEL ISHAANI — shared header, footer, wishlist, helpers
   (runs on every page)
   ========================================================= */

const PLACEHOLDER = "images/placeholder.svg";
const fmt = n => (n == null ? "Price on launch" : "₹ " + n.toLocaleString("en-IN") + ".00");
const byId = id => PRODUCTS.find(p => p.id === id);
const waUrl = msg => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
const IG_URL = CONFIG.instagramUrl || `https://www.instagram.com/${CONFIG.instagram}/`;
const IG_DM = CONFIG.instagramDM || `https://ig.me/m/${CONFIG.instagram}`;
/* Brand mark: logo in a soft circle */
const logoMark = (size = "") =>
  `<span class="logo-mark ${size}"><img src="${esc(CONFIG.logo || "images/logo-circle.png")}" alt="" width="64" height="64"></span>`;
const brandLogo = () =>
  `<a href="index.html" class="logo" aria-label="${esc(CONFIG.brand)} home">${logoMark()}<span class="logo-word">label<em>Ishaani</em></span></a>`;
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const img = (src, alt = "", attrs = "") =>
  `<img src="${esc(src || PLACEHOLDER)}" alt="${esc(alt)}" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER}'" ${attrs}>`;

/* ---------- Icons ---------- */
const ICON = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 7h14l-1 14H6L5 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
  bagPlus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 7h14l-1 14H6L5 7Z"/><path d="M9 7a3 3 0 0 1 6 0M12 11v6M9 14h6"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/></svg>',
  ig: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  wa: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.2Z"/></svg>',
  left: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>',
  right: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>',
  arrowUp: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  go: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  share: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/></svg>',
  hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-4-7-10V5l7-2 7 2v6c0 6-7 10-7 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  india: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/><path d="M12 3v6.5M12 14.5V21M3 12h6.5M14.5 12H21"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>'
};

/* ---------- Wishlist (saved in the visitor's browser) ---------- */
let WISH = [];
try { WISH = JSON.parse(localStorage.getItem("li-wish")) || []; } catch (e) {}
WISH = WISH.filter(id => byId(id));
function saveWish() {
  try { localStorage.setItem("li-wish", JSON.stringify(WISH)); } catch (e) {}
  const c = document.getElementById("wishCount");
  if (c) c.textContent = WISH.length;
}
function toggleWish(id) {
  const on = !WISH.includes(id);
  WISH = on ? [...WISH, id] : WISH.filter(x => x !== id);
  saveWish();
  toast(on ? "Added to wishlist" : "Removed from wishlist");
  document.querySelectorAll(`.wish[data-id="${id}"]`).forEach(b => {
    b.classList.toggle("on", on); b.setAttribute("aria-pressed", on);
  });
}

function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 1800);
}

function orderMessage(p, size = "", color = "") {
  const url = new URL("product.html?id=" + encodeURIComponent(p.id), location.href).href;
  return `Hi ${CONFIG.brand}! I'd like to order:\n${p.name} (${fmt(p.price)})` +
    (size ? `\nSize: ${size}` : `\nSize: `) + (color ? `\nColour: ${color}` : "") + `\n${url}`;
}

/* ---------- Order on Instagram ----------
   Instagram DMs can't be pre-filled, so we copy the order details
   to the clipboard and open a DM to @labelishaani to paste them. */
async function orderOnInstagram(msg) {
  // start the copy while we still have the tap, then open Instagram
  const copying = msg && navigator.clipboard ? navigator.clipboard.writeText(msg) : Promise.reject();
  const win = window.open(IG_DM, "_blank");
  let copied = false;
  try { await copying; copied = true; } catch (e) {}
  toast(copied ? "Order details copied. Paste them in the Instagram chat." : "Opening Instagram. Send us the piece and your size.");
  if (!win) location.href = IG_DM;
}

/* ---------- Product card (used on home + shop) ---------- */
function productCard(p) {
  const on = WISH.includes(p.id), soon = p.status === "soon";
  const link = `product.html?id=${encodeURIComponent(p.id)}`;
  const chipCat = CATEGORIES.find(c => c.id === p.cats.find(x => x !== "new"));
  return `
  <article class="card">
    <div class="card-img">
      <a href="${link}" aria-label="${esc(p.name)}">${img(p.images[0], p.name)}</a>
      ${soon ? `<span class="flag soon">Coming soon</span>` : p.bestseller ? `<span class="flag">Best Seller</span>` : ""}
      <button class="wish ${on ? "on" : ""}" data-id="${p.id}" aria-label="Add to wishlist" aria-pressed="${on}">${ICON.heart}</button>
      ${soon ? "" : `<a class="quick" href="${link}" aria-label="Choose size and order">${ICON.bagPlus}</a>`}
    </div>
    <a class="card-body" href="${link}">
      ${chipCat ? `<span class="chip">${esc(chipCat.label)}</span>` : ""}
      <span class="card-name">${esc(p.name)}</span>
      <span class="card-price">${fmt(p.price)}${p.price ? `<small class="ship-note"> + Shipping charges</small>` : ""}</span>
    </a>
  </article>`;
}

/* ---------- Rail arrows (horizontal scrollers) ---------- */
function setupRail(wrap) {
  const rail = wrap.querySelector(".rail"), prev = wrap.querySelector(".prev"), next = wrap.querySelector(".next");
  const update = () => {
    prev.hidden = rail.scrollLeft < 5;
    next.hidden = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 5;
  };
  prev.onclick = () => rail.scrollBy({ left: -rail.clientWidth * .8, behavior: "smooth" });
  next.onclick = () => rail.scrollBy({ left: rail.clientWidth * .8, behavior: "smooth" });
  rail.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
  return update;
}

/* ---------- Header ---------- */
function renderHeader() {
  const page = location.pathname.split("/").pop() || "index.html";
  const cat = new URLSearchParams(location.search).get("cat");
  const navItems = [
    { label: "New Arrivals", href: "shop.html?cat=new", cat: "new" },
    { label: "Co-ord Sets",  href: "shop.html?cat=sets", cat: "sets" },
    { label: "Dresses",      href: "shop.html?cat=dresses", cat: "dresses" },
    { label: "Lehengas",     href: "shop.html?cat=lehengas", cat: "lehengas" },
    { label: "Festive Edit", href: "shop.html?cat=festive", cat: "festive" },
    { label: "Coming Soon",  href: "shop.html?cat=soon", cat: "soon" },
    { label: "Shop All",     href: "shop.html", cat: "all" },
    { label: "Support",      href: "#footer" },
    { label: "Order on WhatsApp", href: waUrl(`Hi ${CONFIG.brand}! I have a question.`), ext: true, cls: "nav-wa" },
    { label: "Order on Instagram", href: IG_DM, ext: true, cls: "nav-ig" }
  ];
  const msgs = (CONFIG.announcements || []).filter(Boolean);
  const ticker = msgs.length ? (() => {
    const item = t => `<span class="ticker-item">${esc(t)}</span><span class="ticker-sep" aria-hidden="true">✦</span>`;
    const set = Array.from({ length: Math.max(1, Math.ceil(8 / msgs.length)) }, () => msgs.map(item).join("")).join("");
    return `<a class="ticker" href="${IG_DM}" target="_blank" rel="noopener" aria-label="Customization available. Message us on Instagram">
    <span class="sr-only">Message us</span>
    <span class="ticker-track"><span class="ticker-set">${set}</span><span class="ticker-set" aria-hidden="true">${set}</span></span>
  </a>`;
  })() : "";
  document.getElementById("site-header").innerHTML = ticker + `
  <header class="topbar">
    ${brandLogo()}
    <div class="actions">
      <button id="searchBtn" aria-expanded="false" aria-controls="searchbar"><span class="lbl">Search</span>${ICON.search}</button>
      <a href="#" id="cartLink"><span class="lbl">Cart</span>${ICON.bag}</a>
      <a href="shop.html?cat=wishlist"><span class="lbl">Wishlist</span>
        <span class="badge-wrap">${ICON.heart}<span class="badge" id="wishCount">0</span></span></a>
      <a href="${IG_URL}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.ig}</a>
    </div>
  </header>
  <div class="searchbar" id="searchbar">
    <label class="sr" for="searchInput">Search products</label>
    <input id="searchInput" type="search" placeholder="Search for dresses, sets, lehengas…" autocomplete="off">
    <div class="search-results" id="searchResults"></div>
  </div>
  <nav class="nav" aria-label="Main"><ul>
    ${navItems.map(n => `<li><a href="${n.href}" ${n.ext ? 'target="_blank" rel="noopener"' : ""}
      class="${n.cls || ""} ${page === "shop.html" && (cat || "all") === n.cat ? "current" : ""}">${n.label}</a></li>`).join("")}
  </ul></nav>`;

  // search
  const btn = document.getElementById("searchBtn"), bar = document.getElementById("searchbar"),
        input = document.getElementById("searchInput"), out = document.getElementById("searchResults");
  btn.onclick = () => {
    const open = bar.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    if (open) input.focus();
  };
  input.oninput = () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { out.innerHTML = ""; return; }
    const hits = PRODUCTS.filter(p => (p.name + " " + p.cats.join(" ")).toLowerCase().includes(q));
    out.innerHTML = hits.length
      ? hits.map(p => `<a href="product.html?id=${p.id}">${img(p.images[0], "")}<span>${esc(p.name)}<br><b>${fmt(p.price)}</b></span></a>`).join("")
      : `<p style="font-size:14px;color:var(--muted)">No pieces match “${esc(input.value)}”. Try “dress” or “set”.</p>`;
  };

  // cart = send wishlist on WhatsApp
  document.getElementById("cartLink").onclick = e => {
    e.preventDefault();
    const items = WISH.map(byId).filter(p => p && p.status !== "soon");
    const msg = items.length
      ? `Hi ${CONFIG.brand}! I'd like to order:\n` + items.map(p => `• ${p.name} (${fmt(p.price)}) — Size: `).join("\n")
      : `Hi ${CONFIG.brand}! I'd like to place an order.`;
    window.open(waUrl(msg), "_blank");
  };
}

/* ---------- Footer ---------- */
function renderFooter() {
  const shopLinks = CATEGORIES.filter(c => c.id !== "all")
    .map(c => `<li><a href="shop.html?cat=${c.id}">${c.label}</a></li>`).join("");
  const trust = [
    { icon: "chat",  small: "Easy",      big: "WhatsApp & Instagram orders" },
    { icon: "hand",  small: "Carefully", big: "Handcrafted" },
    { icon: "truck", small: "Shipping",  big: "Across India" },
    { icon: "india", small: "Proudly",   big: "Made in India" }
  ];
  document.getElementById("site-footer").innerHTML = `
  <footer id="footer">
    <div class="wrap">
      <div class="foot">
        <div>
          ${brandLogo()}
          <p class="foot-about">${typeof BRAND_STORY !== "undefined" ? esc(BRAND_STORY.lead[1]) + " " : ""}Handcrafted in small batches. Order on WhatsApp or Instagram.</p>
        </div>
        <div><h4>Help</h4><ul>
          <li><a href="${waUrl(`Hi ${CONFIG.brand}! I'd like to track my order.`)}" target="_blank" rel="noopener">Track Order</a></li>
          <li><a href="${waUrl(`Hi ${CONFIG.brand}! I have a question about shipping.`)}" target="_blank" rel="noopener">Shipping</a></li>
          <li><a href="${IG_DM}" target="_blank" rel="noopener">Order on Instagram</a></li>
          <li><a href="${waUrl(`Hi ${CONFIG.brand}!`)}" target="_blank" rel="noopener">Contact Us</a></li>
        </ul></div>
        <div><h4>Shop</h4><ul>${shopLinks}</ul></div>
        <div><h4>Account</h4><ul>
          <li><a href="shop.html?cat=wishlist">Wishlist</a></li>
        </ul></div>
        <div><h4>Company</h4><ul>
          <li><a href="${IG_URL}" target="_blank" rel="noopener">About Us</a></li>
          ${CONFIG.website ? `<li><a href="${esc(CONFIG.website)}">${esc(CONFIG.website.replace(/^https?:\/\//, "").replace(/\/$/, ""))}</a></li>` : ""}
          ${CONFIG.email ? `<li><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>` : ""}
        </ul></div>
      </div>
      <div class="trust">
        ${trust.map(t => `<div>${ICON[t.icon]}<span><small>${t.small}</small><b>${t.big}</b></span></div>`).join("")}
      </div>
      <div class="foot-bottom">
        <span>© ${new Date().getFullYear()} ${CONFIG.brand}</span>
        <div class="socials">
          <a href="${IG_URL}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.ig}</a>
          <a href="${waUrl(`Hi ${CONFIG.brand}!`)}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.wa}</a>
        </div>
        <a href="${IG_URL}" target="_blank" rel="noopener">@${CONFIG.instagram}</a>
      </div>
    </div>
  </footer>
  <a class="float-ig" href="${IG_DM}" target="_blank" rel="noopener" aria-label="Order on Instagram">${ICON.ig}<span>Order on Instagram</span></a>
  <a class="float-wa" href="${waUrl(`Hi ${CONFIG.brand}!`)}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICON.wa.replace('width="22" height="22"', 'width="30" height="30"')}</a>`;
}

/* ---------- Global click handling for wishlist hearts ---------- */
document.addEventListener("click", e => {
  const w = e.target.closest(".wish[data-id]");
  if (w) { e.preventDefault(); toggleWish(w.dataset.id); }
});

renderHeader();
renderFooter();
saveWish();
