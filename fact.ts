function calcFact(n : number) :number {
    let fact: number = 1;
    for (let i: number = 2; i <= n; i++) {
        fact = fact * i;
    }
    return fact; 
}

let ans = calcFact(4); 
console.log(ans);