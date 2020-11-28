const numbers = [1, 3, 5, 6, 5];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element  * element;
    output.push(result);
    
}

// function square (element){
// return element * element;
// }
// const square = element => element *element
// const square = x => x * x;
// const result = numbers.map (x => x * x );
// console.log(result);
// const result = numbers.filter(x => x > 5);
console.log(output);