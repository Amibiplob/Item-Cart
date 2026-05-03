# 🛒 Item Cart

A clean, responsive e-commerce storefront built with vanilla JavaScript, Tailwind CSS v4, and DaisyUI v5 — no build step, no frameworks, just pure frontend.

**Live Demo →** [item-cart-two.vercel.app](https://item-cart-two.vercel.app)

---

## ✨ Features

- **Home Page** — Hero banner with call-to-action, "Why Choose Us" section, and a dynamic Trending Products grid
- **Products Page** — Full product listing with category badges, ratings, and add-to-cart buttons
- **Shopping Cart** — Animated cart icon with live item count badge, modal-based cart view
- **Product Details Modal** — Click any product to view details in an overlay dialog
- **Responsive Navigation** — Desktop menu + mobile hamburger dropdown
- **Newsletter Footer** — Email subscription input with social links

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure & semantics |
| [Tailwind CSS v4](https://tailwindcss.com/) (CDN) | Utility-first styling |
| [DaisyUI v5](https://daisyui.com/) (CDN) | Component library (cards, navbar, modal, badge) |
| [Font Awesome 7](https://fontawesome.com/) | Icons |
| Vanilla JavaScript | Cart logic, API fetching, DOM manipulation |

No Node.js, no bundler, no dependencies to install.

---

## 📁 Project Structure

```
Item-Cart/
├── index.html        # Home page (banner, features, trending products)
├── products.html     # Full products listing page
├── app.js            # All JavaScript logic (cart, API calls, modal)
├── Assets/           # Images, SVG favicon, banner image
└── README.md
```

---

## 🚀 Getting Started

Since this is a zero-dependency project, you can run it in two ways:

**Option 1 — Open directly in browser**

```bash
git clone https://github.com/Amibiplob/Item-Cart.git
cd Item-Cart
# Open index.html in your browser
```

**Option 2 — Use a local dev server (recommended to avoid CORS on assets)**

```bash
# With VS Code Live Server extension — right-click index.html → Open with Live Server

# Or with npx
npx serve .
```

Then visit `http://localhost:3000` (or whichever port is shown).

---

## 📸 Pages Overview

### Home (`/`)
- Full-width hero banner with a "Shop Now" CTA
- 4-column feature cards: Fast Delivery, 24/7 Support, Secure Payment, Easy Returns
- Dynamically loaded "Trending Now" product grid

### Products (`/products.html`)
- Grid layout of all products fetched from the [FakeStore API](https://fakestoreapi.com/)
- Each card shows category badge, star rating, price, and an "Add to Cart" button

---

## 🔌 API

Products are fetched from the public **[FakeStore API](https://fakestoreapi.com/)**:

```
GET https://fakestoreapi.com/products
GET https://fakestoreapi.com/products/{id}
```

No API key needed.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 👤 Author

**Md Biplob Hosain**
- GitHub: [@AmiBiplob](https://github.com/Amibiplob)
- LinkedIn: [linkedin.com/in/amibiplob](https://linkedin.com/in/amibiplob/)
- Email: biplobwebdesigner@gmail.com

---
