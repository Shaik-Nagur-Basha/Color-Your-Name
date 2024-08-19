function values(){
  const name = document.querySelector('#name').value
  const nameSize = document.querySelector('#nameSize').value
  const colorInterval = document.querySelector('#colorInterval').value
  const noOfElements = document.querySelector('#noOfElements').value
  const htmlElement = document.querySelector('#htmlElement').value
  if(name && nameSize && colorInterval && noOfElements && htmlElement) {
    document.querySelector('#form').style.display = 'none'
    return main(name, nameSize, colorInterval, noOfElements, htmlElement)
  } else {
    try {
      document.querySelector('#form').removeAttributeNode('style')
    } catch {
      alert('Fill all Fields!')
    }
  }
}

const value1 = document.querySelector("#value1");
const input1 = document.querySelector("#nameSize");
const value2 = document.querySelector("#value2");
const input2 = document.querySelector("#colorInterval");
value1.textContent = input1.value;
input1.addEventListener("input", (event) => {
  value1.textContent = event.target.value;
});
value2.textContent = input2.value;
input2.addEventListener("input", (event) => {
  value2.textContent = event.target.value;
});

function main(name, nameSize, colorInterval, noOfElements, htmlElement) {
  for (let i = 0; i < noOfElements; i++) {
    document.querySelector("#colorElements").appendChild(document.createElement(`${htmlElement}`));
  }

  const allElements = document.querySelectorAll(`${htmlElement}`);
  
  for (let i = 0; i < allElements.length; i++) {
    setInterval(() => {
      function c() {
        return Math.floor(Math.random() * 255);
      }
      allElements[i].innerHTML = `${name}`;
      allElements[i].style.fontSize = `${nameSize + "px"}`;
      allElements[i].style.color = `rgb(${c()}, ${c()}, ${c()})`;
    }, colorInterval * 1000);
  }
}
