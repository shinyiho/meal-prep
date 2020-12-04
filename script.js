let sumMeal = {
  AvocadoToast: 0,
  Spaghetti: 0,
  Chilli: 0
};

// function at() {
//   document.getElementById("Avocado").innerHTML = `${AvocadoCount++}`;
//   document.getElementById("Lemon").innerHTML = `${LemonCount++}`;
//   document.getElementById("Egg").innerHTML = `${EggCount++}`;
//   document.getElementById("Bell pepper").innerHTML = `${BellPepperCount++}`;
// }

document.querySelectorAll("button").forEach(button => {
  dragElement(document.getElementById(`${button.id}`));

});
 
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:

    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    // console.log(pos1,pos2,pos3,pos4)
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    if (elmnt.id === `${elmnt.className}${sumMeal[elmnt.className]}`) {
      addRecipe(elmnt);
    }
     document.onmouseup = null;
    document.onmousemove = null;
    // console.log(`AvocadoToast${AvocadoToastCount}`)
    document.querySelectorAll(".AvocadoToast").forEach(AvocadoToast=>{
  // if(AvocadoToast.left)
  console.log(AvocadoToast.style.left)
   console.log(window.innerHeight)
   
   
})

  }
}

function addRecipe(elmnt) {
  if (sumMeal[elmnt.className] !== 6) {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = `${elmnt.innerHTML}`;
    btn.id = `${elmnt.className}${++sumMeal[elmnt.className]}`;
    btn.className = `${elmnt.className}`;
    document.getElementById("recipe").appendChild(btn);
    dragElement(document.getElementById(`${btn.id}`));
    // console.log(AvocadoToastCount);
  } else {
    alert(
      `Note:To maintain a balanced diet, having AvocadoToast more than 7 meals per week is not recommended.`
    );
  }
}


// console.log(document.querySelector("Table").style.top)
// console.log(window.addEventListener("click",(e)=>{console.log(e)}))

let totalAT = 0



