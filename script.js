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