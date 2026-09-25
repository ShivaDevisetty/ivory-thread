# Label Ishaani — website

A free static shop site for **Label Ishaani** (Instagram: @labelishaani).
Live at **https://labelishaani.dpdns.org**
No backend and no payment gateway: every order goes to WhatsApp or an Instagram DM.

## Pages
| File | What it is |
|------|------------|
| `index.html` | Home: announcement ticker, hero slider, shop by category, shop by collection, brand story, customer reviews |
| `shop.html` | All products with category filter + sort. `shop.html?cat=dresses`, `shop.html?cat=wishlist` |
| `product.html` | Product page. `product.html?id=ivory-fit-flare-dress` |
| `404.html` | Redirects broken links to home |

## Editing — you mostly only touch `js/data.js`
- **WhatsApp number**: `CONFIG.whatsapp` (e.g. `919876543210`)
- **Instagram**: `CONFIG.instagramUrl` (profile) and `CONFIG.instagramDM` (`https://ig.me/m/labelishaani`, opens a DM). Instagram can't pre-fill a DM, so "Order on Instagram" copies the order details and the customer pastes them.
- **Logo**: `images/logo-circle.png` (header, footer, hero, empty pages), `images/favicon.png`, `images/apple-touch-icon.png`
- **Available vs coming soon**: set `status` to `"available"` or `"soon"`. Coming-soon pieces also carry the `"soon"` category so they show under Coming Soon.
- **Products**: add/edit in `PRODUCTS`. Product pages are generated automatically.
- **Announcement ticker**: `CONFIG.announcements` (list of messages that scroll across the top bar on every page; tapping it opens the Instagram DM). Set it to `[]` to hide the bar.
- **Brand story** (home page card): `BRAND_STORY` in `js/data.js`. Delete the constant to hide the section. The footer blurb reuses its second lead line.
- **Prices**: `price` in each product (in ₹); use `null` for coming-soon pieces.
- **Collections tiles**, **customer reviews**, **size chart**, **perks**: same file.
- **Colours / fonts**: top of `css/style.css` (`:root`).
- **Hero slider text**: in `index.html`.

⚠️ The reviews in `data.js` are samples. Replace them with real customer reviews (with permission), or set `REVIEWS = []` to hide the section.

## Images (put these in the folders)
```
images/hero/<name>-full.jpg                          full-length photos used in the hero slider
images/products/<name>-1.jpg, -2.jpg                 3:4 product photo + close-up detail, names must match data.js
images/reviews/review-1.jpg ...                      customer photos
```
Any missing image shows a neutral placeholder, so the site never looks broken.
Tip: portrait 3:4 product photos, compressed under ~300 KB each (squoosh.app).

## Publish on GitHub Pages (free)

This is a plain static site, so it works directly from GitHub Pages. The included `.nojekyll` file prevents GitHub Pages from applying Jekyll processing to the site.

1. Create a new GitHub repository, for example `labelishaani`.
2. Upload the contents of this folder to the repository root. Keep `index.html`, `404.html`, `css/`, `js/`, and `images/` at the top level.
3. In the repository, open **Settings → Pages**.
4. Set **Source** to **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
5. After deployment finishes, the site is available at the GitHub Pages address, or at the custom domain below.

### Custom domain
The site uses `labelishaani.dpdns.org` (a free DigitalPlat domain). The `CNAME` file in the repo root holds the domain, so keep it. DNS points the domain at GitHub Pages, and the domain is also set under **Settings → Pages → Custom domain**.

Before publishing, replace the WhatsApp placeholder, sample reviews, product specifications, and image files in `js/data.js` and `images/`.

### Test desktop and mobile locally

From this folder, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` and check the site at a laptop width and a phone width. The layout switches to a single-column product page, horizontally scrollable category navigation, and mobile-friendly product rails below 900px.

## Test locally
Just open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000
