/* =========================================================
   ASPIRE — Main UI behavior
   Mobile menu, cart drawer, product grid + review rendering,
   toast messages, newsletter form.
   ========================================================= */

/* ---------- drawers (mobile menu + cart) ---------- */

function openDrawer(id){
  document.getElementById(id).classList.add("open");
  document.getElementById("overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeDrawers(){
  document.querySelectorAll(".drawer").forEach(d => d.classList.remove("open"));
  document.getElementById("overlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- toast ---------- */

let toastTimer;
function showToast(msg){
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

/* ---------- product card markup ---------- */

function productCardHTML(p, rootPath){
  const root = rootPath !== undefined ? rootPath : pathToRoot();
  let tag = "";
  if (!p.inStock) tag = `<span class="tag out">Sold out</span>`;
  else if (p.compareAt) tag = `<span class="tag sale">Sale</span>`;

  const priceHTML = p.compareAt
    ? `<span class="now">${formatPrice(p.price)}</span><span class="was">${formatPrice(p.compareAt)}</span>`
    : `${formatPrice(p.price)}`;

  return `
    <a class="product-card" href="${root}pages/product.html?slug=${p.slug}">
      <div class="product-media">
        ${tag}
        <img class="img-a" src="${p.images[0]}" alt="${p.name}" loading="lazy">
        <img class="img-b" src="${p.images[1] || p.images[0]}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="price">${priceHTML}</div>
      </div>
    </a>
  `;
}

function renderProductGrid(targetId, products, rootPath){
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = products.map(p => productCardHTML(p, rootPath)).join("");
}

/* ---------- reviews ---------- */

function renderReviews(targetId){
  const el = document.getElementById(targetId);
  if (!el || typeof REVIEWS === "undefined") return;
  el.innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
      <p>"${r.text}"</p>
      <div class="reviewer"><span>${r.name}</span><span>${r.product}</span></div>
    </div>
  `).join("");
}

/* ---------- newsletter (front-end only) ---------- */

function handleNewsletter(e){
  e.preventDefault();
  const input = e.target.querySelector("input[type=email]");
  const note = e.target.querySelector(".form-note");
  if (input && input.value){
    note.textContent = "Thanks — you're on the list.";
    input.value = "";
  }
  return false;
}

/* ---------- init shared chrome on every page ---------- */

document.addEventListener("DOMContentLoaded", () => {
  renderReviews("reviewGrid");
});
