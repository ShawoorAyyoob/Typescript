let sales: number[] = [];

sales.push(1000, 2000, 3000);
sales.unshift(500);

let lastSales: number | undefined = sales.pop();
console.log(`Last element =>` + lastSales);

let totalSales: number = 0;

for (let i: number = 0; i < sales.length; i++) {
  totalSales = totalSales + sales[i];
  console.log(totalSales);
}

console.log(sales);
console.log();
console.log(`Total sales = ${totalSales}`);
