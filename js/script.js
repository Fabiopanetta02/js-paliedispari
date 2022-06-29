// ! ESERCIZIO N1//
/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//1-Chiedo all'utente di inserire una parola
const wordUser = prompt('Inserisci una parola', 'anna');
console.log(wordUser);

//2-Creo una funziona nella quale prendo la parola scritta dall'utente e la capovolgo
function reverseWord(){
    let result = '';

    for(let i = wordUser.length - 1; i >= 0; i--){
        result += wordUser[i];
    }

    return result;
}

const reversedWord = reverseWord();
console.log(reversedWord);


//3-Confronto se la parola dell'utente è uguale al quella capovolta
if(wordUser === reversedWord){
    console.log('La parola è Palindroma')
}
else{
    console.log('La parola non è Palindroma')
}




// ! ESERCIZIO N2//
/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//1-Pari o Dispari
const choicePlayer = prompt('Pari o Dispari?', 'Pari');
console.log('Pari o Dispari:', choicePlayer);

//2-Numero Utente
const numberPlayer = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Numero Player:', numberPlayer);


//2-Numero Random CPU
function cpuRandomized () {
    let randomComputer = '';

    randomComputer = Math.floor(Math.random() * 5) + 1;
    
    return randomComputer;
}

const cpuRandomize = cpuRandomized();
console.log('Numero Computer:', cpuRandomize);


//3-Sommiamo i due numeri
const sum = numberPlayer + cpuRandomize;
console.log('Somma', sum);


//4-Stabiliamo se la somma dei due numeri è pari o dispari
function checkSum (){
    if(sum % 2 === 0){
        console.log('La somma è:', 'Pari');
    }
    else{
        console.log('La somma è:', 'Dispari');
    }

    return sum
}

const resultCheckSum = checkSum();

//5-Stabilire il vincitore
let fleg = false
if(choicePlayer == resultCheckSum){
    fleg = true;
}

if(fleg == true){
    console.log('Ha vinto il Player')
}
else{
    console.log('Ha vinto il Computer')
}

