let callAjaxUsingJquery = function () {
  let cityname = document.querySelector("#cityId").value || "pune";

  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=c6d88a1dbd900ac555737e5d1e7fa229&units=metric&q=" +
    cityname;
  $.ajax(url).done((data) => {
    // myDOMOperation(data);
    let temp = data.main.temp;
    $("#parent div:nth-child(1)")
      .clone(true)
      .html(data.name + " " + temp + " V5")
      .insertBefore($("#parent div:nth-child(1)"))
      .css("display", "flex");

    document.querySelector("#cityId").value = " ";
  });
};

let myDOMOperationv1 = (data) => {
  //const parent = document.querySelector("#parent");
  //const parent = $("#parent");

  let temp = data.main.temp;

  //parent.children[0];
  //$("#parent").children().first();
  //$("#parent div:nth-child(1)")
  //$("#parent :first-child")

  let newElement = $("#parent div:nth-child(1)").clone(true);
  newElement.html(data.name + " " + temp);
  newElement.insertBefore($("#parent div:nth-child(1)"));
  document.querySelector("#cityId").value = " ";
};

let myDOMOperationv4 = (data) => {
  let temp = data.main.temp;
  let newElement = $("#parent div:nth-child(1)")
    .clone(true)
    .html(data.name + " " + temp)
    .insertBefore($("#parent div:nth-child(1)"));
  document.querySelector("#cityId").value = " ";
};

let myDOMOperationv3 = (data) => {
  let temp = data.main.temp;
  let newElement = $("#parent div:nth-child(1)")
    .clone(true)
    .html(data.name + " " + temp);
  newElement.insertBefore($("#parent div:nth-child(1)"));
  document.querySelector("#cityId").value = " ";
};

let myDOMOperationv2 = (data) => {
  let temp = data.main.temp;
  let newElement = $("#parent div:nth-child(1)").clone(true);
  newElement.html(data.name + " " + temp);
  newElement.insertBefore($("#parent div:nth-child(1)"));
  document.querySelector("#cityId").value = " ";
};
