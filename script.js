let AvocadoCount = 0;
let LemonCount = 0;
let EggCount = 0;
let BellPepperCount = 0;
let AvocadoToastCount = 0;

function at() {
  document.getElementById("Avocado").innerHTML = `${AvocadoCount++}`;
  document.getElementById("Lemon").innerHTML = `${LemonCount++}`;
  document.getElementById("Egg").innerHTML = `${EggCount++}`;
  document.getElementById("Bell pepper").innerHTML = `${BellPepperCount++}`;
}

dragElement(document.getElementById("AvocadoToast0"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  console.log("sdhf");
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:

    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    console.log(e);
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
    // console.log(elmnt.id)
    // stop moving when mouse button is released:
    if (elmnt.id === `AvocadoToast${AvocadoToastCount}`) {
      addRecipe(elmnt);
    }
    // console.log(`AvocadoToast${AvocadoToastCount}`)

    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function addRecipe(elmnt) {
  if (AvocadoToastCount !== 9) {
    console.log(elmnt);
    var btn = document.createElement("BUTTON");
    btn.innerHTML = `${elmnt.innerHTML}`;
    btn.id = `${elmnt.id.slice(0, btn.id.length - 1)}${++AvocadoToastCount}`;
    btn.className = "button AvocadoToast";
    document.getElementById("recipe").appendChild(btn);
    dragElement(document.getElementById(`${btn.id}`));
    console.log(btn.id);
    console.log(AvocadoToastCount);
  } else {
    alert(`In order to obtain a balanced diet, ${elmnt.id.slice(0, btn.id.length - 1)}`);
  }
}
