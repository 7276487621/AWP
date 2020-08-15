var counter = 1;

var likecounter = 1;
//append to the comment box

let commentHere = function () {
  let userComment = document.querySelector("#inputId1").value; //here we are not using innerHTML because this is a form element

  //we are not going to use create element
  const newElement = document
    .querySelector("#referenceCommentId")
    .cloneNode(true);
  newElement.removeAttribute("Id"); //good practice to keep uniq id
  newElement.style.visibility = "visible";
  newElement.style.background = "black";
  newElement.style.opacity = 0.7;
  newElement.style.color = "white";
  newElement.style.marginBottom = "8px";
  newElement.children[0].innerHTML = userComment;
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

function deleteComment(btnElement) {
  //document.querySelector("#commentBox");
  btnElement.parentElement.remove();
}
