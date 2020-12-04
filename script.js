let tag = {
  AvocadoToast: 0,
  Spaghetti: 0,
  Chilli: 0
};
let validtag = {
  AvocadoToast: 0,
  Spaghetti: 0,
  Chilli: 0
};

function at() {
  document.getElementById("Avocado").innerHTML = `${validtag.AvocadoToast}`;
  document.getElementById("Lemon").innerHTML = `${validtag.Spaghetti}`;
  document.getElementById("Egg").innerHTML = `${validtag.Chilli}`;
}

document.querySelectorAll("button").forEach(button => {
  dragElement(document.getElementById(`${button.id}`));
});

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0,
    included;//record initial position included or not
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
    included=validRegion()
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
    if (elmnt.id === `${elmnt.className}${tag[elmnt.className]}`) {
      addRecipe(elmnt);
    }
    //does the event add more valid dish=>was not included but now included
    if (!included&&validRegion()) {
      validtag[elmnt.className] += 1;
    }
    //does the event minus valid dish=>was included but now not included
    if (included&&!validRegion()){
      validtag[elmnt.className] -= 1;
    }
    document.onmouseup = null;
    document.onmousemove = null;
    console.log(validtag)
    at();
  }
  
  function validRegion() {//is incude or not
    if (
      parseInt(elmnt.style.left, 10) > window.innerWidth *0.52 &&
      parseInt(elmnt.style.top, 10) > window.innerHeight *0.2
    ) {
      return true;
    } 
    return false;
  }
}

function addRecipe(elmnt) {
  if (tag[elmnt.className] !== 6) {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = `${elmnt.innerHTML}`;
    btn.id = `${elmnt.className}${++tag[elmnt.className]}`;
    btn.className = `${elmnt.className}`;
    document.getElementById("recipe").appendChild(btn);
    dragElement(document.getElementById(`${btn.id}`));
  } else {
    alert(
      `Note:To maintain a balanced diet, having ${elmnt.className} more than 7 meals per week is not recommended.`
    );
  }
}


//resize後會計算錯誤 
//