
let AvocadoCount = 0
let LemonCount = 0
let EggCount = 0
let BellPepperCount = 0

function at() {
  document.getElementById("Avocado").innerHTML = `${AvocadoCount++}`;
  document.getElementById("Lemon").innerHTML = `${LemonCount++}`;
  document.getElementById("Egg").innerHTML = `${EggCount++}`;
  document.getElementById("Bell pepper").innerHTML = `${BellPepperCount++}`;
  
}
