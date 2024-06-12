 // PARI E DISPARI!!

//  Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L’utente sceglie pari o dispari 
let sceltaUtente= prompt("Scegli 'pari' o 'dispari':").toLowerCase();
    console.log("La scelta utente è:", sceltaUtente);
// L'utente inserisce un numero da 1 a 5.
let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5:"));
    console.log("il numero scelto dall'utente da 1 a 5 è:", numeroUtente);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//  creazione variabile random pc
let numeroPC = numeroRandom();
// verifica
    console.log("il numero da 1 a 5 generato dal PC  è:",numeroPC);


// creazione variabile somma dei due numeri
let somma = sommaNumeri(numeroUtente, numeroPC);
// verifica 
    console.log("La somma generata tra utente e pc è:",somma);

// creazione variabile per controllare se la somma dei numeri da un numero  pari o dispari

let sommaParioDispari = pariOdispari(somma);
// verifica
 console.log("la caratteristica del numero è:",sommaParioDispari);

 // Dichiariamo il numero vincente e chi ha vinto
let numeroVincente = vincitore(sommaParioDispari, sceltaUtente);

// stampo in console il risultato della scommessa
console.log(numeroVincente);









