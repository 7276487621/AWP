let callAjaxUsingJquery = function () {
  let cityname = $("#cityId").val() || "pune";

  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=c6d88a1dbd900ac555737e5d1e7fa229&units=metric&q=" +
    cityname;
  $.ajax(url).done((data) => {
    $("#parent div:nth-child(1)")
      .clone(true)
      .html(data.name + " " + data.main.temp)
      .insertBefore($("#parent div:nth-child(1)"))
      .css("display", "flex");
    //Clean yhe box
    $("#cityId").val(" ");
  });
};

let hello = function () {
  console.log("Hello");
};

let world = function () {
  console.log("World");
};
