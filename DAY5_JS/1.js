function handlemouseover() {
    console.log("I have succesfully made the call!!");

    var Id2Element = document.querySelector("#id2");
    Id2Element.style.background = "powderblue";
    Id2Element.style.color = "black";
    Id2Element.innerHTML = "ID Selector!!";
}

function handlemouseout() {
    console.log("I have succesfully made the call!!");

    var Id2Element = document.querySelector("#id2");
    Id2Element.style.background = "salmon";
    Id2Element.style.color = " white";
    Id2Element.innerHTML = "Hello World !!";
}

