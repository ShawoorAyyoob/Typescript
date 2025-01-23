let numbers:number[] = [3,4,5,6];
let stgNum:string[] = numbers.map(n => n.toString());

let str:string = '';
let allNum:string = stgNum.reduce((str,n:string) => str +'' + n);
console.log(allNum);