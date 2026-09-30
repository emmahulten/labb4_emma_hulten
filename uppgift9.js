/* Uppgift 9: Går igenom en array med personobjekt och skriver ut
information samt om varje person är myndig.
Av Emma Hultén, 2026 */
"use strict";

const siblings = [
    {
        name: "Emma",
        age: 30,
        city: "Sundsvall"
    },
    {
        name: "Simon",
        age: 28,
        city: "Göteborg"
    },
    {
        name: "Norton",
        age: 16,
        city: "Sundsvall"
    }
];

for (let i = 0; i < siblings.length; i++) {
    siblingInfo(siblings[i]);
}

function siblingInfo(sibling) {
    let ofAge = "";

    if (sibling.age >= 18) {
        ofAge = "myndig";
    } else {
        ofAge = "inte myndig";
    }

    console.log(`${sibling.name} bor i ${sibling.city} och är ${ofAge}.`);
}