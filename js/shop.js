/* =========================================================
   SHOP PAGE  —  shop.html?cat=dresses  /  shop.html?cat=wishlist
   ========================================================= */
(function shop() {
  const params = new URLSearchParams(location.search);
  let cat = params.get("cat") || "all";
  const pills = document.getElementById("shopCats"), grid = document.getElementById("shopGrid"),
        sort = document.getElementById("sort");

  const tabs = [...CATEGORIES, { id: "wishlist", label: "Wishlist" }];
  if (!tabs.some(t => t.id === cat)) cat = "all";
  pills.innerHTML = tabs.map(c => `<button data-cat="${c.id}">${c.label}</button>`).join("");

  function render() {
    let list = cat === "wishlist" ? WISH.map(byId).filter(Boolean)
      : PRODUCTS.filter(p => cat === "all" || p.cats.includes(cat));
    const priced = p => p.price ?? Infinity;
    if (sort.value === "low") list = [...list].sort((a, b) => priced(a) - priced(b));
    if (sort.value === "high") list = [...list].sort((a, b) => (b.price ?? -1) - (a.price ?? -1));

    const label = tabs.find(t => t.id === cat).label;
    document.getElementById("shopTitle").textContent = cat === "all" ? "Shop All" : label;
    document.title = `${cat === "all" ? "Shop" : label} | ${CONFIG.brand}`;
    document.getElementById("shopInfo").textContent = `${list.length} ${list.length === 1 ? "piece" : "pieces"}`;
    [...pills.children].forEach(b => b.classList.toggle("active", b.dataset.cat === cat));

    grid.innerHTML = list.length ? list.map(productCard).join("")
      : cat === "wishlist"
        ? `<p class="empty">Your wishlist is empty. Tap the heart on any piece to save it here.</p>`
        : `<p class="empty">New pieces for this category are on the way. Follow @${CONFIG.instagram} for the drop.</p>`;
  }

  pills.onclick = e => {
    const b = e.target.closest("button"); if (!b) return;
    cat = b.dataset.cat;
    history.replaceState(null, "", cat === "all" ? "shop.html" : `shop.html?cat=${cat}`);
    render();
  };
  sort.onchange = render;
  // re-render wishlist view when a heart is un-ticked there
  document.addEventListener("click", e => { if (cat === "wishlist" && e.target.closest(".wish")) setTimeout(render, 0); });
  render();
})();
