let listOfDead = document.querySelector(".dead");
let numAlt = 0;
let time = 0;
let interval = 1500;
let alive = [
  "Alexandro",
  "Arnau",
  "Camilo",
  "Carlos",
  "Delfina",
  "Enric",
  "Erik",
  "Ferran",
  "Franco",
  "Jani",
  "Jason",
  "Kavan",
  "Manuela",
  "Nathalia",
  "Nellay",
  "Noelia",
  "Nuria",
  "Raul",
  "Sergi",
  "Shuangjie",
  "Solomon",
  "Unai",
  "Andres",
  "Thierry"
];
let interval = 500;
let alive = ["Alexandro", "Arnau", "Camilo"];

let dead = [];

@@ -54,11 +29,12 @@ function displayNames(arr, element) {
function sorteo() {
  btnPlay.disabled = true;
  numAlt = numAlt = Math.floor(Math.random() * aliveAmout);
  listOfHell.children[numAlt].classList.add('active');
  if (listOfHell.children[chosen] !== undefined)
    listOfHell.children[numAlt].classList.add("active");
}

function getTime() {
  time = setInterval(sorteo, 100);
  time = setInterval(sorteo, 500);
}

function clearTime() {
@@ -73,7 +49,6 @@ function clearTime() {
  }, interval);
}


btnPlay.addEventListener("click", () => {
  sorteo();
  getTime();
@@ -86,7 +61,7 @@ function killCoder(num) {
    if (i !== num) {
      result.push(alive[i]);
    } else {
      dead.push(alive[i]);
      if (listOfHell.children[chosen] !== undefined) dead.push(alive[i]);
    }
  }
  return result;
