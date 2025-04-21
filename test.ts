const checkForEven = (num:number):boolean =>{
    return num%2 === 0;
}

console.log(checkForEven(10)); // Output: true

let info = [1,"Vishal", true, 1.5];
let k: (number | string)[] = [1,"hey"];

const nameAge:[string,number] = ["Vishal", 25];

const dailyUsage:[string,number[]][] = [
    ["sunday",[1,2,3]],
    ["monday",[4,5,6]],
    ["tuesday",[7,8,9]],
]