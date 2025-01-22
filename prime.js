function isPrime(n) {
    var prime = true;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    if (prime == true) {
        console.log("".concat(n, " is a prime number"));
    }
    else {
        console.log("".concat(n, " is not a prime number"));
    }
}
isPrime(10);
