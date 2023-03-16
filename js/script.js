/* 1 GIOCO
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/




const numUser = document.getElementById('insertNmr');
const choiceUser = document.getElementById('choice');



const btnCalc = document.querySelector('button');

btnCalc.addEventListener('click', function() {
    let choiceUsers = choiceUser.value;
    let numUser2 = parseInt(numUser.value);

    let numBot = Math.floor(Math.random() * 5) + 1;
    let sum = numUser2 + numBot;
    let result = document.getElementById('result');

    if ((choiceUsers = "even") && (sum % 2 === 0)){
       
        result.innerHTML = `<h1>Hai vinto </h1>`

    } else if ((choiceUsers = "odd") && (sum % 2 === 1)){
        result.innerHTML = `<h1>Hai vinto</h1>`
    }
    
    else {
        result.innerHTML = `<h1>Hai perso</h1>`
    }
    console.log(sum);



})


