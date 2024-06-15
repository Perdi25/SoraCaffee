const barnav = document.querySelector(".barnav");
document.querySelector("#menu").onclick = () => {
  barnav.classList.toggle("active");
};
const shopping_cart = document.querySelector(".shopping-cart");
document.querySelector("#cart").onclick = () => {
  shopping_cart.classList.toggle("active");
};

const cart = document.querySelector("#cart");
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !barnav.contains(e.target)) {
    barnav.classList.remove("active");
  }
  if (!cart.contains(e.target) && !shopping_cart.contains(e.target)) {
    shopping_cart.classList.remove("active");
  }
});
