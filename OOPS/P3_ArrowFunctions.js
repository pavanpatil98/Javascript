let obj = {
    x:10,
    y:20,
    fn:function(){
       console.log(this.x+" "+this.y);
    }
}

//obj is a callsite & hence fn this is obj referece (this.x == obj.x)
obj.fn(); //output 10 20

let obj1 = {
    x:10,
    y:20,
    z:{
        x:99,
        /*fn:function(){
            console.log(this.x+" "+this.y);
        }*/
        fn:function(){
            let arrow = ()=>{console.log(this.x+" "+this.y);}
            arrow();
        }
    }
}
//here call site is z & z scorp do not contain any y so that's why you cannot access y here
obj1.z.fn(); //output 99 undefined

//this has exception for arrow function this keywor will not refer call site in this case
//In case of arrow function this is resolved using lexical scope



let obj2 = {
    x:10,
    y:20,
    z:{
        x:99,
        /*fn:function(){
            console.log(this.x+" "+this.y);
        }*/
        fn:()=>{console.log(this.x+" "+this.y);}
    }
}
obj2.z.fn(); //undefined undefined values are printed
//Only functio or class  have lexical scoping & in normal function this is defined on call site
//block function & global scope