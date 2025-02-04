var book = /** @class */ (function () {
    function book(a, t, y) {
        this.author = a;
        this.title = t;
        this.year = y;
    }
    book.prototype.dslBook = function () {
        console.log("This book is published by ".concat(this.author, ", ").concat(this.title, ",").concat(this.year));
    };
    return book;
}());
var book2 = new book("Eichiro Oda", "One Piece", '1996');
book2.dslBook();
