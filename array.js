var sales = [];
sales.push(1000, 2000, 3000);
sales.unshift(500);
var lastSales = sales.pop();
console.log("Last element =>" + lastSales);
var totalSales = 0;
for (var i = 0; i < sales.length; i++) {
    totalSales = totalSales + sales[i];
    console.log(totalSales);
}
console.log(sales);
console.log();
console.log("Total sales = ".concat(totalSales));
