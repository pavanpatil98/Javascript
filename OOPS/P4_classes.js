class Test{
    #id;
    #name;
    
    static x = 10;
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    setId(id){
        this.id = id;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

}

let testObj = new Test(1,"Pavan");
let id = testObj.getId();
let name = testObj.getName();

testObj.id = 10;

console.log('id is '+id+' and name is '+name+ " "+Test.x);


