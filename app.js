//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere.
let km = prompt("Inserisci i km totali del viaggio")
//L’età del passeggero.
let age = prompt("Inserisci l'età")

// PREZZO DEL BIGLIETTO a 0.21 € / km
const prezzokm = 0.21 //number

//PREZZO VIAGGIO IN BASE AI KM

let prezzo = km * prezzokm //number
if (age < 18) {
    prezzo = prezzo * 0.8 //SCONTO 20% PER MINORENNI
} else if(age >= 65) {
    prezzo = prezzo * 0.6 //SCONTO 40% PER I 65+ d'età
}
console.log("Il prezzo del viaggio è " + Number.parseFloat(prezzo).toFixed(2) + "€")
