/* Uppgift 2: Lagrar information om pris och antal produkter.
Beräknar totalpris med och utan moms samt skriver ut resultatet tydligt.
Av Emma Hultén, 2026 */
"use strict";

// Deklarera variabler för pris per produkt och antal produkter
const productPrice = 100;
const productAmount = 3;

// Beräknar totaltpris och totalpris med moms
const totalPrice = productPrice * productAmount;
const totalWithVat = totalPrice * 1.25;

// Skriver ut informationen
console.log(`Pris: ${productPrice} kr`);
console.log(`Antal: ${productAmount}`);
console.log(`Totalt: ${totalPrice} kr`);
console.log(`Totalt inklusive moms: ${totalWithVat} kr`);