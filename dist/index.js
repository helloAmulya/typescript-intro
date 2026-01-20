function greet(person) {
    return `Hello ${person}, typescript welcomes you!`;
}
const username = "Amulya";
console.log(greet(username));
// const tak = prompt("Enter your name: ") || "Amulya"; you cannot do this is ts in console
// if error says :  Cannot find module 'node:readline/promises' or its corresponding type declarations.ts(2307) -> then do this : npm install --save-dev @types/node
function sayhi(person) {
    return `Hello ${person} sir!`;
}
//  1. using readline approach
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = createInterface({ input, output });
const tak = await rl.question('Enter name: ') || "Amulya";
rl.close(); // this line should always be after the 'question' / await, else error
console.log(sayhi(tak));
// 2. prompt-sync approach
import promptSync from "prompt-sync";
const prompt = promptSync();
const name = prompt("Enter your name: ") || "Ratna";
console.log(`Hello ${name}`);
//# sourceMappingURL=index.js.map