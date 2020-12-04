let tag = {
  AvocadoToast: 0,
  Spaghetti: 0,
  Chilli: 0,
  Curry:0,
  Chicken:0,
  Bourguignon:0
};
let validtag = {
  AvocadoToast: 0,
  Spaghetti: 0,
  Chilli: 0,
  Curry:0,
  Chicken:0,
  Bourguignon:0
};
// let avocado=0;
// let lemon=0;
// let egg=0;
// let bellpepper=0;
// let beef =0;
// let bakedbeans=0;
// let kidneybeans=0;

function trim(n) {
  return Math.round(10 * n) / 10
}

function at() {
  document.getElementById("Avocado").innerHTML = `${validtag.AvocadoToast}`;
  document.getElementById("Lemon").innerHTML = `${validtag.AvocadoToast*0.5}`;
  document.getElementById("Egg").innerHTML = `${validtag.AvocadoToast*3}`;
  document.getElementById("BellPepper").innerHTML = `${trim(validtag.AvocadoToast*0.2)}`;
  document.getElementById("Beef").innerHTML = `${validtag.Chilli+validtag.Bourguignon}`;
  document.getElementById("BakedBeans").innerHTML = `${validtag.Chilli}`;
  document.getElementById("KidneyBeans").innerHTML = `${validtag.Chilli}`;
   document.getElementById("MushRoom").innerHTML = `${validtag.Bourguignon+validtag.Spaghetti*0.5}`;
   document.getElementById("spaghetti").innerHTML = `${validtag.Spaghetti*0.15}`;
   document.getElementById("Zucchini").innerHTML = `${validtag.Spaghetti*0.5}`;
   document.getElementById("rice").innerHTML = `${validtag.Bourguignon*0.5+validtag.Curry*0.5}`;
   document.getElementById("garlic").innerHTML = `${validtag.Bourguignon*0.25}`;
   document.getElementById("onion").innerHTML = `${validtag.Bourguignon+validtag.Curry*2+validtag.Spaghetti*0.5}`;
   document.getElementById("whitewine").innerHTML = `${validtag.Bourguignon*0.3}`;
   document.getElementById("redwine").innerHTML = `${validtag.Bourguignon*0.3}`;
   document.getElementById("carrot").innerHTML = `${validtag.Bourguignon*0.5+validtag.Curry*0.5}`;
   document.getElementById("chickbrew").innerHTML = `${validtag.Bourguignon*0.25}`;
  document.getElementById("tomatopaste").innerHTML = `${validtag.Bourguignon*0.25}`;
  document.getElementById("potato").innerHTML = `${validtag.Curry*2+validtag.Chicken}`;
  document.getElementById("drumstick").innerHTML = `${validtag.Curry+validtag.Chicken*0.5}`;
  document.getElementById("salad").innerHTML = `${validtag.Chicken}`;
  document.getElementById("milk").innerHTML = `${validtag.Spaghetti*0.1}`;;
  document.getElementById("sourcream").innerHTML = `${validtag.Chilli}`;
  document.getElementById("naan").innerHTML = `${validtag.Chilli}`;
  document.getElementById("toast").innerHTML = `${validtag.AvocadoToast*3}`;
  document.getElementById("Cheese").innerHTML = `${validtag.Chilli*0.1+validtag.AvocadoToast*0.1+validtag.Spaghetti*0.1}`;
  
//   document.getElementById("chickbrew").innerHTML = `${validtag.Chilli}`;
//   document.getElementById("chickbrew").innerHTML = `${validtag.Chilli}`;
//   document.getElementById("chickbrew").innerHTML = `${validtag.Chilli}`;
//   document.getElementById("chickbrew").innerHTML = `${validtag.Chilli}`;
//   document.getElementById("chickbrew").innerHTML = `${validtag.Chilli}`;
//   document.getElementById("chickbrew").innerHTML = `${validtag.Chilli}`;
  
  
  
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