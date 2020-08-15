var counter = 1;

var likecounter = 1;
//append to the comment box

let commentHere = function () {
  let userComment = document.querySelector("#inputId1").value; //here we are not using innerHTML because this is a form element

  //  Logic here to create new dynamic element with comment layout

  const newElement = document.createElement("div");
  newElement.style.display = "flex";
  newElement.style.justifyContent = "space-between";
  newElement.style.background = "pink";
  newElement.style.marginBottom = "8PX";

  const child1 = document.createElement("div");
  const child2 = document.createElement("button");

  newElement.appendChild(child1);
  child1.textContent = userComment;

  newElement.appendChild(child2);
  child2.textContent = "Delete";

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
