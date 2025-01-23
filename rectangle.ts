class rectangle {
  length: number;
  breadth: number;

  constructor(l: number, b: number) {
    this.length = l;
    this.breadth = b;
  }

  areaRect(): void {
    console.log(`Area of Rectangle is ${this.length * this.breadth}`);
  }
  periRect(): void {
    console.log(
      `Perimeter of Rectangle is ${2 * (this.length + this.breadth)}`
    );
  }
}
const rect2 = new rectangle(12, 10);
const rect3 = new rectangle(12, 12);

rect2.areaRect();
rect3.periRect();
