function isPrime(n:number) :void{
    let prime :boolean = true; 

    for (let i:number = 2; i < n; i++){
        if (n % i == 0) {
            prime = false;  
            break;
        }
    }
    if (prime == true) {
        console.log(`${n} is a prime number`);
    }
    else {
        console.log(`${n} is not a prime number`);
    }
}

isPrime(10);