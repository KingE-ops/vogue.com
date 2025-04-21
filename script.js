let cart = [];

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");
  cartItems.innerHTML = "";
  let total = 0, count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name} x${item.qty}</span>
        <span>$${item.price * item.qty}</span>
      </div>
    `;
  });

  cartTotal.innerText = total.toFixed(2);
  cartCount.innerText = count;
}

function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("active");
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("🎉 Checkout complete! Thanks for shopping.");
  cart = [];
  updateCart();
  toggleCart();
}
