const insertedWord = document.getElementById("insertedWord").value;

let reversedWord = insertedWord.split('').reverse().join('');

let output = document.getElementById("output");

const button = document.querySelector("button");


button.addEventListener("click", function(){
  palindromeWord(insertedWord);
})


/**
 * 
 * @param {string} 
 * @returns 
 */
function palindromeWord(stringa) {
  if (stringa === reversedWord) {
    output.innerHTML = "la parola è palindroma";
  } else output.innerHTML = "la parola non è palindroma";

}



// **Pari e Dispari**

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// - chiedo all'utente con un prompt se sceglie pari o dispari in una variabile che prenda anche il numero dall'utente;
// - creo una funzione per generare un numero random;
// - creo un'altra funzione per stabilire se la somma dei due numeri è pari o dispari;
// - stampo il risultato 

let sceltaGiocatore;

do {
  sceltaGiocatore = parseInt(prompt("Scegli pari o dispari e inserisci un numero da 1 a 5"));
  
  if (isNaN(sceltaGiocatore) || sceltaGiocatore > 5 || sceltaGiocatore < 1) {
    alert("Inserisci una scelta valida");
  }
} while (isNaN(sceltaGiocatore) || sceltaGiocatore > 5 || sceltaGiocatore < 1);



console.log(sceltaGiocatore);

sceltaPc = randomNumber();
console.log(sceltaPc)


console.log(sum(sceltaGiocatore, sceltaPc))



// stabilire se la somma dei due numeri è pari o dispari
/**
 * 
 * @param {number} 
 * @returns 
 */
function sum(num1, num2){
  const somma = num1 + num2
  if ((num1 + num2) % 2 === 0) {
    return "la somma è dispari";
  } else {
    return "la somma è pari";
  }
}

// generare un numero random per il PC
/**
 * 
 * @param {number} 
 * @returns 
 */
function randomNumber() {
  let num = Math.floor(Math.random() * 5) + 1;
  console.log(num);
}
