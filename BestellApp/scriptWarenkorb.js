let cart = {};

const STORAGE_KEY = 'bestellapp_cart_v1';

function formatEUR(value) {
  try {
    return value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  } catch (_) {
    return (Math.round(value * 100) / 100).toFixed(2);
  }
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    cart = raw ? JSON.parse(raw) : {};
  } catch (e) {
    cart = {};
  }
}

function saveCartToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}


function initializePage() {
  loadCartFromStorage();
  if (document.body && document.body.classList.contains('restaurant-page')) {
    if (typeof renderCategorySlider === 'function') renderCategorySlider();
    if (typeof renderProductList === 'function') renderProductList();
  }
  renderCart();
  updateCartDisplay();
  setupResponsiveCartButton();
}

// 🛒 Hinzufügen zum Warenkorb
function addToCart(name, price) {
  if (!cart[name]) {
    cart[name] = { quantity: 1, price };
  } else {
    cart[name].quantity++;
  }
  saveCartToStorage();
  renderCart();
  updateCartDisplay();
}

// 🛒 Warenkorb rendern
function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = "";

  Object.entries(cart).forEach(([name, item]) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <span>${name}</span>
      <div class="quantity-control">
        <button onclick="changeQuantity('${name}', -1)">–</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity('${name}', 1)">+</button>
        <button onclick="removeItem('${name}')">🗑️</button>
      </div>
    `;
    cartContainer.appendChild(itemDiv);
  });

  const subtotal = calculateTotal();
  const subtotalEl = document.getElementById('subtotal');
  if (subtotalEl) subtotalEl.textContent = `${formatEUR(subtotal)} €`;
  const total = subtotal > 0 ? subtotal + 2.0 : 0;
  const totalEl = document.getElementById('total-price');
  if (totalEl) totalEl.textContent = `${formatEUR(total)} €`;
  const mobileTotal = document.getElementById('mobile-total');
  if (mobileTotal) mobileTotal.textContent = `${formatEUR(total)}`;
}

// 📉 Menge ändern
function changeQuantity(name, delta) {
  if (cart[name]) {
    cart[name].quantity += delta;
    if (cart[name].quantity <= 0) {
      delete cart[name];
    }
    saveCartToStorage();
    renderCart();
    updateCartDisplay();
  }
}

// ❌ Einzelnes Gericht löschen
function removeItem(name) {
  delete cart[name];
  saveCartToStorage();
  renderCart();
  updateCartDisplay();
}

// 💶 Summe berechnen
function calculateTotal() {
  return Object.values(cart).reduce((sum, item) => sum + item.quantity * item.price, 0);
}

// ✅ Bestellung abschließen
function checkout() {
  if (Object.keys(cart).length === 0) {
    alert("Warenkorb ist leer.");
    return;
  }

  cart = {};
  saveCartToStorage();
  renderCart();
  updateCartDisplay();

  const confirmation = document.createElement('div');
  confirmation.className = 'order-confirmation';
  confirmation.textContent = "🎉 Deine Testbestellung wurde erfolgreich aufgenommen!";
  document.getElementById("cart").appendChild(confirmation);

  setTimeout(() => {
    confirmation.remove();
  }, 3000);
}

// 📱 Responsive Cart Button unten anzeigen
function setupResponsiveCartButton() {
  const existing = document.querySelector('.cart-toggle-btn');
  if (existing) {
    existing.addEventListener('click', toggleCartMobile);
    return;
  }
  const button = document.createElement('button');
  button.className = 'cart-toggle-btn';
  button.innerHTML = `Warenkorb (€<span id="mobile-total">0,00</span>)`;
  button.addEventListener('click', toggleCartMobile);
  document.body.appendChild(button);
}

function updateCartDisplay() {
  const subtotal = calculateTotal();
  const total = subtotal > 0 ? subtotal + 2.0 : 0;
  const mobileTotal = document.getElementById('mobile-total');
  if (mobileTotal) mobileTotal.textContent = `${formatEUR(total)}`;
}

function toggleCartMobile() {
  const cartEl = document.getElementById('cart');
  if (cartEl) cartEl.classList.toggle('show');
}
