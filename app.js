//----------------TASK 01-------------------

let arr1 = [2,4,6,8,10];
console.log(arr1);

function arrayReverse(){
    console.log(arr1.reverse());
}
arrayReverse();

//------------------TASK 02 ---------------------
let arr2 = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5];
console.log(arr2);

function isNegative(arr2){
   return arr2 < 0
}

let filter = arr2.filter(isNegative)
console.log(filter);

//----------------------   TASK 03 -----------------------


let value = prompt("Enter a word");
let count = 0;

function vowelWords(value) {
  for (i = 0; i < value.length; i++) {
    let char = value[i];
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
      count++;
    }
  }
  console.log(`number of vowels: ${count}`);
}
vowelWords(value);

// ----------------------  TASK 05 -----------------------

function isInRange(){
let userInput1 = +prompt("Enter two numbers")
let userInput2 = +prompt("Enter two numbers")

if((userInput1 >=50 && userInput1 <= 90) || (userInput2 >=50 && userInput2 <= 90)){
   console.log(`True`);
}
else{
  console.log(`Please enter a number in our range`);
}
}

isInRange();

//-----------------------  TASK 07 ------------------------------
function createUpdatedString(originalString) {
   
   if (originalString.length < 3) {
       alert("The string length must be 3 or more.");
   }
   
   const lastThreeChars = originalString.slice(-3);
   
   const updatedString = lastThreeChars.repeat(4);
   
   return updatedString;
}

const originalString = "abcdefgh";
const result = createUpdatedString(originalString);
console.log(result); 

//--------------------- TASK 08 ---------------------------------

let userinput = +prompt("Enter an angle")
if(userinput < 90){
    console.log(`Its an acute angle`)
}
else if(userinput === 90){
    console.log(`Its right angle`)
}
else if(userinput < 180){
    console.log(`Its an obtuse angle`)
}
else if(userinput === 180){
    console.log(`Its straight angle`)
}
else{
   console.log(`its not an angle`)
}

// ------------------------ TASK 10--------------------------
let arr = ["apple", "mango", "banana", "orange", "grapes"]    
for( i=0; i<arr.length; i++){
    console.log(`The index of ${i} is ${arr[i]}`)
}
