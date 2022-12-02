let num = 266219;
let num2 = num.toString().split('').reduce((a, b) => a * b, 1);
console.log(num2);
let num3 = num2 ** 3;
console.log(num3.toString().substr(0, 2));