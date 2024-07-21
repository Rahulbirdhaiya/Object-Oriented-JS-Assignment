// Product constructor function
function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}

// Inventory constructor function
function Inventory() {
    this.products = [];
}

// Add a product to the inventory
Inventory.prototype.addProduct = function(product) {
    if (product instanceof Product) {
        this.products.push(product);
        console.log(`Added ${product.name} to the inventory.`);
    } else {
        console.log('Invalid product. Please add a valid Product object.');
    }
};

// Delete a product from the inventory by name
Inventory.prototype.deleteProduct = function(productName) {
    const index = this.products.findIndex(product => product.name === productName);
    if (index !== -1) {
        const deletedProduct = this.products.splice(index, 1)[0];
        console.log(`Deleted ${deletedProduct.name} from the inventory.`);
    } else {
        console.log(`Product with name ${productName} not found in the inventory.`);
    }
};

// Example usage
const inventory = new Inventory();

const product1 = new Product('Laptop', 'Electronics', 899, 10);
const product2 = new Product('Book', 'Books', 20, 50);

inventory.addProduct(product1); // Added Laptop to the inventory.
inventory.addProduct(product2); // Added Book to the inventory.

inventory.deleteProduct('Laptop'); // Deleted Laptop from the inventory.
