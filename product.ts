class Product {
  name: string;
  price: number;
  quantity: number;

  constructor(n: string, p: number, q: number) {
    this.name = n;
    this.price = p;
    this.quantity = q;
  }

  calculateTotalValue(): void {
    console.log(`Total price is ${this.price * this.quantity}`);
  }
  applyDiscount(discountPercentage): void {
    console.log(`Initial price ${this.price} `);
    const discount = (this.price * discountPercentage) / 100;
    this.price = this.price - discount;
    console.log(`Discounted price ${this.price} `);
  }
  restock(newQuantity): void {
    console.log(`Initial Stock ${this.quantity}`);
    this.quantity = this.quantity + newQuantity;
    console.log(`Updated Stock ${this.quantity}`);
  }
}
const product1 = new Product("Oud", 100, 10);
const product2 = new Product("Bakhoor", 50, 20);
const product3 = new Product("Rasasi", 250, 30);

product1.calculateTotalValue();
product2.applyDiscount(10);
product3.restock(10);
