/**
 * Event    =>load
 * Listener =>Call Back (Arrow or Anonymous)
 */
window.addEventListener("load", () => {
  //We can read Body Element once the page loaded.
  let pbc = document.querySelector("#parentBlockContainer");
  console.log(pbc);
  //pbc.children[0];
  //pbc.firstChild;

  //Lets create::lets assume this value comming from server/db
  //how we will get such value::using AJAX::CALL AJAX ::JSON/XML:: HTTP API

  for (let i = 0; i < 20; i++) {
    const newElement = pbc.children[0].cloneNode(true);
    newElement.children[0].innerHTML = "Sachin " + i;
    newElement.style.display = "flex"; //none

    //newElement to place at top::insertBefore
    pbc.insertBefore(newElement, pbc.firstChild);
  }
});
