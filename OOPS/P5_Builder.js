class Product{
    name;
    price;
    color;
    category;
    rating;
    
    // Builder pattern
    constructor(builder) {
        this.name = builder.name;
        this.price = builder.price;
        this.color = builder.color;
        this.category = builder.category;
        this.rating = 0;
    }
}

const P = new Product({
    name: 'Apple',
    price: 10,
    color: 'Red',
    category: 'Fruit',
    rating: 5
});

console.log(P); 