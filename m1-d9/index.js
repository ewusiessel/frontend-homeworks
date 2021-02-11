for (let i = 0; i <= 79; i++) {
  console.log(i + 1);
  if (i === 79 - 1) break;
}

const numbers = document.querySelector("#bingoBoard");
console.log(numbers.innerHTML);
const inputNumbers = (numbers.innerHTML += "<div></div>");

console.log(inputNumbers.innerHTML);
