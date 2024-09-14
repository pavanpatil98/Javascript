class Product{
    name;

    constructor(name) {
        this.name = name;
    }
    display(){
        console.log("This is a Pavan");
        
    }
}

let obj = new Product("Pavan");

console.log(obj);
console.log(Product.prototype);



/*
 So this happens
 when we do obj = new Product();
 So first JS Provides
 Object linked to its container (Object -> Prototype Container)
 Then Product function linked to its container (Product -> Product Prototype Container linked  to Object prototype container)
 Then let obj = new Product("Pavan"); here obj creates empty object this & linked to Product prototype)
 */