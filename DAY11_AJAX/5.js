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

  let postList = [
    { id: 1, post: "Hello World" },
    { id: 2, post: "Hello CSS" },
    { id: 3, post: "Hello DOM" },
    { id: 4, post: "Hello JS" },
    { id: 5, post: "Hello HTML" },
    { id: 6, post: "Hello BOOSTRAP" },
    { id: 7, post: "Hello AJAX" },
    { id: 8, post: "Hello CALL BACK" },
  ];
  for (let i = 0; i < postList.length; i++) {
    let item = postList[i];
    const newElement = pbc.children[0].cloneNode(true);
    newElement.children[0].innerHTML = item.post;
    newElement.style.display = "flex"; //none

    //newElement to place at top::insertBefore
    pbc.insertBefore(newElement, pbc.firstChild);
  }
});
