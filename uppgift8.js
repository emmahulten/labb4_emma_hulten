/* Uppgift 8: Skapar ett bokobjekt och skriver ut information om boken.
Av Emma Hultén, 2026 */
"use strict";

const book = {
    title: "Cat's crazy dreams",
    author: "The Cat",
    published: 2026,
    genre: "Fiction",
};

function bookInfo(book) {
    console.log(`Titel: ${book.title}`);
    console.log(`Författare: ${book.author}`);
    console.log(`Utgivningsår: ${book.published}`);
    console.log(`Genre: ${book.genre}`);
}

bookInfo(book);