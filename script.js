const button = document.querySelector("#kupit");
const emilka = document.querySelector("#img");

const buttonzub = document.querySelector("#kupit2");
const ela = document.querySelector("#img2");

const popis = document.querySelector("#popis");
const popiszub = document.querySelector("#popis2");

button.addEventListener("click", bobikTatik);
buttonzub.addEventListener("click", elaZubova);

function bobikTatik() {
  alert("SKRECKA CLAIMNUTA");
  emilka.setAttribute("src" , "./images/skreckaKupena.png");
  popis.textContent = "EMILKA: CLAIMNUTA";
  button.className = "disabled";
  button.disabled = true;
}

function elaZubova() {
  alert("ELA CLAIMNUTA");
  ela.setAttribute("src" , "./images/elaKupena.jpg");
  popiszub.textContent = "ELA: CLAIMNUTA";
  buttonzub.className = "disabled";
  buttonzub.disabled = true;
}

