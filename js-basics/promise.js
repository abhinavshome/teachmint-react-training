setTimeout(() => console.log("After 2s"), 2000);
// const t = Date.now();
// console.log(Date.now());
// while (Date.now() - t < 5000) {}
// console.log(Date.now() - t);
console.log("After set timeout");

// const giftPromise = (cb) => {
//   setTimeout(() => {
//     const gifts = ["bat", "football", "guitar"];
//     const index = Math.floor(Math.random() * 4);
//     const gift = gifts[index];
//     cb(gift);
//   }, 3000);
// };

const makePlan = (gift) => {
  if (gift === "cricket") {
    console.log("I will play cricket on Sunday");
  }

  if (gift === "football") {
    console.log("I will play football");
  }

  if (gift === "guitar") {
    console.log("I will play guitar");
  }

  if (!gift) {
    console.log("Ooops! Dad fogot the gift!");
  }
};

// giftPromise(makePlan);

const giftPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const gifts = ["bat", "football", "guitar"];
    const index = Math.floor(Math.random() * 4);
    const gift = gifts[index];
    gift ? resolve(gift) : reject("Dad forgot");
  }, 3000);
});

// giftPromise.then(makePlan, (x) => console.log(x));

const f = async () => {
  try {
    const res = await giftPromise;
    makePlan(res);
  } catch (err) {
    console.log(err);
  }
};

f();

console.log("After promise");

// fetch("http://localhost:5000/books")
//   .then((res) => res.json())
//   .then(
//     (res) => console.log("success", res),
//     (err) => console.log("err", err)
//   );

const af = async () => {
  try {
    const res = await fetch("http://localhost:5000/books");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("error happened", err);
  }
};

af();

// event loop
// what         | when
// call f       | 2s is over
