 // PARI E DISPARI!!

//  Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L’utente sceglie pari o dispari 
let sceltaUtente= prompt("Scegli 'pari' o 'dispari':");
    console.log("La scelta utente è:", sceltaUtente);
// L'utente inserisce un numero da 1 a 5.
let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5:"));
    console.log("il numero scelto dall'utente da 1 a 5 è:", numeroUtente);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//  creazione variabile random pc
let numeroPC = generaNumerorandom();
// verifica



// creazione variabile somma dei due numeri
let somma = sommaNumeri(numeroUtente, numeroPC);
// verifica








