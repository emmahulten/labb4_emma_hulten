/* Uppgift 7: Räknar ut summan av alla tal i en array och returnerar resultatet.
Av Emma Hultén, 2026 */
"use strict";

const numbers = [2, 3, 6, 7, 11, 13];

function calculateSum(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum; 
}

console.log(`Summan är ${calculateSum(numbers)}`);