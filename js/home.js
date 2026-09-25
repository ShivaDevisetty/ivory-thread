/* =========================================================
   HOME PAGE
   ========================================================= */

/* ---------- Hero carousel ---------- */
(function hero() {
  const slides = document.getElementById("slides"), n = slides.children.length,
        dots = document.getElementById("heroDots");
  document.getElementById("heroPrev").innerHTML = ICON.left;
  document.getElementById("heroNext").innerHTML = ICON.right;
  let cur = 0, timer;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  for (let i = 0; i < n; i++) {
    const d = document.createElement("button");
    d.setAttribute("aria-label", `Slide ${i + 1}`);
    d.onclick = () => go(i);
    dots.appendChild(d);
  }
  function go(i) {
    cur = (i + n) % n;
    slides.style.transform = `translateX(-${cur * 100}%)`;
    [...dots.children].forEach((d, k) => d.classList.toggle("active", k === cur));
    clearInterval(timer);
    if (!reduce) timer = setInterval(() => go(cur + 1), 5000);
  }
  document.getElementById("heroPrev").onclick = () => go(cur - 1);
  document.getElementById("heroNext").onclick = () => go(cur + 1);
  let sx = 0;
  slides.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
  slides.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1));
  });
  go(0);
})();

/* ---------- Shop by category (pills + product rail) ---------- */
(function categories() {
  const pills = document.getElementById("homeCats"), rail = document.getElementById("catRail"),
        viewAll = document.getElementById("viewAll"), wrap = document.getElementById("catRailWrap");
  wrap.querySelector(".prev").innerHTML = ICON.left;
  wrap.querySelector(".next").innerHTML = ICON.right;
  pills.innerHTML = CATEGORIES.map((c, i) =>
    `<button data-cat="${c.id}" class="${i === 0 ? "active" : ""}">${c.label}</button>`).join("");
  const updateArrows = setupRail(wrap);

  function show(cat) {
    const list = PRODUCTS.filter(p => cat === "all" || p.cats.includes(cat));
    rail.innerHTML = list.length ? list.map(productCard).join("")
      : `<div class="empty">${logoMark("lg")}<p>New pieces for this category are on the way. Follow <a href="${IG_URL}" target="_blank" rel="noopener">@${CONFIG.instagram}</a> for the drop.</p></div>`;
    rail.scrollLeft = 0;
    const label = CATEGORIES.find(c => c.id === cat).label;
    viewAll.href = cat === "all" ? "shop.html" : `shop.html?cat=${cat}`;
    viewAll.innerHTML = `VIEW ALL ${cat === "all" ? "" : label.toUpperCase()} ${ICON.arrowUp}`;
    [...pills.children].forEach(b => b.classList.toggle("active", b.dataset.cat === cat));
    updateArrows();
  }
  pills.onclick = e => { const b = e.target.closest("button"); if (b) show(b.dataset.cat); };
  show("all");
})();

/* ---------- Shop by collection ---------- */
document.getElementById("collections").innerHTML = COLLECTIONS.map(c => `
  <a class="coll" href="shop.html${c.cat === "all" ? "" : "?cat=" + c.cat}">
    <img src="${esc(c.image)}" alt="" loading="lazy" onerror="this.remove()">
    <span class="coll-title"><small>${esc(c.small)}</small><b>${esc(c.big)}</b></span>
  </a>`).join("");

/* ---------- Reviews ---------- */
(function reviews() {
  const section = document.getElementById("reviewsSection");
  if (!REVIEWS.length) { section.remove(); return; }
  const wrap = document.getElementById("reviewRailWrap");
  wrap.querySelector(".prev").innerHTML = ICON.left;
  wrap.querySelector(".next").innerHTML = ICON.right;
  document.getElementById("reviewRail").innerHTML = REVIEWS.map(r => {
    const p = byId(r.productId);
    return `
    <article class="review">
      <div class="review-img">${img(r.image, "Photo shared by " + r.name)}
        <a class="review-ig" href="${IG_URL}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.ig}</a></div>
      <div class="review-body">
        <div class="review-head"><strong>${esc(r.name)}</strong>
          <span class="stars" aria-label="${r.rating} out of 5">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span></div>
        <p class="review-text">${esc(r.text)}</p>
        ${p ? `<a class="review-prod" href="product.html?id=${p.id}">${img(p.images[0], "")}
          <div><span>${esc(p.name)}</span><b>${fmt(p.price)}</b></div><span class="go">${ICON.go}</span></a>` : ""}
      </div>
    </article>`;
  }).join("");
  setupRail(wrap);
})();
