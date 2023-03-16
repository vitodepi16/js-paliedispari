
// ESERCIZIO 2
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


const parola = document.getElementById('checkWorld');
const result = document.querySelector('result');


const btn = document.getElementById('btnSend');

btn.addEventListener('click', function(){

let parolaSemplificata = parola.value.toLowerCase();
console.log(parolaSemplificata);
const parolaInvertita = parolaSemplificata.split("").reverse().join("");
console.log(parolaInvertita);
const result = document.getElementById('result');
if (parolaSemplificata === parolaInvertita){
    
    result.innerHTML = `    <h1 class="text-success">Congratulazioni la tua parola è palidroma</h1>
    `;
   
} else {
 
    result.innerHTML = `    <h1 class="text-danger">Mi dispiace la tua parola non è palidroma</h1>
    `;
}

})
