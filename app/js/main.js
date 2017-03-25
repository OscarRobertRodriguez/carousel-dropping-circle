
var drops = document.getElementsByClassName("drop-label");

// console.log(drops);


var radio1 = document.getElementById('drop-1');
var radio2 = document.getElementById('drop-2');
var radio3 = document.getElementById('drop-3');
var radio4 = document.getElementById('drop-4');
var radio5 = document.getElementById('drop-5');

var label2 = document.getElementById('label2');
var label3 = document.getElementById('label3');
var label4 = document.getElementById('label4');
var label5 = document.getElementById('label5');

var container = document.getElementById('label-container');

for(var i = 0; i < drops.length; i++) {
  drops[i].addEventListener("click", ifNotChecked, false);
  drops[i].addEventListener("click", ifChecked, false);
}





function ifNotChecked(event) {
  var radios = document.querySelectorAll('.drop-radio[type="checkbox"]:checked');
  // console.log(radios.length);
  var drops = document.getElementsByClassName("drop-label");
  console.log(drops);
  console.log(drops.length);

   if(drops[0] === event.target && radios.length === 0) {
   radio1.disabled = false;
  setTimeout(function(){radio1.setAttribute("disabled", "disabled") }, 100);
 }

 if(drops[1] === event.target && radio1.checked && radios.length === 1) {
  document.getElementById('drop-2').disabled = false;
  setTimeout(function(){radio2.setAttribute("disabled", "disabled") }, 100);
 }
 
  if(drops[2] === event.target && radio2.checked && radios.length === 2 ) {
    document.getElementById('drop-3').disabled = false;
    setTimeout(function(){radio3.setAttribute("disabled", "disabled") }, 100);
  }
  
  if(drops[3] === event.target && radio3.checked && radios.length === 3 ) {
    document.getElementById('drop-4').disabled = false;
    setTimeout(function(){radio4.setAttribute("disabled", "disabled") }, 100);
  }
  
  if (drops[4] === event.target && radio4.checked && radios.length === 4 ) {
     document.getElementById('drop-5').disabled = false;
    setTimeout(function(){radio5.setAttribute("disabled", "disabled") }, 100);
  }
}



function ifChecked(event) {
  var container = document.getElementById('label-container');
  var radios = document.querySelectorAll('.drop-radio[type="checkbox"]:checked');



  if (drops[4] === event.target && radio5.checked  &&  radios.length === 5) {
    radio5.disabled = false;
    setTimeout(function(){radio5.setAttribute("disabled", "disabled") }, 100);
  }
  
  if (drops[3] === event.target && radio4.checked  && radios.length === 4) {
    radio4.disabled = false;
    setTimeout(function(){radio4.setAttribute("disabled", "disabled") }, 100);
  }
  if (drops[2] === event.target && radio3.checked  && radios.length === 3) {
    radio3.disabled = false;
    setTimeout(function(){radio3.setAttribute("disabled", "disabled") }, 100);
  }
    if (drops[1] === event.target && radio2.checked && radios.length === 2) {
    radio2.disabled = false;
      setTimeout(function(){radio2.setAttribute("disabled", "disabled") }, 100);
  }


  if (drops[0] === event.target &&  radios.length === 1) {
    radio1.disabled = false;
    setTimeout(function(){radio1.setAttribute("disabled", "disabled") }, 100);
  }


  
}