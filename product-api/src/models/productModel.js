let product = [{
    id: 1,
    name: 'Apple',
    price: 1.5
},
{
    id: 2,
    name: 'Banana',
    price: 0.75
},
{
    id: 3,
    name: 'Orange',
    price: 1.2
},
{
    id: 4,
    name: 'Mango',
    price: 1.0
},
{
    id: 5,
    name: 'Pineapple',
    price: 1.75
}
]   

let id = 6;

class Product {
    constructor(name, price) {
        this.id = id++;
        this.name = name;
        this.price = price;
    }
}

module.exports = {product, Product}