function printFib(n) {
    var first = 1;
    var second = 1;
    console.log(first);
    console.log(second);
    var sum = 0;
    for (var i = 1; i <= n - 2; i++) {
        sum = first + second;
        console.log(sum);
        first = second;
        second = sum;
    }
}
printFib(5);
