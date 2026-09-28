/* Uppgift 5: Skapar en array med maträtter, skriver ut innehållet, 
ändrar arrayen och skriver sedan ut det uppdaterade innehållet. 
Av Emma Hultén, 2026 */
"use strict";

const dishes = ["Tacos", "Sushi", "Pasta", "Curry", "PadThai", "BBQ"];

// Skriver ut hela arrayen
console.log("Maträtter:");
dishes.forEach(dish => {
    console.log(dish);
});

// Skriver ut första och sista maträtten
console.log(`\nFörsta maträtten: ${dishes[0]} `);
console.log(`Sista maträtten: ${dishes[dishes.length - 1]}\n`);


// Lägger till en maträtt sist och tar bort den första
dishes.push("Pizza");
dishes.shift();

// Skriver ut arrayen efter ändringarna
console.log("Maträtter efter ändringar:");
dishes.forEach(dish => {
    console.log(dish);
});