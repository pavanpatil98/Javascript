let pr = new Promise(function(resolve, reject) {
    let num = Math.floor(Math.random() *100);
    if(num%2==0){
        resolve(100);
    }
    else{
        reject(5);
    }
}).then(function(x){
    console.log("Even number generated: ", x);
},function(y){
    console.log('Odd number generated: ', y);
    
});