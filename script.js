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

