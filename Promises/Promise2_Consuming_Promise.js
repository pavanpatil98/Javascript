const pr  = new Promise(function(resolve, reject) {
    console.log('Inside 1st function');
    
    setTimeout(function() {
        console.log('The function pr execution was successful');
        resolve(100);
        
    },5000);
    
}).then(function(x){
    console.log('Promise has been fulfilled',x);
},function(){
    console.log('Promises has been rejected');
    
})


setTimeout(function() {
    console.log('Outsider done');
    resolve(100);
},2000);


const pr1  = new Promise(function(resolve, reject) {
    console.log('Inside 1st function');
    
    setTimeout(function() {
        console.log('The function pr1 execution was successful');
        resolve(100);
        
    },5000);
    
}).then(function(x){
    console.log('Promise pr1 has been fulfilled',x);
},function(){
    console.log('Promises has been rejected');
})

for(let i=0;i<100000000;i++){

}
console.log('Done with excuetion');
