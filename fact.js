function calcFact(n) {
    var fact = 1;
    for (var i = 2; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
var ans = calcFact(4);
console.log(ans);
