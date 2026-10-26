const valores = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const cores = ["#cce5ff", "#ffffff"];

const lista = document.getElementById("lista");

valores.forEach((valor, indice) => {
    const li = document.createElement("li");
    li.textContent = valor;
    li.style.backgroundColor = cores[indice % 2];
    lista.appendChild(li);
});