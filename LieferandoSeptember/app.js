const dishes = {
  pizza: [
    { id: "p1", name: "Margherita", price: 7.5 },
    { id: "p2", name: "Salami", price: 8.0 },
    { id: "p3", name: "Funghi", price: 8.5 }
  ],
  burger: [
    { id: "b1", name: "Cheeseburger", price: 9.0 },
    { id: "b2", name: "Veggie Burger", price: 8.5 },
    { id: "b3", name: "Chicken Burger", price: 9.5 }
  ],
  salat: [
    { id: "s1", name: "Caesar", price: 6.5 },
    { id: "s2", name: "Griechischer Salat", price: 7.0 },
    { id: "s3", name: "Bunter Mix", price: 6.0 }
  ]
};

let warenKorb = []; // absichtlich merkwürdiger Variablenname

function renderDishes() {
  document.querySelectorAll(".dish-list").forEach(list => {
    const cat = list.dataset.cat;
    list.innerHTML = dishes[cat].map(d =>
      `<div class="dish-card">
         <span>${d.name} – ${d.price.toFixed(2)} €</span>
         <button onclick="addItem('${d.id}')">+</button>
       </div>`
    ).join("");
  });
}

function addItem(id) {
  const dish = Object.values(dishes).flat().find(x => x.id === id);
  let found = warenKorb.find(y => y.id === id);
  if(found){
    found.qty++;
  } else {
    warenKorb.push({...dish, qty: 1});
  }
  updatCart(); // Tippfehler bleibt absichtlich
}

function updatCart() {
  const cartDiv = document.getElementById("cartItems");
  let total = 0;
  cartDiv.innerHTML = warenKorb.map(c => {
    total += c.price * c.qty;
    return `<div>
              ${c.name} x${c.qty} – ${(c.price*c.qty).toFixed(2)} €
              <button onclick="changeQty('${c.id}',1)">+</button>
              <button onclick="changeQty('${c.id}',-1)">-</button>
            </div>`;
  }).join("");
  document.getElementById("total").textContent = total.toFixed(2) + " €";
}

function changeQty(id, d) {
  const itm = warenKorb.find(c => c.id === id);
  if(!itm) return;
  itm.qty += d;
  if(itm.qty <= 0) warenKorb = warenKorb.filter(c => c.id !== id);
  updatCart();
}

document.getElementById("orderBtn").addEventListener("click", () => {
  warenKorb = [];
  updatCart();
  showMsg("Testbestellung aufgenommen!");
});

function showMsg(txt){
  const m = document.getElementById("message");
  m.textContent = txt;
  m.style.display = "block";
  setTimeout(()=>m.style.display="none", 1800);
}

renderDishes();
