/* =========================================================
   ASPIRE — Product data
   This is the single source of truth for every product shown
   on the home, catalog, and product pages.

   To add a product: copy a block below and edit the values.
   To change an image: paste a new image URL into "images".
   ========================================================= */

const PRODUCTS = [
  {
    slug: "painter-shirts",
    name: "Painter Shirts",
    category: "Shirts",
    price: 950,
    compareAt: null,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://aspireg.store/cdn/shop/files/IMG_2619.png?v=1778857233&width=900",
      "https://aspireg.store/cdn/shop/files/DSCF7740.jpg?v=1778857282&width=900"
    ],
    description: "A heavyweight cotton workshirt built like the original painter's jacket — boxy fit, dropped shoulder, double chest pockets. Made to be worn open over a tee or buttoned to the collar."
  },
  {
    slug: "chino-pants",
    name: "Chino Pants",
    category: "Pants",
    price: 1199,
    compareAt: null,
    inStock: true,
    sizes: ["30", "32", "34", "36"],
    images: [
      "https://aspireg.store/cdn/shop/files/IMG_0155.jpg?v=1778857638&width=900",
      "https://aspireg.store/cdn/shop/files/DSCF7829.jpg?v=1778857468&width=900"
    ],
    description: "A tapered chino in mid-weight twill with a clean, no-fuss break. Built for the days between dressed-up and dressed-down."
  },
  {
    slug: "timeless-t-shirt",
    name: "Timeless T-Shirt",
    category: "T-Shirts",
    price: 599,
    compareAt: null,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://aspireg.store/cdn/shop/files/IMG_0181.png?v=1779384924&width=900",
      "https://aspireg.store/cdn/shop/files/DSCF7760.jpg?v=1778870940&width=900"
    ],
    description: "The everyday tee, done properly. Heavyweight cotton jersey, reinforced collar, a fit that holds its shape wash after wash."
  },
  {
    slug: "ringer-t-shirts",
    name: "Ringer T-Shirts",
    category: "T-Shirts",
    price: 699,
    compareAt: null,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://aspireg.store/cdn/shop/files/IMG_1671.png?v=1778857871&width=900",
      "https://aspireg.store/cdn/shop/files/Gemini_Generated_Image_iomyh4iomyh4iomy.png?v=1778871031&width=900"
    ],
    description: "A contrast-trim ringer tee with a soft, lived-in hand feel. A small nod to varsity sportswear, kept minimal everywhere else."
  },
  {
    slug: "henley-shirt-1",
    name: "Short Sleeve Henley Shirt",
    category: "Shirts",
    price: 699,
    compareAt: null,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://aspireg.store/cdn/shop/files/IMG_0178.png?v=1779385126&width=900",
      "https://aspireg.store/cdn/shop/files/Gemini_Generated_Image_9ja2me9ja2me9ja2.png?v=1778871009&width=900"
    ],
    description: "A short-sleeve henley in brushed cotton with a three-button placket. Easy to dress up, easier to wear every day."
  },
  {
    slug: "v-neck-ringer-tee",
    name: "V Neck Ringer Tee",
    category: "T-Shirts",
    price: 699,
    compareAt: null,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://aspireg.store/cdn/shop/files/IMG_2621.png?v=1778857572&width=900",
      "https://aspireg.store/cdn/shop/files/Gemini_Generated_Image_vy40zgvy40zgvy40.png?v=1778871020&width=900"
    ],
    description: "Our ringer tee, cut with a v-neck for a slightly dressier line. Same heavyweight jersey, same contrast trim."
  },
  {
    slug: "light-blue-jeans",
    name: "Light Blue Jeans",
    category: "Pants",
    price: 1099,
    compareAt: null,
    inStock: true,
    sizes: ["30", "32", "34", "36"],
    images: [
      "https://aspireg.store/cdn/shop/files/IMG_2614.png?v=1779385314&width=900",
      "https://aspireg.store/cdn/shop/files/21_Small_e8969b9d-6c0c-4446-9ea8-9ee8eaef1cca.png?v=1778858417&width=900"
    ],
    description: "A washed light-blue denim with a straight leg and a broken-in feel from day one."
  },
  {
    slug: "baby-blue-shirt",
    name: "Baby Blue Shirt",
    category: "Shirts",
    price: 950,
    compareAt: null,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://aspireg.store/cdn/shop/files/IMG_0191.png?v=1779385212&width=900",
      "https://aspireg.store/cdn/shop/files/WEBSITE_IMAGE.jpg?v=1778851088&width=900"
    ],
    description: "A soft baby-blue shirt in lightweight cotton poplin — breathable, easy-care, built for warm days."
  },
  {
    slug: "full-black-pants",
    name: "Full Black Pants",
    category: "Pants",
    price: 1099,
    compareAt: null,
    inStock: true,
    sizes: ["30", "32", "34", "36"],
    images: [
      "https://aspireg.store/cdn/shop/files/IMG_0202.png?v=1774467559&width=900",
      "https://aspireg.store/cdn/shop/files/22.png?v=1774467559&width=900"
    ],
    description: "An all-black straight-leg pant in heavyweight twill. The one pair that goes with everything in your closet."
  },
  {
    slug: "raw-denim-jeans",
    name: "Raw Denim Jeans",
    category: "Pants",
    price: 1099,
    compareAt: null,
    inStock: true,
    sizes: ["30", "32", "34", "36"],
    images: [
      "https://aspireg.store/cdn/shop/files/IMG_0204.png?v=1774467214&width=900",
      "https://aspireg.store/cdn/shop/files/21_Small_acb23d1c-21f9-41d9-9ed8-9851efef34bf.png?v=1774467346&width=900"
    ],
    description: "Unwashed raw denim that breaks in to your shape over time. Stiff out of the bag, yours after a month."
  },
  {
    slug: "timeless-polo",
    name: "Timeless Polo",
    category: "Shirts",
    price: 799,
    compareAt: null,
    inStock: false,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://aspireg.store/cdn/shop/files/IMG_0186.png?v=1779385683&width=900",
      "https://aspireg.store/cdn/shop/files/IMG_0187.png?v=1774469029&width=900"
    ],
    description: "A heavyweight pique polo with a clean ribbed collar. Currently sold out — restocking soon."
  }
];

/* Example customer reviews shown on the homepage.
   Replace these with your real reviews any time. */
const REVIEWS = [
  { name: "Ahmed Hamed", rating: 5, product: "Short Sleeve Henley Shirt", text: "Great fabric and the fit is perfect, exactly as pictured." },
  { name: "Yassin Ahmed", rating: 5, product: "Aspire", text: "Fast shipping and the quality is way better than I expected." },
  { name: "Yousef Hatem", rating: 5, product: "Short Sleeve Henley Shirt", text: "Excellent material and fit, will definitely be ordering again." },
  { name: "Mohamed Mansour", rating: 5, product: "Raw Denim Jeans", text: "Exactly what I was looking for, very happy with the purchase." },
  { name: "Ziad Gouhar", rating: 5, product: "Short Sleeve Henley Shirt", text: "Solid piece, true to size, fabric feels premium." },
  { name: "Youssef Mohamed", rating: 5, product: "Ringer T-Shirts", text: "Didn't expect it to be this good honestly — soft fabric, great fit, very comfortable." }
];
