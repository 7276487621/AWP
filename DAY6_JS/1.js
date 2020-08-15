var counter = 1;

var likecounter = 1;
//append to the comment box

let commentHere = function () {
  let userComment = document.querySelector("#inputId1").value; //here we are not using innerHTML because this is a form element

  //new element initialization
  let newElement = document.createElement("div");
  //newElement.textContent = "You are looking beautiful " + counter;
  newElement.textContent = userComment; //Remove the hardcode with usercomment
  //add styling to new element
  newElement.style.background = "gold";
  newElement.style.margin = "5px";
  newElement.style.color = "black";

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
