/**
 * Event    =>load
 * Listener =>Call Back (Arrow or Anonymous)
 */
window.addEventListener("load", () => {
  //loading part::logic is at method processlogicHere.
  processlogicHere();

  //AJAX SYNTAX::SERVER::READY WITH THE SERVICE::https://reqres.in/api/users?page=2
  //AJAX::Programatically we are making request to url.
  //STEP -1::Create an object

  let xhr = new XMLHttpRequest();

  //STEP -2 There are 5 parameres but 2 are complulsory
  const url = `https://reqres.in/api/users?page=2`;
  xhr.open("GET", url);

  //Handling the handshake with the server::5 times they are exchanging the info
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
      //We have to convert string into JASON
      //JSON.parse(str);
    }
  };

  //STEP-3
  xhr.send();
});

let processlogicHere = function () {
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
    { id: 9, post: "Hello   Ajaxxx" },
    { id: 10, post: "Hello Javascript" },
  ];
  for (let i = 0; i < postList.length; i++) {
    let item = postList[i];
    const newElement = pbc.children[0].cloneNode(true);
    newElement.children[0].innerHTML = item.post;
    newElement.style.display = "flex"; //none

    //newElement to place at top::insertBefore
    pbc.insertBefore(newElement, pbc.firstChild);
  }
};
