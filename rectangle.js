var rectangle = /** @class */ (function () {
    function rectangle(l, b) {
        this.length = l;
        this.breadth = b;
    }
    rectangle.prototype.areaRect = function () {
        console.log("Area of Rectangle is ".concat(this.length * this.breadth));
    };
    rectangle.prototype.periRect = function () {
        console.log("Perimeter of Rectangle is ".concat(2 * (this.length + this.breadth)));
    };
    return rectangle;
}());
var rect2 = new rectangle(12, 10);
var rect3 = new rectangle(12, 12);
rect2.areaRect();
rect3.periRect();
