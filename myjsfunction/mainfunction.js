//  funzione per capire se la parola inserita è palindroma

function palindroma(parola){


    //  *      //  *      //  *     //  *   //FORMA COMPATTA // //  *      //  *     *   // //   
    let parolaInversa = parola.split('').reverse().join('');
    //  *      //  *      //  *     //  *   // // //  *      //  *      //  *     //  *   // // 

         // Controllare se la parola originale è uguale alla parola invertita utilizzando return per prenderne il vaolore del risultato finale
            return parola === parolaInversa;

}

// Verifichiamo se la parola inserita è palindroma con una condizione
if (palindroma(InputUtente)) {
    alert("La parola inserita è palindroma.");
  } else {
    alert("La parola inserita non è palindroma.");
  }

    // 1 Applichiamo il metodo split a parola per dividere la parola inserita dall utente in un array di singoli elementi contenenti ogni carattere singolo di cui e composta la parola
    
     // DIVIDIAMO la parola
    //  let arrayParolaDivisa = parola.split('');
    //     // verificare 
    //         console.log(arrayParolaDivisa);

    // // INVERTIAMO la parola
    //  // utilizzandro reverse Inverte l'ordine degli elementi nell'array della parola inserita
    // let ArrayParolaInversa = arrayParolaDivisa .reverse();
    //     // verificare
    //         console.log( ArrayParolaInversa);

    // // uniamo gli elementi dell'array dato dalla parola inserita dall utente ed la divisione e l inversione
    // //  uniamo tutti gli elementi dell'array in una singola stringa con split
    //     let parolaInversa = ArrayParolaInversa.Join('');
    //     // verificare
    //         console.log(parolaInversa);

   
