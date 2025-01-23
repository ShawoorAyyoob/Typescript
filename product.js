var Product = /** @class */ (function () {
    function Product(n, p, q) {
        this.name = n;
        this.price = p;
        this.quantity = q;
    }
    Product.prototype.calculateTotalValue = function () {
        console.log("Total price is ".concat(this.price * this.quantity));
    };
    Product.prototype.applyDiscount = function (discountPercentage) {
        console.log("Initial price ".concat(this.price, " "));
        var discount = this.price * discountPercentage / 100;
        this.price = this.price - discount;
        console.log("Discounted price ".concat(this.price, " "));
    };
    Product.prototype.restock = function (newQuantity) {
        console.log("Initial Stock ".concat(this.quantity));
        this.quantity = this.quantity + newQuantity;
        console.log("Updated Stock ".concat(this.quantity));
    };
    return Product;
}());
var product1 = new Product("Oud", 100, 10);
var product2 = new Product("Bakhoor", 50, 20);
var product3 = new Product("Rasasi", 250, 30);
product1.calculateTotalValue();
product2.applyDiscount(10);
product3.restock(10);
