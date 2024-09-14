//Promises use solve proble of callbacks isssue ioc (Inversion of Control)


/*
Promise can have 3 states
1. Pending: Initial state, neither fulfilled nor rejected.
2. Fulfilled: Promise's result has been successfully resolved.
3. Rejected: Promise's result has failed.

Promises can changes state only one time like pending to fulfill or pending to rejected
*/

const pr = new Promise(function(res,rej){
    let num = Math.floor(Math.random()*100);

    if(num%2 === 0){
        res();
    }
    else{
        rej();
    }
});

console.log(pr);
