//Promise result is promise value

const pr = new Promise(function(res,rej){
    console.log('Inside promise handler');

    setTimeout(function(){
        let num = Math.floor(Math.random()*100);
        console.log('This is the number '+ num);
        
        if(num%2 === 0){
            res();
        }
        else{
            rej();
        }
    });
});

//pr will not get anything return till Promise executor is not completed

console.log(pr);