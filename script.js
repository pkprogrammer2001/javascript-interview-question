//question first check the array is array or
// wese js ma array ek object hi hai typeof sy check kro to array ki type bi object ati hai isliya real array k pta krna k liya yeh tareeka use hota ha
//first way using Array.isArray
function checkArray(input){
  console.log(Array.isArray(input))
}
checkArray([1,3,4,4,5])
//       OR
// function checkArray(input){
//   return input
// }
// let newReturn = checkArray([1,3,4,4,5])
// console.log(Array.isArray(newReturn))
//second way using instanceof Array 
function checkArray1(input){
  return input instanceof Array;
}
console.log(checkArray1([1,3,4,5,5]));//idr value true gai qk [] yeh instanceof Array hai is ma jo value hogi woh array hogi 
console.log(checkArray1({name:"asad"}));// yeh object hai isliya false return
console.log(checkArray1("sheryians"));//yeh string hai isliya false return
console.log(checkArray1([1,3,4,5,"harsh","Asad"])); 

function checkArray2(n,ind=1){
  var cloned =[];
  for(var i=0; i<ind; i++){
    cloned.push(n[i]);
  }
  return cloned;
}
console.log(checkArray2([1,3,4,4,5],3));
console.log(checkArray2([20393,450,3,4,4,5],4));
console.log(checkArray2([8,3,4,4,5]));
console.log(checkArray2(["bro",3,4,4,5],2));
console.log(checkArray2(["fun",3,4,4,5]));

//question join array 

function joinArray(inp){
  console.log(inp.join(" "))
}
joinArray(["bro","how","are","you","?"])

//different ways to create an object

let obj1 = { // 1stobject literal
  name:"asad",
  uni:"virtual university"
}
let obj2= Object.create(null); // 2nd make object by using object creat emethod

function obj3(){ //3rd make object using contructor function
  this.name= "asad"
}
let newobj3= new obj3();

class obj4 { //4th make object using class 
  constructor(){};
  a=12;
}
let newobj4= new obj4;

