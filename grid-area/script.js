const elementSum = document.getElementById("sum");
const elementFirst = document.getElementById("firstPart");
const elementSecond = document.getElementById("secondPart");
const elementFixed = document.getElementById("fixedPart");
const elementEquals = document.getElementById("equals");

const factors = [
    ["1 +", "2 +", 3, 5],
    ["1 +", "2 +", 3, 4],
    ["1 +", "2 +", 4, 6],
    ["1 +", "2 +", 4, 5],
    ["1 +", "2 +", 5, 7],
    ["1 +", "2 +", 5, 6]
];

var elementValues = factors[Math.floor(Math.random()*factors.length)];

 elementFirst.textContent = elementValues[0];
 elementSecond.textContent = elementValues[1];
 elementFixed.textContent = elementValues[2];
 elementSum.textContent = elementValues[3];
  
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
 let temp = document.getElementById(data);

  if(parseInt(elementFirst.textContent)
  +parseInt(elementSecond.textContent)
  +parseInt(elementFixed.textContent)
  -parseInt(temp.textContent)
  ==parseInt(elementSum.textContent)) 
  {
  elementSum.style.backgroundColor = "lime";
  elementFirst.style.backgroundColor = "lime";
  elementSecond.style.backgroundColor = "lime";
  elementFixed.style.backgroundColor = "lime";
  elementEquals.textContent = "=";
  document.getElementById("container").classList.remove('container');
  document.getElementById("container").classList.add('containerWithout'+data);
  document.getElementById(data).remove();
  }

}