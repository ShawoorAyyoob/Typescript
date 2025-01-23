class book {
  author: string;
  title: string;
  year: number;

  constructor(a: string, t: string, y: number) {
    this.author = a;
    this.title = t;
    this.year = y;
  }

  dslBook(): void {
    console.log(
      `This book is published by ${this.author}, ${this.title},${this.year}`
    );
  }
}
const book2 = new book("Eichiro Oda", "One Piece", 1996);
book2.dslBook();
