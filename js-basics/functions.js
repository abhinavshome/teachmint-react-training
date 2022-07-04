function add(n1, n2) {
  return n1 + n2;
}

const sum = add(2, 8);
console.log(sum);

// const f = function (n1, n2) {
//   return n1 - n2;
// };

const f = (n1, n2) => n1 - n2;

const difference = f(4, 9);
console.log(difference);

const average = (n1, n2, f1) => {
  const sum = f1(n1, n2);
  return sum / 2;
};

const avg = average(2, 7, (n1, n2) => n1 + n2);
console.log(avg);
