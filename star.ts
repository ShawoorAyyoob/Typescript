let str : string = '';
let star : string  = '*';
function starPattern(patternChar : string, numLines: number):void{
    for (let i : number = 1; i <= numLines; i++) {
    str = str + ' '+ patternChar;
    console.log(str);
}
}
starPattern('*', 5);