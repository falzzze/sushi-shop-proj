function calcCartPriceDelivery() {
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceEl = document.querySelector(".total-price");
  const deliveryCost = document.querySelector('.delivery-cost')
  const cartDelivery = document.querySelector('[data-cart-delivery]')

  let totalPrice = 0;

  cartItems.forEach((el) => {
    const amountEl = el.querySelector("[data-counter]").innerText;
    const priceEl = el.querySelector(".price__currency").innerText;

    const currentPrice = parseInt(amountEl) * parseInt(priceEl);
    totalPrice += currentPrice;
  });

  totalPriceEl.innerText = totalPrice;

  if (totalPrice >= 0) {
    cartDelivery.classList.remove('none');
  } else {
    cartDelivery.classList.add("none");
  }



  if (totalPrice >= 800) {
    deliveryCost.classList.add('free')
    deliveryCost.innerText = 'бесплатно';
  } else {
     deliveryCost.classList.remove("free");
     deliveryCost.innerText = "250 ₽";
  }

}