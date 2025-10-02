document.addEventListener('DOMContentLoaded', () => {
  const addToCartBtns = document.querySelectorAll('.add-to-cart');
  const cartList = document.querySelector('.cart-list');
  const cartEmpty = document.querySelector('.cart-empty');
  const totalPrice = document.querySelector('.total-price');

  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.closest('.detail-info').querySelector('h2').textContent;
      const productPrice = btn.closest('.detail-info').querySelector('.price').textContent;
      const productImg = btn.closest('.detail-wrapper').querySelector('.detail-img').src;

      cartEmpty.style.display = 'none';
      cartList.style.display = 'block';
      cartList.innerHTML = `
        <div class="cart-item">
          <img src="${productImg}" alt="${productName}" class="cart-item-img">
          <div class="cart-item-info">
            <h3>${productName}</h3>
            <span>${productPrice}</span>
            <div class="quantity">
              <label>Quantity:</label>
              <input type="number" value="1" min="1">
            </div>
            <button class="remove-item">Remove</button>
          </div>
        </div>
      `;
      totalPrice.textContent = productPrice;

      document.querySelector('.remove-item').addEventListener('click', () => {
        cartList.style.display = 'none';
        cartEmpty.style.display = 'block';
        totalPrice.textContent = '¥0';
      });
    });
  });

  document.querySelector('.checkout')?.addEventListener('click', () => {
    alert('Checkout feature is under development. Stay tuned!');
  });
});