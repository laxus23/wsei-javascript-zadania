/*Zadanie 1
Wypisuj w konsoli co 3 sekundy napis "Cześć po raz " oraz liczbę powtórzeń. Jeśli Licznik dojdzie do 15 zatrzymaj go.*/

let counter = 1;
let interval = setInterval(function () {
    console.log("Cześć po raz " + counter++);
    if (counter > 15) {
        clearInterval(interval);
    }
}, 3000);

/*Zadanie 2
Po 2 sekundach od uruchomienia programu wyświetl w konsoli wszystkie elementy dowolnej tablicy.
    Następnie wyświetl w konsoli co 3 sekundy kolejny element tej tablicy.*/

let namesAndNumbers = [1, 2, 3, 'tiger', 'lion', 'cat']
setTimeout(function () {
    console.log(namesAndNumbers);
    let counterOfElements = 0;
    let timer = setInterval(function () {
        if (counterOfElements < namesAndNumbers.length) {
            console.log(namesAndNumbers[counterOfElements]);
            counterOfElements++;
        } else {
            clearInterval(timer);
        }
    }, 3000);
}, 2000);

