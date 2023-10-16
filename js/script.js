/*
MILESTONE 1 - CREAZIONE DI UNA LISTA DELLA SPESA
- Chiediamo (prompt) all'utente i prodotti da acquistare e mettiamoli da qualche parte (dove?)
- Continuiamo a chiedere prodotti fino a quando l'utente non inserisce "stop"
MILESTONE 2 - STAMPA DELLA LISTA DELLA SPESA
Data la lista della spesa creata in precedenza, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
Consigli:
- Cerchiamo di individuare il tipo di ciclo (for/while) più adatto alla situazione
- Per il ciclo while
	- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
	- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/

/*
prendo il value del prompt 
prendo ogni value e li stipo in una array
setto che appena il while riconosce stop la lista termina
appena la lista termina riporto il risultato 
*/

/*
let product = prompt('inserisci un prodotto da aggiungere in lista');
let check = false;
let i = 0;
let list = [i];

while(!check && i < list.length) {
    product = [i];
    if (list[i] === 'stop') {
        check = true;
    } else {
        product = prompt('inserisci un prodotto da aggiungere in lista');
    }
    list.push(product);
    i++
};

console.log(list);

const result = document.getElementById('result');

if (check) {
    result.innerHTML = `ecco la tua lista: ${list}`;
};
*/



//oppure (metodo marco)

/*
let list = [];
let item = '';
 

while(item != 'stop') {
    item = prompt('aggiungi alla lista');

    if(item!== 'stop' && item !== '') {
        list.push(item);
    }

    console.log(item);
}

const listEl = document.getElementById('list');
for(i = 0; i < list.lenght; i++) {
    const listItemEl = document.createElement('li');
    listItemEl.innerHTML = list[i];
    listEL.appendChild(listItemEl);
}
*/


// oppure (metodo stefano)

let list = [];
let loop = true;

while (loop) {
    const item = prompt('quale elemento vogliamo aggiungere alla lista?');
    if (item.toLocaleLowerCase().trim() === 'stop') {
        loop = false;
    }
    list.push(item);
    console.log(loop, list);
};

const listEl = document.getElementById('result');
listEl.innerHTML = `Ecco la tua lista della spesa ${list}`;


    









