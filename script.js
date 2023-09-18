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


let sceltaGiocatore = " ";

do {
  sceltaGiocatore = prompt("Scegli pari o dispari").toLowerCase();
} while (sceltaGiocatore !== "pari" && sceltaGiocatore !== "dispari");


let sceltaGiocatoreNumero = " ";

do {
   sceltaGiocatoreNumero = prompt("Scegli un numero da 1 a 5");
   if (isNaN(sceltaGiocatoreNumero) || sceltaGiocatoreNumero > 5 || sceltaGiocatoreNumero < 1) {
    alert("Inserisci una scelta valida");
  } } while (isNaN(sceltaGiocatoreNumero) || sceltaGiocatoreNumero > 5 || sceltaGiocatoreNumero < 1);


  console.log(sceltaGiocatoreNumero);

const sceltaPc = randomNumber();
   
  console.log(sceltaPc);

const result = evenOrOdd(sceltaGiocatoreNumero, sceltaPc);

  console.log(result);

if ((result && sceltaGiocatore === "pari") || (!result && sceltaGiocatore === "dispari")) {
    console.log("Hai vinto!");
  } else {
    console.log("Il computer ha vinto!");
  }

//*************/ functions**************



// genera un num random 

/**
 * @param {number} 
 * 
 */
function randomNumber() {
  let num =  Math.floor(Math.random() * 5) + 1;
  return num
}

// stabilisce se una somma di numeri è pari o dispari 


/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 */
function evenOrOdd(num1, num2) {
  const sum = num1 + num2;
  if (sum % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}




// let sceltaGiocatore;

// do {
//   sceltaGiocatoreNumero = parseInt(prompt("inserisci un numero da 1 a 5"));

  
//   if (isNaN(sceltaGiocatore) || sceltaGiocatore > 5 || sceltaGiocatore < 1) {
//     alert("Inserisci una scelta valida");
//   }
// } while (isNaN(sceltaGiocatore) || sceltaGiocatore > 5 || sceltaGiocatore < 1);


// console.log(sceltaGiocatore);

// // 3. definisco quindi la scelta del Pc usando la funzione creata (punto 2)

// sceltaPc = randomNumber();
// console.log(sceltaPc);

// // 5. uso la funzione per sommare i numeri inseriti

// console.log(sum(sceltaGiocatore, sceltaPc));

// // 6. stabilisco le condizioni di vincita o perdita ( 4 possibilità)

// const numeroGiocatorePari = (sceltaGiocatore % 2) === 0;
// const numeroGiocatoreDispari = (sceltaGiocatore % 2) !== 0;
// const numeroPcPari = (sceltaPc % 2) === 0;
// const numeroPcDispari = (sceltaPc % 2) !== 0;
// const sommaPari = sum(sceltaGiocatore, sceltaPc) % 2 === 0;
// const sommaDispari = sum(sceltaGiocatore, sceltaPc) % 2 !== 0;

// if ((numeroGiocatorePari && sommaPari) || (numeroGiocatoreDispari && sommaDispari)) {
//   console.log("Hai vinto tu");
// } else if ((numeroGiocatorePari && sommaDispari) || (numeroGiocatoreDispari && sommaPari)) {
//   console.log("vince il pc");
// } else if ((numeroPcPari && sommaPari) || (numeroPcDispari && sommaDispari)) {
//   console.log("vince il pc");
// } else if ((numeroPcPari && sommaDispari) || (numeroPcDispari && sommaPari)) {
//   console.log("vince il giocatore");
// }




// //2. genero un numero random 
// /**
//  * 
//  * @param {number} 
//  * @returns 
//  */
// function randomNumber() {
//   let num = Math.floor(Math.random() * 5) + 1;
//   return num;
// }



// //4. stabilire se una somma di due numeri è pari o dispari
// /**
//  * 
//  * @param {number} 
//  * @returns 
//  */
// function sum(num1, num2){
//   const somma = num1 + num2;
//   if (somma % 2 === 0) {
//     return "la somma è pari";
//   } else {
//     return "la somma è dispari";
//   }
// }