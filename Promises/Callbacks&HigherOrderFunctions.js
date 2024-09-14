const arr = [1, 2, 3, 4, 5];

//Higher order functions -> the function which takes other functions as arguments
//Callbacks the function which is passed as arguments to the higher order function
arr.map(function(ele){
    console.log(ele*ele);
})

function getSquare(arr,fn){
    let result = [];
    for(let i=0;i<arr.length;i++){
       result.push(fn(arr[i]));
    }
    return result;
}

let result = getSquare(arr,function(ele){
    return ele*ele;
});

console.log(result);



//callback hell
//inversion of control

//Is js sync
//Answer is partly yes as js supports sync behaviour for its native functions but for other functions provided by runtime //////environment the js nature is not predictable(it can be sync or asynchronous).


setTimeout(function test(){
    console.log('This callback has been executed');} 
, 10);

console.log('End');


//Feature by runtime environment
//event loop is feature by browser/runtime environment
//queue -> macro task queue

//event loop is used to infinitely check if there is any function running js callstack
//once callback async keep on completion they are added into the queue(macrotasks)
//so after js with its execution it will check macro task queue & will pull tasks into call stack to execute