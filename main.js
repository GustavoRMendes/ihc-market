const botoes = document.querySelectorAll(".botoes");
const listas = document.querySelectorAll(".listas");
const seletor = document.querySelector("select");
const options = document.querySelectorAll("option");
console.log(seletor);
console.log(options);
console.log(listas);
options.forEach((item) => console.log(item.textContent));
