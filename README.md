# Label Ishaani — website

A free static shop site for **Label Ishaani** (Instagram: @labelishaani).
No backend and no payment gateway: every order goes to WhatsApp.

## Pages
| File | What it is |
|------|------------|
| `index.html` | Home: hero slider, shop by category, shop by collection, customer reviews |
| `shop.html` | All products with category filter + sort. `shop.html?cat=dresses`, `shop.html?cat=wishlist` |
| `product.html` | Product page. `product.html?id=ivory-fit-flare-dress` |
| `404.html` | Redirects broken links to home |

## Editing — you mostly only touch `js/data.js`
- **WhatsApp number**: `CONFIG.whatsapp` (e.g. `919876543210`)
- **Products**: add/edit in `PRODUCTS`. Product pages are generated automatically.
- **Collections tiles**, **customer reviews**, **size chart**, **perks**: same file.
- **Colours / fonts**: top of `css/style.css` (`:root`).
- **Hero slider text**: in `index.html`.

⚠️ The reviews in `data.js` are samples. Replace them with real customer reviews (with permission), or set `REVIEWS = []` to hide the section.

## Images (put these in the folders)
```
images/hero/hero-1.png, hero-2.png, hero-3.png     cut-out model photos (transparent PNG looks best)
images/products/ivory-peplum-1.jpg ...               names must match data.js
images/collections/best-sellers.jpg ...              portrait (5:7) photos
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
5. After deployment finishes, open `https://<your-username>.github.io/labelishaani/`.

Before publishing, replace the WhatsApp placeholder, sample reviews, product specifications, and image files in `js/data.js` and `images/`.

### Test desktop and mobile locally

From this folder, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` and check the site at a laptop width and a phone width. The layout switches to a single-column product page, horizontally scrollable category navigation, and mobile-friendly product rails below 900px.

## Test locally
Just open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000
