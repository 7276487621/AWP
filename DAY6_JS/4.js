var counter = 1;

var likecounter = 1;
//append to the comment box

let commentHere = function () {
  let userComment = document.querySelector("#inputId1").value; //here we are not using innerHTML because this is a form element

  //Create new element

  let newElement = document.createElement("div");
  newElement.style.display = "flex";
  newElement.style.justifyContent = "space-between";
  newElement.style.marginBottom = "8px";
  let child1 = document.createElement("div");
  child1.textContent = userComment;

  let child2 = document.createElement("button");
  child2.textContent = "Delete";

  //relationship among newly created element
  newElement.appendChild(child1);
  newElement.appendChild(child2);

  //commentBox Eelement
  const commentBox = document.querySelector("#commentBox");

  //appending to parent box:: this is adding new element at the end
  // commentBox.appendChild(newElement);

  //now we want to add new element at the top

  commentBox.insertBefore(newElement, commentBox.firstChild);

  //Clean the input box
  document.querySelector("#inputId1").value = "";
};

function likeHere() {
  document.querySelector("#likeid").innerHTML = "Like" + likecounter;
  likecounter++;
}
