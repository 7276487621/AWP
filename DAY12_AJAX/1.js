let callAjax = function () {
  let xhr = new XMLHttpRequest();

  //When your response is ready
  xhr.onload = () => {
    console.log(xhr.responseText);

    const refjson = JSON.parse(xhr.responseText);
    const data = refjson.data;
    //using this data::we have to perform DOM operation
    domlogic(refjson);
  };
  xhr.open("GET", "https://reqres.in/api/users?page=2");
  xhr.send();
};
//DOM HTML,CSS
let domlogic = function (refjson) {
  console.log(refjson);
  let parent = document.querySelector("#parent");
  for (let i = 0; i < refjson.data.length; i++) {
    const items = refjson.data[i];
    let newElement = parent.children[0].cloneNode(true);
    newElement.innerHTML = items.first_name + " " + items.last_name;
    parent.insertBefore(newElement, parent.firstChild);
  }
};

/**
 * MIN REQUIREMENT::SERVER PROGRAM(API)
 * AJAX::How to connect or How to talk with server
 * Response(JSON/XML)
 * Fundamental knowledge of HTML,DOCUMENT,DOM OPERATION PAINT THE PAGE
 */
