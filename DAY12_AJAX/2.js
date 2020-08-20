let callAjax = function () {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");
  xhr.onload = () => {
    console.log(xhr.responseText);
    const refjson = JSON.parse(xhr.responseText);
    jsonDomoperation(refjson);
  };
  xhr.send();
};

let jsonDomoperation = function (refjson) {
  console.log(refjson);
  let parent = document.querySelector("#Parent");
  for (let i = 0; i < refjson.length; i++) {
    let item = refjson[i];
    let newElement = parent.children[0].cloneNode(true);
    newElement.innerHTML = item.FirstName + " " + item.LastName;
    parent.insertBefore(newElement, parent.firstChild);
  }
};

let callAjaxXML = function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");
  //I am looking for XML::Requesting to the server
  xhr.setRequestHeader("accept", "application/xml");
  xhr.onload = () => {
    //response from the server
    const xmldoc = xhr.responseXML;
    //painting of the page is done by this method
    //xmlDomhandlerv1(xmldoc)
    //xmlDomhandlerv2(xmldoc)
    xmlDomhandler(xmldoc);
  };
  xhr.send();
};

let xmlDomhandlerv1 = function (xmldoc) {
  const parentElement = xmldoc.querySelector("ArrayOfAuthor");
  console.log(parentElement);

  for (let i = 0; i < parentElement.children.length; i++) {
    let AuthorItem = parentElement.children[i];

    let firstName = AuthorItem.children[0].innerHTML;
    let lastname = AuthorItem.children[3].innerHTML;

    //let firstName = AuthorItem.querySelector("FirstName").innerHTML;
    //let lastname = AuthorItem.querySelector("LastName").innerHTML;

    //HTML DOM
    let parent = document.querySelector("#Parent");
    let newElement = parent.children[0].cloneNode(true);
    newElement.innerHTML = firstName + " " + lastname;

    parent.insertBefore(newElement, parent.firstChild);
  }
};

let xmlDomhandlerv2 = function (xmldoc) {
  const Authorlist = xmldoc.querySelectorAll("Author");

  for (let i = 0; i < Authorlist.length; i++) {
    let AuthorItem = Authorlist[i];

    let firstName = AuthorItem.children[0].innerHTML;
    let lastname = AuthorItem.children[3].innerHTML;

    //let firstName = AuthorItem.querySelector("FirstName").innerHTML;
    //let lastname = AuthorItem.querySelector("LastName").innerHTML;

    //HTML DOM
    let parent = document.querySelector("#Parent");
    let newElement = parent.children[0].cloneNode(true);
    newElement.innerHTML = firstName + " " + lastname;

    parent.insertBefore(newElement, parent.firstChild);
  }
};

let xmlDomhandler = function (xmldoc) {
  let Authorlist = xmldoc.querySelectorAll("Author");

  for (let i = 0; i < Authorlist.length; i++) {
    let AuthorItem = Authorlist[i];

    let firstName = AuthorItem.children[0].innerHTML;
    let lastname = AuthorItem.children[3].innerHTML;

    let parent = document.querySelector("#Parent");
    let newElement = parent.children[0].cloneNode(true);

    newElement.innerHTML = firstName + " " + lastname;
    parent.insertBefore(newElement, parent.firstChild);
  }
};
