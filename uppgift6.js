/* Uppgift 6: Skapar en funktion som räknar ut arean av en rektangel.
Anropar sedan funktionen med olika värden.
Av Emma Hultén, 2026 */
"use strict";

// Beräknar rektangelns area och returnerar resultatet. 
function calculateArea(height, width) {
    return height * width;
}

// Anropar funktionen med olika värden och skriver ut resultatet
console.log(`Arean är ${calculateArea(4, 5)}`);
console.log(`Arean är ${calculateArea(6, 7)}`);
console.log(`Arean är ${calculateArea(20, 5)}`);
console.log(`Arean är ${calculateArea(25, 10)}`);