//Working with object::JSON
//Javascript object notation::Son of Javascript
//we create an object using JSON{} or we can use  new Keyword

//JSON -Rule-1, It starts and ends with curly braces;
let person = {};

//Rule -2,
//It consist of set of properties
//properties are declared in KEY VALUE PAIR.
//Syntax for the KEY VALUE PAIR (KEY:VALUE)
//we can keep key in
//---single quote
//---double quote
//---qutoes are optional also
//KEY IS ALWAYS STRING
let person = {
  name: "Sachin",
};

let person = {
  "first-name": "Sachin",
};

let person = {
  firstname: "Sachin",
};

let person = {
  id: 100,
};

let person = {
  List: [1, 2, 3, 4],
};

//Rule -3
//Object consist of set of properties
//We can declare Zero,one,more
//Properties are separated by comma.
let person = {
  id: 10,
  firstname: "Sachhin",
  lastname: "Gardi",
};

//Rule -4
//How to Access properties of an object
//using the(.) Dot operator
//using the Bracket operator

person.id;
//or
person["id"];

let person = {
  id: 10,
  firstname: "Sachhin",
  lastname: "Gardi",
};

let person = {
  id: 10,
  "first-name": "Sachhin",
  lastname: "Gardi",
};

//Array of Object

let list = [1, 2, 3];
let list = ["a", "b", "c"];
let list = [
  {
    id: 10,
    firstname: "Sachin",
  },
  {
    id: 11,
    firstname: "Snehal",
  },
  {
    id: 12,
    firstname: "Yaminee",
  },
];

//Array of object
let person = { id: 1, firstname: "Sachin" };
let list = [person];
