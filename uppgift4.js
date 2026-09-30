/* Uppgift 4: Använder en for-loop och villkor för att skriva ut jämna tal från 1 till 20.
Av Emma Hultén, 2026 */
"use strict";

// Loopar från 1 till 20
for (let i = 1; i <= 20; i++) {

    // Kontrollerar om talet är jämnt och skriver sedan ut talet
    if (i % 2 === 0) {
        console.log(i);
    }
}