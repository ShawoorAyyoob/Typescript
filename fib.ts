function printFib(n:number) {
    
    let first : number = 1;
    let second : number = 1;
    console.log(first);
    console.log(second);
    
    let sum : number = 0;

    for (let i : number = 1; i <= n-2; i++) {
      sum = first + second;
      console.log(sum);
      first = second;
      second = sum;
    }
  }
  printFib(5);