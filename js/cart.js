/* =========================================================
   ASPIRE — Cart
   A simple cart stored in the browser (localStorage), shared
   across every page. Swap this out for a real checkout/API
   call whenever you connect a payment provider.
   ========================================================= */

const Cart = {
  KEY: "aspire_cart",

  get(){
    try{
      const raw = localStorage.getItem(this.KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){
      return [];
    }
  },

  save(items){
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateCount();
  },

  add(slug, size, qty = 1){
    const items = this.get();
    const existing = items.find(i => i.slug === slug && i.size === size);
    if (existing){
      existing.qty += qty;
    } else {
      items.push({ slug, size, qty });
    }
    this.save(items);
  },

  updateQty(index, qty){
    const items = this.get();
    if (!items[index]) return;
    if (qty <= 0){
      items.splice(index, 1);
    } else {
      items[index].qty = qty;
    }
    this.save(items);
    renderCartDrawer();
  },

  remove(index){
    const items = this.get();
    items.splice(index, 1);
    this.save(items);
    renderCartDrawer();
  },

  count(){
    return this.get().reduce((sum, i) => sum + i.qty, 0);
  },

  subtotal(){
    const items = this.get();
    let total = 0;
    items.forEach(i => {
      const p = (typeof PRODUCTS !== "undefined") ? PRODUCTS.find(x => x.slug === i.slug) : null;
      if (p) total += p.price * i.qty;
    });
    return total;
  },

  updateCount(){
    document.querySelectorAll(".cart-count").forEach(el => {
      el.textContent = this.count();
    });
  }
};

function formatPrice(n){
  return "LE " + n.toLocaleString("en-US") + ".00 EGP";
}

function renderCartDrawer(){
  const wrap = document.getElementById("cartItems");
  const footer = document.getElementById("cartFooter");
  if (!wrap) return;

  const items = Cart.get();

  if (items.length === 0){
    wrap.innerHTML = `<div class="cart-empty">Your cart is empty.<br><br><a href="${pathToRoot()}catalog.html" class="btn btn-outline">Shop all</a></div>`;
    if (footer) footer.style.display = "none";
    return;
  }

  if (footer) footer.style.display = "block";

  wrap.innerHTML = items.map((item, index) => {
    const p = PRODUCTS.find(x => x.slug === item.slug);
    if (!p) return "";
    return `
      <div class="cart-line">
        <img src="${p.images[0]}" alt="${p.name}">
        <div>
          <h4>${p.name}</h4>
          <div class="meta">Size: ${item.size} · ${formatPrice(p.price)}</div>
          <div class="qty-control">
            <button onclick="Cart.updateQty(${index}, ${item.qty - 1})" aria-label="Decrease quantity">−</button>
            <span>${item.qty}</span>
            <button onclick="Cart.updateQty(${index}, ${item.qty + 1})" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="remove" onclick="Cart.remove(${index})">Remove</button>
      </div>
    `;
  }).join("");

  const subtotalEl = document.getElementById("cartSubtotal");
  if (subtotalEl) subtotalEl.textContent = formatPrice(Cart.subtotal());
}

/* Works out the relative path back to the site root so links
   work the same whether a page lives in /pages/ or at the root. */
function pathToRoot(){
  return location.pathname.includes("/pages/") ? "../" : "";
}

document.addEventListener("DOMContentLoaded", () => {
  Cart.updateCount();
  renderCartDrawer();
});
