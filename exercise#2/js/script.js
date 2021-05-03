// ESERCIZIO #2
//Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var scelta = prompt("Pari o Dispari?");
var numeroScelto = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log("numero scelto da me ", numeroScelto);

//funzione per generare un numero random
var numeroCasuale = numeroCasuale()
console.log("numero casuale ",numeroCasuale);

// somma
var somma = (numeroScelto + numeroCasuale);
console.log("somma ",somma);

// funzione per identificare se la somma dei numeri è pari
var pari = sommaPari(somma);

// condizione di vincita
if ((scelta == "pari" && pari /* oppure pari == true */) || (scelta == "dispari" && !pari /* oppure pari == false */)) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}