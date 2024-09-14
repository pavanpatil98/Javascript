let obj ={
    name: "John",
    age: 25,
    city: "New York"
}

const {name, age} = obj;
console.log(name);
console.log(age);



const globalOrder = {location: "USA", orderId:13, ...obj};

console.log(globalOrder);


//alias

const {location:PrimaryLocation,orderId:newOrderId,age:Age} = globalOrder;
console.log(PrimaryLocation);



//Conventional Way to do things

let showRoom = {name: "Tata", location: "Dhule",cars:{sedan:100,hatchbacks:68,suv:34}};

/*let {cars} = showRoom;

let {sedan} = cars;*/

//console.log('Sedan cars count: ' + sedan);


//Better way

let {cars:{sedan}} = showRoom;
console.log('Sedan cars count: ' +sedan);






//More Tips
//Combine multiple objects together

const newObj = {...showRoom, ...obj}

//or clone
const newObj1 = {...newObj};

//add new key
const newObj3 = {...newObj,Location:"Delhi"};


//giving default values
const {name:p,Location = "Delhi"} = newObj;

//We saw ... as spread operator

//Now lets see ... as rest parameter


function sum(...numbers){
    let sum = 0;
    for(newEle of numbers){
        sum+=newEle;
    }
    return sum;
}

let aa = sum(1,3,4);
let bb = sum(1,4,5,9);

console.log(aa+"======"+bb+"======");

Designtime changes are there for both bw5 & bw6 Plugin.
For deprecated algo support (there is workaround) but using module property that case can be handled.