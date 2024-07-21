// ------------------------10---------
let arr = ["apple", "mango", "banana", "orange", "grapes"]
for( i=0; i<arr.length; i++){
    console.log(`The index of ${i} is ${arr[i]}`)
}


////------------------  01   ---------------------------------

let arr1 = [2,4,6,8,10];
console.log(arr1);

function arrayReverse(){
    console.log(arr1.reverse());
}
arrayReverse();

////-------------------- 03 --------------------


let str = prompt("enter word"); 
let count= 0;
function vowelsNumber(str) {

    for (const char of str) {
        if (char == "a" || char == "e" || char == "i" || char =="o" || char == "u") {
               count++;
            }  
    }
    console.log(`Numbers of vowels: ${count}`)
}
vowelsNumber(str);


//// ------------ 08---------

let userinput = +prompt("Enter an angle")
if(userinput < 90){
    alert(`Its an acute angle`)
}
else if(userinput === 90){
    alert(`Its right angle`)
}
else if(userinput < 180){
    alert(`Its an obtuse angle`)
}
else if(userinput === 180){
    alert(`Its straight angle`)
}

////---------------- 05 --------

let number = +prompt("enter number");

if(number >= 50 && number <= 90){
    alert("True")
}
else{
    alert("Please enter number in our range")
}

