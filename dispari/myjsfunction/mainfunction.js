// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Funzione per generare un numero random da 1 a 5



function generaNumerorandom() {
    return Math.floor(Math.random() * 5) + 1;
}


// somma dei due numeri utente + pc n1-n2
function sommaNumeri(num1, num2){
    return num1 + num2;
}

// controllo dei numeri se pari o dispari
    
function pariOdispari(numero){
    if (numero % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}


    
