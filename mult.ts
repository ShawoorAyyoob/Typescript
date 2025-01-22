function printTable(n:number) :void {
    for (let i:number = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n*i}`);
    }
}
printTable(8);