/* 1 GIOCO
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/



const numBot = Math.floor(Math.random() * 5) + 1;

const numUser = document.querySelector('choice');


console.log(numUser);
console.log(numBot)



const btnCalc = document.querySelector('button');

btnCalc.addEventListener('click', function() {
    


})


