var counter = 1;

var likecounter = 1;
//append to the comment box

let commentHere = function () {

    //new element initialization
    let newElement = document.createElement('div');
    newElement.textContent = "You are looking beautiful " + counter;

    //Styling
    newElement.style.background = "purple";
    newElement.style.margin = "5px";


    //appending to parent box
    document.querySelector("#commentBox").append(newElement);

    counter++;
}

function likeHere() {
    document.querySelector("#likeid").innerHTML = "Like" + likecounter;
    likecounter++;

}