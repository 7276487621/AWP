let pbc1 = document.querySelector("#parentBlockContainer");
console.log(pbc1);

/**
 * Event    =>load
 * Listener =>Call Back (Arrow or Anonymous)
 */
window.addEventListener("load", () => {
  console.log("I.AM.CALLED.ONCE,PAGE.LOAD");

  //We can read Body Element once the page loaded.
  let pbc = document.querySelector("#parentBlockContainer");
  console.log(pbc);
  //pbc.children[0];
  //pbc.firstChild;
  for (let i = 0; i < 20; i++) {
    const newElement = pbc.children[0].cloneNode(true);
    newElement.style.display = "flex"; //none
    pbc.insertBefore(newElement, pbc.firstChild);
  }
});

/**
 * Event listener ## onclick=likeme()
 * Event     => Click
 * Listener  =>likeme
 */

let likeme = function () {};
