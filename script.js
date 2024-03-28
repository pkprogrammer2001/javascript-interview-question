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

// what is higher order function?
// jo function jis ma return ho function yn as a argument pass ho function usko higher order funtion kehta hain.
function highfnc(){
  return function(){
    console.log ("bro")
  }
}
let returnfunc = highfnc()
returnfunc();

function highfnc1(val){
  val()
}
highfnc1(()=>{
  console.log("higher order function")
})

let thisobj= {
  bro:"hello",
  name:"someone"
}

function thisfunc (){
  console.log(this);
}
let newbind= thisfunc.bind(thisobj)
newbind()

//sum of all array element
let sum = [1,4,5,6,6,7]
var newsum =0
sum.forEach(val => {
  newsum= newsum+val;
});
// sum of array element with avioding string.
let sum1 = [1,4,5,6,"100","20",6,7,20]
var newsum1 =0
sum1.forEach(val => {
  if (typeof val === "number"){
    newsum1= newsum1+val;
  }
});

for(var v=0;v<10;v++){
  console.log(v)
}

//what is map
//map k bi structure forEach ki trhan hota hai mgr is ma value return ki jati hai or new variable ma save kr skta hain
let mapArray = ["asad1","bro","g-wagon", "rolls","mercedes","chainSmoker"]
let returnMapArray = mapArray.map(function(val) {
  if(val.length===5){
    return `<p>${val}</p>`
  }else{
    return `<span>${val}</span>`
  }
})

let arrayOfObject =[
  {name:"asad", age:22},
  {name:"bro", age:23},
  {name:"chainsmoker", age:13},
  {name:"the weeknd", age:33}
]
let returnObject = arrayOfObject.map(function(val){
  return {name:val.name,age:val.age}
})

//what is filter
//filter bi exact structure map ki trhan hota hai bss is ma return hoga woh boolean hoga yn form of boolean ....(true yn false) yn issi koi statement jo true false ma convert hojai...

let filterArray = [1,3,5,6,7,3,5,78,84,2,4];

let returnfilterArray = filterArray.filter(function(val){
  if(val>4){
    return val
  }
})
console.log(returnfilterArray);

let stringfilter =["ab","300",30,34,5,6 ,"string","asad",40];

let returnStringFilter = stringfilter.filter(function(val){
  if(typeof val =="string") return true;
})

//check the array element if they have "a" element in value then don't print that value
let checkElement =["asad1","bro","g-wagon", "rolls royce","mercedes","chainSmoker"]
let newCheckElement = checkElement.filter(function (val) {
  return !val.includes("a");
})
console.log(newCheckElement)

// remove that string which have double "a" or more than 2 a in array element;
let checkElement1 =["asad1","bro","g-wagon", "rolls royce","mercedes","abdullah","fatima","chainSmoker"]
let newCheckElement1 = checkElement1.filter(function (val) {
  if (val.split("a").length<=2) return true;
})
console.log(newCheckElement1)


//what is slice? slice jo array k kisi part ko nikl kr uski copy bana kr deta hai 
//slice is immutable 
let sliceArray = [1,2,4,5,67,7,8,9];
console.log(sliceArray.slice(1,5));

//what is splice? jo real array ma sy kuch hisa hata krdeta hai 
//splice is mutable q k yeh real array ko change krdeta hai 
let spliceArray = [1,3,3,45,67,8,8,8754,4];
let newsplice = spliceArray.splice(3,3);
console.log(newsplice);

//mutable and immutable
// aisa koi bhi operation jis sy array ki value change hojai ussy mutable and jissy array ki value same raha ussy kehta hai immutable
