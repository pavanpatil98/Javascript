//named function expression

const myfun = function printData(x){
    console.log(x);
}



//Anon function expression

const myAnonFun = function(y){
    console.log(y);
}


myAnonFun(300);
myAnonFun(400);


const myArray = [1,2,3,4,5,6,7,8,9];

myArray.map(function(element){
    console.log(element);
})
const a= myArray.map(function(element){
    return element*2;
});

console.log(a);

//Usecases
const arr = [1,1,1,1];
function myCustomMap(ele,fn){
    let result = [];
    for(let i=0;i<ele.length;i++){
        result.push(fn(ele[i]));
    }
    return result;
}

let result = myCustomMap(arr,function(ele){
    return ele*10;
});

console.log(result);

//When we need named function expressions
const arr1 = [1,2,3,4,5];
const res = arr1.map(function factorial(x){
    if(x==1)return 1;
    return x* factorial(x-1);
});
console.log(res);

//How to use recursion on anonymous functions calls we use arguments.callee instead but deprecated

//One more cool way to do it
const square = function(x){return x*x;}
const squareArray = [2,4,6,8,10];
const ans = squareArray.map(square);
console.log(ans);


//Arrow Functions   or Fat Array Functions
//this keyword is resolved lexically in arrow functions

//iife
//The function which is excecuted as soon as it is define
(function testFunction(){
    console.log('I am a IIFE');
})();

(function testFunction(x){
    console.log(`I am a IIFE with x value: ${x}`);
})(20);


//Functions expressions are presetn in scope of variable in which they are defined (x= function c(){} so it will be in x scope & not in global scope)



//iife is though single time executed function
var output = (function factorial(x){
    if(x==1)return 1;
    return x*factorial(x-1);
})(5);

console.log(output);