class Product{
    name;
    price;
    color;
    category;
    rating;

    constructor(builder){
        this.name = builder.name;
        this.price = builder.price;
        this.color = builder.color;
        this.category = builder.category;
        this.rating = builder.rating;
    }
    
    static get Builder(){
        class ProductBuilder{
            constructor(){
                this.name = "";
                this.price = 0;
                this.color = "";
                this.category = "";
                this.rating = 0;
            }

            setName(name){
                this.name = name;
                return this;
            }
            setPrice(price){
                this.price = price;
                return this;
            }
            setColor(color){
                this.color = color;
                return this;
            }
            setCategory(category){
                this.category = category;
                return this;
            }
            setRating(rating){
                this.rating = rating;
                return this;
            }

            build(){
                return new Product(this);
            }
        }
        return ProductBuilder;
    }
}

const P = new Product.Builder().setCategory("test").setColor("red").setPrice(10).setName("test").build();

console.log(P); 