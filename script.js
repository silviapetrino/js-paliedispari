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


// 1- chiedo all'utente con un prompt se sceglie pari o dispari e che prenda anche il numero dall'utente; L’utente può scegliere tra pari o dispari e inserisce un numero da 1 a 5.

let sceltaGiocatore;

do {
  sceltaGiocatore = parseInt(prompt("Scegli pari o dispari e inserisci un numero da 1 a 5"));
  
  if (isNaN(sceltaGiocatore) || sceltaGiocatore > 5 || sceltaGiocatore < 1) {
    alert("Inserisci una scelta valida");
  }
} while (isNaN(sceltaGiocatore) || sceltaGiocatore > 5 || sceltaGiocatore < 1);


console.log(sceltaGiocatore);

// 3. definisco quindi la scelta del Pc usando la funzione creata (punto 2)

sceltaPc = randomNumber();
console.log(sceltaPc);

// 5. uso la funzione per sommare i numeri inseriti

console.log(sum(sceltaGiocatore, sceltaPc));

// 6. stabilisco le condizioni di vincita o perdita ( 4 possibilità)

const numeroGiocatorePari = (sceltaGiocatore % 2) === 0;
const numeroGiocatoreDispari = (sceltaGiocatore % 2) !== 0;
const numeroPcPari = (sceltaPc % 2) === 0;
const numeroPcDispari = (sceltaPc % 2) !== 0;
const sommaPari = sum(sceltaGiocatore, sceltaPc) % 2 === 0;
const sommaDispari = sum(sceltaGiocatore, sceltaPc) % 2 !== 0;

if ((numeroGiocatorePari && sommaPari) || (numeroGiocatoreDispari && sommaDispari)) {
  console.log("Hai vinto tu");
} else if ((numeroGiocatorePari && sommaDispari) || (numeroGiocatoreDispari && sommaPari)) {
  console.log("vince il pc");
} else if ((numeroPcPari && sommaPari) || (numeroPcDispari && sommaDispari)) {
  console.log("vince il pc");
} else if ((numeroPcPari && sommaDispari) || (numeroPcDispari && sommaPari)) {
  console.log("vince il giocatore");
}




//2. genero un numero random 
/**
 * 
 * @param {number} 
 * @returns 
 */
function randomNumber() {
  let num = Math.floor(Math.random() * 5) + 1;
  return num;
}



//4. stabilire se una somma di due numeri è pari o dispari
/**
 * 
 * @param {number} 
 * @returns 
 */
function sum(num1, num2){
  const somma = num1 + num2;
  if (somma % 2 === 0) {
    return "la somma è pari";
  } else {
    return "la somma è dispari";
  }
}