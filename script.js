const stances = ["regular", "fakie", "switch", "nollie"];

const tricks = ["kickflip", "heelflip", " bs shove it", " fs shove it", "fs 180",
"bs 180", "varial flip", "casper flip", "ollie", "bs bigspin ", "360 shove it",
"360 flip", "varial heel ", "hardflip", "inward heel", "lazer flip", "casper heel "];
 
const stance = document.getElementById("stance");
const trick = document.getElementById("trick");

function generateStance (array) {
   const stanceIndex = Math.floor(Math.random() * array.length); 
   stance.textContent = array[stanceIndex];
};

function generateTrick (arr) {
    const trickIndex = Math.floor(Math.random() * arr.length); 
    trick.textContent = arr[trickIndex];
 };

 

console.log(generateStance(stances));
console.log(generateTrick(tricks));

document.getElementById('reloadButton').addEventListener('click', function() {
    location.reload(); // Оновлюємо сторінку при кліку на кнопку
  });

