// Palidroma
// Chiedere all’utente di inserire una parolaù


let InputUtente = prompt("Inserisci una parola per verificare se è palindroma:");
// Creata una funzione per capire se la parola inserita è palindroma nel mainfunctio.js

// Verifichiamo se la parola inserita è palindroma con una condizione
if (palindroma(InputUtente)) {
    alert("La parola inserita è palindroma.");
  } else {
    alert("La parola inserita non è palindroma.");
  }