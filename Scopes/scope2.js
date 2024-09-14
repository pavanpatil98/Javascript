//Temporal dead zone
//In let block scope accessing variables before its declaration

function test(){
    console.log(y); // temporal dead zone
    let y = 10;
}