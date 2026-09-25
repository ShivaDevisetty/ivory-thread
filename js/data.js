/* =========================================================
   LABEL ISHAANI — ALL YOUR CONTENT LIVES HERE
   Edit this file to add products, collections and reviews.
   ========================================================= */

const CONFIG = {
  brand: "Label Ishaani",
  whatsapp: "917989313132",           // country code + number, no "+" or spaces
  instagram: "labelishaani",
  email: "",                          // optional, e.g. "hello@labelishaani.com"
  about: "Handcrafted Indian wear, made in small batches. Every order is placed and confirmed personally on WhatsApp."
};

/* Categories used by the pills, nav and shop page filter */
const CATEGORIES = [
  { id: "all",      label: "All" },
  { id: "new",      label: "New In" },
  { id: "sets",     label: "Co-ord Sets" },
  { id: "dresses",  label: "Dresses" },
  { id: "lehengas", label: "Lehengas" },
  { id: "festive",  label: "Festive" }
];

/* ---------------------------------------------------------
   PRODUCTS
   id      : unique, used in the link  product.html?id=...
   images  : first image is the main one. Put files in /images/products/
   status  : "available" or "soon"
   colors  : other colour versions — link to another product id
   --------------------------------------------------------- */
const PRODUCTS = [
  {
    id: "ivory-peplum-palazzo-set",
    name: "Ivory Embroidered Peplum & Palazzo Set",
    price: 2100,
    sku: "LI-001",
    status: "available",
    bestseller: true,
    cats: ["new", "sets", "festive"],
    images: [
      "images/products/ivory-peplum-1.jpg",
      "images/products/ivory-peplum-2.jpg",
      "images/products/ivory-peplum-3.jpg"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [],
    description: "An ivory peplum top with delicate embroidery, paired with flowing palazzos. Easy to wear for festive days, pujas and family functions.",
    specs: {
      "Color": "Ivory",
      "Work": "Embroidered",
      "Includes": "Peplum top + palazzo",
      "Stitch": "Ready to wear",
      "Fabric": "Add fabric",
      "Occasion": "Festive, Puja, Day function",
      "Care Instructions": "Dry clean recommended"
    },
    otherDetails: "Colours may vary slightly due to lighting and screen settings."
  },
  {
    id: "ivory-fit-flare-dress",
    name: "Ivory Embroidered Fit & Flare Mini Dress",
    price: 2100,
    sku: "LI-002",
    status: "available",
    bestseller: false,
    cats: ["new", "dresses"],
    images: [
      "images/products/ivory-dress-1.jpg",
      "images/products/ivory-dress-2.jpg",
      "images/products/ivory-dress-3.jpg"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [],
    description: "A fitted bodice with an embroidered flare skirt in soft ivory. Pairs well with juttis for a mehendi or with heels for a dinner out.",
    specs: {
      "Color": "Ivory",
      "Work": "Embroidered",
      "Length": "Mini",
      "Fit Type": "Fit and Flare",
      "Stitch": "Ready to wear",
      "Fabric": "Add fabric",
      "Care Instructions": "Dry clean recommended"
    },
    otherDetails: "Colours may vary slightly due to lighting and screen settings."
  },
  {
    id: "plum-emerald-lehenga",
    name: "Plum & Emerald Pleated Lehenga Set",
    price: null,                         // set a price when it launches
    sku: "LI-003",
    status: "soon",
    bestseller: false,
    cats: ["lehengas", "festive"],
    images: [
      "images/products/plum-lehenga-1.jpg",
      "images/products/plum-lehenga-2.jpg"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [],
    description: "A pleated lehenga set in rich plum and emerald. Launching soon — message us on WhatsApp to be told first.",
    specs: {
      "Color": "Plum & Emerald",
      "Style": "Pleated lehenga set",
      "Stitch": "Ready to wear",
      "Fabric": "Add fabric"
    },
    otherDetails: ""
  }
];

/* ---------------------------------------------------------
   SHOP BY COLLECTION tiles (home page)
   cat : which category the tile opens on shop.html
   --------------------------------------------------------- */
const COLLECTIONS = [
  { small: "Best",    big: "Sellers",  cat: "all",      image: "images/collections/best-sellers.jpg" },
  { small: "New",     big: "Arrivals", cat: "new",      image: "images/collections/new-arrivals.jpg" },
  { small: "Festive", big: "Edit",     cat: "festive",  image: "images/collections/festive.jpg" },
  { small: "Co-ord",  big: "Sets",     cat: "sets",     image: "images/collections/coord-sets.jpg" }
];

/* ---------------------------------------------------------
   CUSTOMER REVIEWS (home page)
   IMPORTANT: replace these samples with REAL reviews from
   your customers (with their permission) before going live.
   Leave the array empty [] to hide the section.
   --------------------------------------------------------- */
const REVIEWS = [
  { name: "Customer name", rating: 5, image: "images/reviews/review-1.jpg",
    text: "Sample review — replace with a real message from a customer.",
    productId: "ivory-peplum-palazzo-set" },
  { name: "Customer name", rating: 5, image: "images/reviews/review-2.jpg",
    text: "Sample review — replace with a real message from a customer.",
    productId: "ivory-fit-flare-dress" },
  { name: "Customer name", rating: 5, image: "images/reviews/review-3.jpg",
    text: "Sample review — replace with a real message from a customer.",
    productId: "ivory-peplum-palazzo-set" }
];

/* ---------------------------------------------------------
   SIZE CHART (inches) — edit to your own measurements
   --------------------------------------------------------- */
const SIZE_CHART = [
  { size: "XS", bust: 32, waist: 26, hip: 35 },
  { size: "S",  bust: 34, waist: 28, hip: 37 },
  { size: "M",  bust: 36, waist: 30, hip: 39 },
  { size: "L",  bust: 38, waist: 32, hip: 41 },
  { size: "XL", bust: 40, waist: 34, hip: 43 }
];

/* Perks shown on the product page and footer — edit freely */
const PERKS = [
  { icon: "chat",  title: "Order on WhatsApp", sub: "Confirmed personally" },
  { icon: "hand",  title: "Handcrafted",       sub: "Small-batch pieces" },
  { icon: "india", title: "Made in India",     sub: "Designed with love" }
];
