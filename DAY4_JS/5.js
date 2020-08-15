/* let is used to declare variable.::let|| const ||var */
let counter = 1;
function increment() {

    let counterele = document.querySelector('#counterid');
    counterele.innerHTML = counter + 1;
    /*counter++;*/                      /*another method for this is*/
    counter = counter + 1;
}

function decrement() {

    let counterele = document.querySelector('#counterid');
    counterele.innerHTML = counter - 1;
    /*counter--;*/                      /*another method for this is*/
    counter = counter - 1;

}