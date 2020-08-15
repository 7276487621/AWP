let hello = function (fu) {
  fu();
};

//use case-1
//trying to call the function without any argument.
// Error,because function accept function as parameter.
hello();

//use case-2
//YES,with number as parameter.
// Error,because function accept function as parameter.
hello(1);

//use case-3
//Yes,string as a parameter.
// Error,because function accept function as parameter.

hello("CDAC");

//use case-4

hello(function () {});
hello(() => {});

let arfn = function () {};
hello(arfn);

let arfn = () => {};
hello(arfn);
