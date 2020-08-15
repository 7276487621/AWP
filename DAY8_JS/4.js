/**Array Fundamental */

//How to declare an Array;
//Case - 1
//1.Empty Array.
//2.Size is not required.
//3.Size is Dynamic here.
let arr = [];

/**Ideally we should keep similar datatype in array  */

let arr1 = [1, 2, 3, 4, 5];
let arr1 = ["A", "B", "C", "D"];
let arr1 = [1.1, 3.14, 6.29, 4.28];

//Case -2
//1.Data type must be same for all data in c,c++ and java.
//In javascript there is no Data-type Mixing the data type is possible.

let arr = [1, 3.14, "sachin", true]; //it is possible in javascript

//Case -3
//We can also add Anonymous or Arrow function inside the array.
//This is possible in javascript Array.

let arr2 = [1, 3.14, "sachin", true, () => {}, 12, function () {}];

//Case -4
//How to access any element in Array?
//Using index value.
//Index start with 0.

let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"];
//lets Access first element
let firstItem = arr[0]; //Tejas

let anyItem = arr[3]; //Umesh

//Case -5
//How to iterate or print all the value of Array?
//arr.lenth::size of the array.
//length is property of an Array.

let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"];
for (let i = 0; i < 5; i++) {
  const Item = arr[i];
  console.log(Item); //Print or use it for logic purpose.
}

//Case -6
//Can we update an Array?
//---Can we add new value?
//---Can we remove value?
//---Can we replace value?

let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"];
//Add a new value to end of the array.
arr.push("Sanam");

//Remove value from end of the array.

arr.pop("");

//can we update an element at certain index?
arr[0] = "Sonali";
//Case -7
//can we add an element at particular index?
//splice - it takes three parameters
//splice -this can be used to add an element at certain index without replacing.
//splice -this can also be used to remove/delete an element from certain index.
let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"]; //before
arr.splice(2, 0, "Sanam");
let arr = ["Tejas", "Sachin", "Sanam", "Omkar", "Umesh", "Yaminee"]; //after

//Delete at index 4,second parameter is delete count.
arr.splice(4, 2);

//More Demo

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i++) {
  const Item = arr[i];
  console.log(Item); //Print or use it for logic purpose.
}
