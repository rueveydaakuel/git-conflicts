
const dateElement = document.querySelector('[data-js="date"]');
const date = new Date().toLocaleDateString("en-US");

document.querySelector('[data-js="year"]').textContent =
  new Date().getFullYear();

