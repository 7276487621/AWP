function handlemouseover() {
    console.log("I have succesfully made the call!!");

    var Id2Element = document.querySelector("div").children[0];
    Id2Element.style.background = "gold";
    Id2Element.style.color = "black";
    Id2Element.innerHTML = "Element Selector";
}

function handlemouseout() {
    console.log("I have succesfully made the call!!");

    var Id2Element = document.querySelector("div").children[0];
    Id2Element.style.background = "black";
    Id2Element.style.color = " white";
    Id2Element.innerHTML = "Hello World !!";
}

