/* =========================================================
   PRODUCT PAGE  —  product.html?id=ivory-fit-flare-dress
   ========================================================= */
(function product() {
  const root = document.getElementById("pdpRoot");
  const id = new URLSearchParams(location.search).get("id");
  const p = byId(id);

  if (!p) {
    root.innerHTML = `<div class="notfound">${logoMark("lg")}<h1>This piece isn't available</h1>
      <p style="color:var(--muted);margin-bottom:24px">It may have sold out or the link is incorrect.</p>
      <a class="btn-dark" href="shop.html">Browse the collection</a></div>`;
    return;
  }

  document.title = `${p.name} | ${CONFIG.brand}`;
  const soon = p.status === "soon";
  const images = p.images.length ? p.images : [PLACEHOLDER];
  const catLabel = (CATEGORIES.find(c => c.id === p.cats.find(x => x !== "new")) || {}).label;
  const colorName = p.specs["Color"] || "";
  let cur = 0, size = "";

  root.innerHTML = `
  <nav class="crumbs" aria-label="Breadcrumb">
    <a href="index.html">Home</a> › ${catLabel ? `<a href="shop.html?cat=${p.cats.find(x => x !== "new")}">${catLabel}</a> › ` : ""}${esc(p.name)}
  </nav>

  <div class="pdp">
    <!-- Gallery -->
    <div>
      <div class="gallery-main" id="gMain">
        ${img(images[0], p.name, 'id="gImg"')}
        <button class="wish ${WISH.includes(p.id) ? "on" : ""}" data-id="${p.id}" aria-label="Add to wishlist" aria-pressed="${WISH.includes(p.id)}">${ICON.heart}</button>
        ${images.length > 1 ? `
          <button class="g-arrow prev" id="gPrev" aria-label="Previous image">${ICON.left}</button>
          <button class="g-arrow next" id="gNext" aria-label="Next image">${ICON.right}</button>
          <div class="g-dots" id="gDots">${images.map(() => "<span></span>").join("")}</div>` : ""}
      </div>
      <div class="thumbs" id="thumbs">
        ${images.map((src, i) => `<button data-i="${i}" aria-label="Image ${i + 1}">${img(src, "")}</button>`).join("")}
      </div>
      <div class="lookbook">
        <a href="${IG_URL}" target="_blank" rel="noopener">${logoMark("sm")}<span>SEE IT<br>STYLED</span></a>
      </div>
    </div>

    <!-- Info -->
    <div class="info">
      <div class="info-top">
        <h1>${esc(p.name)}</h1>
        <button id="shareBtn" aria-label="Share this product">${ICON.share}</button>
      </div>
      <div class="p-price">${fmt(p.price)}${p.price ? `<small class="ship-note"> + Shipping charges</small>` : ""}</div>
      <div class="meta-row"><span>${p.price ? "Inclusive of all taxes" : ""}</span><span>SKU: <b>${esc(p.sku)}</b></span></div>

      <div class="notice">${soon ? "Launching soon. Message us on WhatsApp or Instagram to be told first." : "Order on WhatsApp or Instagram. We'll confirm size, delivery and payment with you."}</div>

      ${p.sizes.length ? `
      <div class="opt-label"><span>Size</span><button id="sizeChartBtn">Size Chart</button></div>
      <div class="sizes" id="sizes" role="radiogroup" aria-label="Size">
        ${p.sizes.map(s => `<button role="radio" aria-checked="false" data-s="${s}">${s}</button>`).join("")}
      </div>
      <div class="size-err" id="sizeErr" aria-live="polite"></div>` : ""}

      ${p.colors.length ? `
      <div class="opt-label"><span>More colors</span></div>
      <div class="colors">
        <a class="on" href="product.html?id=${p.id}" aria-label="${esc(colorName)}">${img(images[0], "")}</a>
        ${p.colors.map(cid => { const c = byId(cid); return c ? `<a href="product.html?id=${c.id}" aria-label="${esc(c.specs["Color"] || c.name)}">${img(c.images[0], "")}</a>` : ""; }).join("")}
      </div>` : ""}

      <div class="perks">
        ${PERKS.map(k => `<div>${ICON[k.icon]}<b>${esc(k.title)}</b><span>${esc(k.sub)}</span></div>`).join("")}
      </div>

      <div class="cta-row">
        <div class="cta-pair">
          <button class="btn-wa" id="orderBtn">${ICON.wa} ${soon ? "Notify me on WhatsApp" : "Order on WhatsApp"}</button>
          <button class="btn-ig" id="igOrderBtn">${ICON.ig} ${soon ? "Notify me on Instagram" : "Order on Instagram"}</button>
        </div>
        <button class="btn-outline" id="wishBtn">${WISH.includes(p.id) ? "Saved to wishlist" : "Add to wishlist"}</button>
      </div>

      <div class="acc">
        <details open><summary>Description</summary><div class="acc-body">${esc(p.description)}</div></details>
        <details><summary>Specifications</summary><div class="acc-body">
          <table class="specs">${Object.entries(p.specs).map(([k, v]) => `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join("")}</table>
        </div></details>
        ${p.otherDetails ? `<details><summary>Other details</summary><div class="acc-body">${esc(p.otherDetails)}</div></details>` : ""}
      </div>
    </div>
  </div>

  <section class="section" id="moreSection">
    <h2 class="section-title">YOU MAY ALSO LIKE</h2>
    <div class="rail-wrap" id="moreWrap">
      <div class="rail" id="moreRail"></div>
      <button class="rail-btn prev" aria-label="Scroll left">${ICON.left}</button>
      <button class="rail-btn next" aria-label="Scroll right">${ICON.right}</button>
    </div>
  </section>`;

  /* ---------- Gallery ---------- */
  const gImg = document.getElementById("gImg");
  function show(i) {
    cur = (i + images.length) % images.length;
    gImg.src = images[cur];
    document.querySelectorAll("#thumbs button").forEach((b, k) => b.classList.toggle("on", k === cur));
    document.querySelectorAll("#gDots span").forEach((d, k) => d.classList.toggle("on", k === cur));
  }
  document.getElementById("thumbs").onclick = e => { const b = e.target.closest("button"); if (b) show(+b.dataset.i); };
  if (images.length > 1) {
    document.getElementById("gPrev").onclick = () => show(cur - 1);
    document.getElementById("gNext").onclick = () => show(cur + 1);
    let sx = 0; const main = document.getElementById("gMain");
    main.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
    main.addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1)); });
  }
  show(0);

  /* ---------- Size ---------- */
  const sizesEl = document.getElementById("sizes"), err = document.getElementById("sizeErr");
  if (sizesEl) sizesEl.onclick = e => {
    const b = e.target.closest("button"); if (!b) return;
    size = b.dataset.s; err.textContent = "";
    [...sizesEl.children].forEach(x => { const on = x === b; x.classList.toggle("on", on); x.setAttribute("aria-checked", on); });
  };

  /* ---------- Size chart modal ---------- */
  const modal = document.getElementById("sizeModal");
  document.getElementById("sizeTable").innerHTML =
    `<tr><th>Size</th><th>Bust</th><th>Waist</th><th>Hip</th></tr>` +
    SIZE_CHART.map(r => `<tr><td>${r.size}</td><td>${r.bust}</td><td>${r.waist}</td><td>${r.hip}</td></tr>`).join("");
  const scb = document.getElementById("sizeChartBtn");
  if (scb) scb.onclick = () => { modal.classList.add("open"); document.getElementById("sizeClose").focus(); };
  const closeModal = () => { modal.classList.remove("open"); scb && scb.focus(); };
  document.getElementById("sizeClose").onclick = closeModal;
  modal.onclick = e => { if (e.target === modal) closeModal(); };
  document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

  /* ---------- Order / wishlist / share ---------- */
  document.getElementById("orderBtn").onclick = () => {
    if (soon) {
      window.open(waUrl(`Hi ${CONFIG.brand}! Please let me know when the ${p.name} launches.`), "_blank");
      return;
    }
    if (p.sizes.length && !size) { err.textContent = "Select a size to order."; sizesEl.querySelector("button").focus(); return; }
    window.open(waUrl(orderMessage(p, size, colorName)), "_blank");
  };
  document.getElementById("igOrderBtn").onclick = () => {
    if (soon) { orderOnInstagram(`Hi ${CONFIG.brand}! Please let me know when the ${p.name} launches.\n${location.href}`); return; }
    if (p.sizes.length && !size) { err.textContent = "Select a size to order."; sizesEl.querySelector("button").focus(); return; }
    orderOnInstagram(orderMessage(p, size, colorName));
  };
  const wishBtn = document.getElementById("wishBtn");
  wishBtn.onclick = () => {
    toggleWish(p.id);
    wishBtn.textContent = WISH.includes(p.id) ? "Saved to wishlist" : "Add to wishlist";
  };
  document.addEventListener("click", e => {
    if (e.target.closest(".gallery-main .wish")) setTimeout(() => wishBtn.textContent = WISH.includes(p.id) ? "Saved to wishlist" : "Add to wishlist", 0);
  });
  document.getElementById("shareBtn").onclick = async () => {
    const data = { title: p.name, text: `${p.name} — ${CONFIG.brand}`, url: location.href };
    try {
      if (navigator.share) await navigator.share(data);
      else { await navigator.clipboard.writeText(location.href); toast("Link copied"); }
    } catch (e) { /* user cancelled */ }
  };

  /* ---------- You may also like ---------- */
  const others = PRODUCTS.filter(x => x.id !== p.id)
    .sort((a, b) => b.cats.filter(c => p.cats.includes(c)).length - a.cats.filter(c => p.cats.includes(c)).length);
  if (!others.length) document.getElementById("moreSection").remove();
  else {
    document.getElementById("moreRail").innerHTML = others.map(productCard).join("");
    setupRail(document.getElementById("moreWrap"));
  }
})();
