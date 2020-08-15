/**
 * The logic of the program is syncronous
 * The execution happens in this program in one order or proper order
 * All the statement are blocking in nature.
 */
function example() {
  console.log("1");
  console.log("2");
  console.log("3");
  console.log("4");
  console.log("5");
  console.log("6");
  console.log("7");
  console.log("8");
}

/**
 * Execution of program asyncronus here.
 * At one place it does not execute in sync.
 */
function example1() {
  console.log("1");
  console.log("2");

  //non-blocking statement:: at Dominos; we place the orders; but we dont
  //block the next customer
  setInterval(() => {
    console.log("3.I am callback", new Date());
  }, 2000);
  console.log("4");
  console.log("5");
}
