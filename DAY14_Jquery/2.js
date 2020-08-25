let callAjaxUsingJquery = function () {
  let cityname = document.querySelector("#cityId").value || "pune";

  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=c6d88a1dbd900ac555737e5d1e7fa229&units=metric&q=" +
    cityname;
  $.ajax(url).done((data) => {
    myDOMOperation(data);
  });
};

let myDOMOperation = (data) => {
  const parent = document.querySelector("#parent");

  let temp = data.main.temp;
  let tempmax = data.main.temp_max;
  let tempmin = data.main.temp_min;

  let newElement = parent.children[0].cloneNode(true);
  newElement.innerHTML = data.name + " " + temp;
  newElement.style.display = "flex";
  parent.insertBefore(newElement, parent.firstChild);
  document.querySelector("#cityId").value = " ";
};
