let getWeather = function () {
  //City name is Hardcoded
  let cityname = document.querySelector("#textId").value || "pune";

  /*let url=
  "https://api.openweathermap.org/data/2.5/weather?appid=c6d88a1dbd900ac555737e5d1e7fa229&units=metric&q=pune"*/

  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=c6d88a1dbd900ac555737e5d1e7fa229&units=metric&q=" +
    cityname;

  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.onload = () => {
    const refjson = JSON.parse(xhr.responseText);
    console.log(refjson);
    domOperationHere(refjson);
  };
  xhr.send();
};

let domOperationHere = function (refjson) {
  console.log(refjson.main);
  let name = refjson.name;
  let maxtemp = refjson.main.temp_max;
  let parent = document.querySelector("#parent");
  let newElement = parent.children[0];
  newElement.style.display = "flex";
  newElement.innerHTML = name + " " + maxtemp + "&#8451;";

  parent.insertBefore(newElement, parent.firstChild);

  document.querySelector("#textId").value = " ";
};
