var numbers = [3, 4, 5, 6];
var stgNum = numbers.map(function (n) { return n.toString(); });
var str = '';
var allNum = stgNum.reduce(function (str, n) { return str + '' + n; });
console.log(allNum);
