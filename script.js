const name = prompt("Enter your Name: ");
const nameSize = prompt("Enter the px SIZE in number: ");
const colorInterval = prompt("Enter color interval in Seconds : ");
const noOfElements = prompt("How many times your Name: ");
//In further custom Element


for (let i = 0; i < noOfElements; i++) {
  let spanElement = document.createElement("span");
  document.querySelector("div").appendChild(spanElement);
}

const allElements = document.querySelectorAll("span");

for (let i = 0; i < allElements.length; i++) {
  setInterval(() => {
    function c() {
      return Math.floor(Math.random() * 255);
    }
    allElements[i].innerHTML = `${name}`;
    allElements[i].style.fontSize = `${nameSize + "px"}`;
    allElements[i].style.color = `rgb(${c()}, ${c()}, ${c()})`;
  }, `${colorInterval * 1000}`);
}
