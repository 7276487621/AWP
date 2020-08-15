//** Study the setInterval **//

// case-1::calling setInterval.
setInterval(function () {
  console.log("I am interval,using annonymous!!");
}, 1000);

//case-2

setInterval(() => {
  console.log("i am also interval,using Arrow");
}, 1000);

//case-3
let interval = function () {
  console.log("I am getting used as a parameter inside the setInterval");
};
setInterval(interval, 1000);
