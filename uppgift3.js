/* Uppgift 3: Lagrar en ålder och använder villkor för att avgöra vilken åldersgrupp personen tillhör.
Av Emma Hultén, 2026 */
"use strict";

const age = 65; 

if (age < 18) {
    console.log("Barn");
} else if (age >= 18 && age <= 64) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}