/* =========================================================
   LABEL ISHAANI — ALL YOUR CONTENT LIVES HERE
   Edit this file to add products, collections and reviews.
   ========================================================= */

const CONFIG = {
  brand: "Label Ishaani",
  whatsapp: "917989313132",           // country code + number, no "+" or spaces
  instagram: "labelishaani",
  instagramUrl: "https://www.instagram.com/labelishaani/",   // profile link
  instagramDM: "https://ig.me/m/labelishaani",              // opens a DM to order
  logo: "images/logo-circle.png",
  email: "",                          // optional, e.g. "hello@labelishaani.com"
  announcements: ["Customization available!"],
  about: "Handcrafted Indian wear, made in small batches. Order on WhatsApp or Instagram and we confirm every piece with you personally."
};

/* Categories used by the pills, nav and shop page filter */
const CATEGORIES = [
  { id: "all",      label: "All" },
  { id: "new",      label: "New In" },
  { id: "sets",     label: "Co-ord Sets" },
  { id: "dresses",  label: "Dresses" },
  { id: "lehengas", label: "Lehengas" },
  { id: "festive",  label: "Festive" },
  { id: "soon",     label: "Coming Soon" }
];

/* ---------------------------------------------------------
   PRODUCTS
   id      : unique, used in the link  product.html?id=...
   images  : first image is the main one. Put files in /images/products/
   status  : "available" or "soon"
   colors  : other colour versions — link to another product id
   --------------------------------------------------------- */
const PRODUCTS = [
  /* ---------------- AVAILABLE NOW ---------------- */
  {
    id: "ivory-peplum-palazzo-set",
    name: "Ivory Embroidered Peplum & Palazzo Set",
    price: 2900,
    sku: "LI-001",
    status: "available",
    bestseller: true,
    cats: ["new", "sets", "festive"],
    images: [
      "images/products/ivory-peplum-1.jpg",
      "images/products/ivory-peplum-2.jpg"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [],
    description: "A sleeveless ivory peplum top with indigo floral embroidery around the neckline and down a front slit panel, finished with a tie cord and tassel. Paired with flowing navy wide-leg palazzos. Easy to wear for festive days, pujas and family functions.",
    specs: {
      "Color": "Ivory & Navy",
      "Work": "Floral embroidery",
      "Includes": "Peplum top + palazzo",
      "Neckline": "Round",
      "Sleeves": "Sleeveless",
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
    price: 2900,
    sku: "LI-002",
    status: "available",
    bestseller: false,
    cats: ["new", "dresses"],
    images: [
      "images/products/ivory-dress-1.jpg",
      "images/products/ivory-dress-2.jpg"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [],
    description: "A fitted ivory bodice with a trail of blue leaf embroidery at the neckline and along an open front panel, revealing a pleated blue skirt underneath. Tie cord with tassel at the waist. Pairs well with juttis for a mehendi or with heels for a dinner out.",
    specs: {
      "Color": "Ivory & Blue",
      "Work": "Leaf vine embroidery",
      "Length": "Mini",
      "Fit Type": "Fit and Flare",
      "Sleeves": "Sleeveless",
      "Stitch": "Ready to wear",
      "Fabric": "Add fabric",
      "Care Instructions": "Dry clean recommended"
    },
    otherDetails: "Colours may vary slightly due to lighting and screen settings."
  },

  /* ---------------- COMING SOON ---------------- */
  {
    id: "plum-emerald-lehenga",
    name: "Plum & Emerald Pleated Lehenga Set",
    price: null,                         // set a price when it launches
    sku: "LI-003",
    status: "soon",
    bestseller: false,
    cats: ["lehengas", "festive", "soon"],
    images: [
      "images/products/plum-lehenga-1.jpg",
      "images/products/plum-lehenga-2.jpg"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [],
    description: "A draped plum crop blouse with a mandarin collar and keyhole neck, over a fully pleated emerald lehenga with a plum border of gold motifs and beaded latkans. Launching soon. Message us to be told first.",
    specs: {
      "Color": "Plum & Emerald",
      "Style": "Pleated lehenga set",
      "Includes": "Blouse + lehenga",
      "Details": "Beaded latkans, motif border",
      "Stitch": "Ready to wear",
      "Fabric": "Add fabric"
    },
    otherDetails: ""
  },
  {
    id: "black-betta-maxi-dress",
    name: "Black Crimson Betta Mock-Neck Maxi Dress",
    price: null,                         // set a price when it launches
    sku: "LI-004",
    status: "soon",
    bestseller: false,
    cats: ["dresses", "soon"],
    images: [
      "images/products/black-betta-1.jpg",
      "images/products/black-betta-2.jpg"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [],
    description: "A black mock-neck bodice with short sleeves and a striking crimson betta fish across the front, falling into a gathered, textured black maxi skirt. Launching soon. Message us to be told first.",
    specs: {
      "Color": "Black & Crimson",
      "Work": "Betta fish motif",
      "Length": "Maxi",
      "Neckline": "Mock neck",
      "Sleeves": "Short",
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
  { small: "Best",    big: "Sellers",  cat: "all",      image: "images/products/ivory-peplum-1.jpg" },
  { small: "New",     big: "Arrivals", cat: "new",      image: "images/products/ivory-dress-1.jpg" },
  { small: "Festive", big: "Edit",     cat: "festive",  image: "images/products/plum-lehenga-1.jpg" },
  { small: "Coming",  big: "Soon",     cat: "soon",     image: "images/products/black-betta-1.jpg" }
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
  { icon: "chat",  title: "WhatsApp or Instagram", sub: "Confirmed personally" },
  { icon: "hand",  title: "Handcrafted",       sub: "Small-batch pieces" },
  { icon: "india", title: "Made in India",     sub: "Designed with love" }
];

/* Brand story shown on the home page */
const BRAND_STORY = {
  lead: ["We didn't just want to create clothes.", "We wanted to create something that feels like home."],
  lines: [
    "for the days you want to try something new,",
    "for the moments you rediscover your confidence,",
    "for stepping into a version of yourself you've always imagined,",
    "for dressing the way you truly feel,",
    "for choosing yourself — effortlessly, unapologetically."
  ],
  sign: "this is where label ishaani begins. ✨"
};
