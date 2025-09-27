const productTemplate = (product) => `
  <div class="product-card">
    <img class="productImage" src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.price.toFixed(2)} €</p>
    <button onclick="addToCart('${product.name}', ${product.price})">In den Warenkorb</button>
  </div>
`;

const categorySectionTemplate = (category, productsHTML) => `
  <section id="${category.id}" class="category-section">
    <h2>${category.name}</h2>
    <div class="category-products">${productsHTML}</div>
  </section>
`;

// Warenkorb-Item-Template wird direkt in scriptWarenkorb.js aufgebaut

const categorySliderItem = (category) => `
  <a href="#${category.id}" class="slider-link">${category.name}</a>
`;


// Beispiel-Daten für Rendering

const products = [
  {
    id: 'pizza',
    name: 'Pizza Margherita',
    price: 12.5,
    image: './FillImgs/italian-style-pizza.webp',
    category: 'hauptgerichte'
  },
  {
    id: 'salad',
    name: 'Frischer Salat',
    price: 8.0,
    image: './FillImgs/sales.webp',
    category: 'vorspeisen'
  },
  {
    id: 'noodles',
    name: 'Chinesische Nudeln',
    price: 10.0,
    image: './FillImgs/chinese-food.webp',
    category: 'hauptgerichte'
  },
  {
    id: 'cola',
    name: 'Cola',
    price: 2.5,
    image: './FillImgs/cola.webp',
    category: 'getraenke'
  },
  {
    id: 'water',
    name: 'Wasser',
    price: 1.7,
    image: './FillImgs/water.webp',
    category: 'getraenke'
  }
];

const categories = [
  { id: 'vorspeisen', name: 'Vorspeisen' },
  { id: 'hauptgerichte', name: 'Hauptgerichte' },
  { id: 'getraenke', name: 'Getränke' }
];

function renderProductList() {
  const productWrapper = document.querySelector('.product-wrapper');
  productWrapper.innerHTML = '';

  categories.forEach(category => {
    const categoryProducts = products.filter(p => p.category === category.id);
    const productsHTML = categoryProducts.map(p => productTemplate(p)).join('');
    productWrapper.innerHTML += categorySectionTemplate(category, productsHTML);
  });
}

function renderCategorySlider() {
  const nav = document.querySelector('.category-nav');
  if (!nav) return;
  nav.innerHTML = categories.map(c => `<button onclick="scrollToCategory('${c.id}')">${c.name}</button>`).join('');
}

function scrollToCategory(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
