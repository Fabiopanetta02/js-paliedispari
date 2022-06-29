/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


















/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//1-Numero Utente
const numberPlayer = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numberPlayer);


//2-Numero Random CPU
let randomComputer = '';

function cpuRandomize () {
    randomComputer = Math.floor(Math.random() * 5) + 1;
    console.log(randomComputer);
    
    return randomComputer;
}

cpuRandomize();


//3-Sommiamo i due numeri
const sum = numberPlayer + randomComputer;
console.log(sum)


//4-Stabiliamo se la somma dei due numeri è pari o dispari
function checkSum (){
    if(sum % 2 === 0){
        console.log('La somma è pari');
    }
    else if(sum % 3 === 0){
        console.log('La somma è dispari');
    }

    return sum
}

checkSum();

//5-Stabilire il vincitore
if(numberPlayer > randomComputer){
    console.log('Ha vinto il Player');
}
else if(numberPlayer < randomComputer ){
    console.log('Ha vinto il Computer');
}