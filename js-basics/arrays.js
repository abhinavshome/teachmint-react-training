const fruits = ["banana", "mango", "guava"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[10]);
console.log(fruits[-2]);

fruits.push("pineapple");
fruits.unshift("muskmelon");

console.log(fruits);
const lastElement = fruits.pop();

console.log(lastElement);
console.log(fruits);

const firstElement = fruits.shift();
console.log(firstElement, fruits);

//iterations

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}. ${fruits[i]}`);
}

for (let fruit of fruits) {
  console.log(fruit);
}

let res = fruits.forEach((fruit, i) => console.log(`${i}. ${fruit}`));
console.log(res); //undefined

//other methods
const resArr = fruits
  .map((fruit) => fruit.charAt(0).toUpperCase() + fruit.slice(1))
  .map((e, i) => `${i + 1}. ${e}`);

console.log(resArr);

const numbers = [2, 9, 4, 5, 17, 11];
const evenNumbers = numbers.filter((n) => n % 2 == 0);
console.log(evenNumbers);

const names = ["Sam", "David", "Vinod", "Ram"];
const findNameWithAInIt = names.find((e) => e.includes("a"));
console.log(findNameWithAInIt);

//reduce
let sum = numbers.reduce((res, curr) => res + curr);
console.log(sum);

let largest = numbers.reduce((res, curr) => (res > curr ? res : curr));
console.log(largest);
