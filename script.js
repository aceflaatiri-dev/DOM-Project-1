// Wait for the page to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Function to calculate and show the total price
  function updateTotal() {
    let total = 0;
    const allProducts = document.querySelectorAll(".card-body");

    allProducts.forEach((product) => {
      let price = parseFloat(product.querySelector(".unit-price").textContent);
      let quantity = parseInt(product.querySelector(".quantity").textContent);
      total += price * quantity;
    });

    document.querySelector(".total").textContent = total + " $";
  }

  // Like button (heart icon)
  const heartButtons = document.querySelectorAll(".fa-heart");
  heartButtons.forEach((heart) => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("liked");
      heart.style.color = heart.classList.contains("liked") ? "red" : "black";
    });
  });

  // Delete button (trash icon)
  const deleteButtons = document.querySelectorAll(".fa-trash-alt");
  deleteButtons.forEach((trash) => {
    trash.addEventListener("click", () => {
      const product = trash.closest(".card-body");
      product.remove();
      updateTotal();
    });
  });

  // Plus button
  const plusButtons = document.querySelectorAll(".fa-plus-circle");
  plusButtons.forEach((plus) => {
    plus.addEventListener("click", () => {
      let quantitySpan = plus.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantitySpan.textContent);
      quantity++;
      quantitySpan.textContent = quantity;
      updateTotal();
    });
  });

  // Minus button
  const minusButtons = document.querySelectorAll(".fa-minus-circle");
  minusButtons.forEach((minus) => {
    minus.addEventListener("click", () => {
      let quantitySpan = minus.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 0) {
        quantity--;
        quantitySpan.textContent = quantity;
        updateTotal();
      }
    });
  });

  // Calculate total when page loads
  updateTotal();
});  