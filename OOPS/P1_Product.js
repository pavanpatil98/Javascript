class Product{
    name; 
    price;
    color;
    category;
    rating;

    constructor(name,price,color,category,rating){
        this.name = name;
        this.price = price;
        this.color = color;
        this.category = category;
        this.rating = 0;
    }

   showPrice(){
    console.log("The product has some price");
   }
   
   showRating(){
    console.log("The product has a rating of " + this.rating);
   }

   showColor(){
    console.log("The product has a color of " + this.color);
   }
}

let obj = new Product();
obj.showPrice();