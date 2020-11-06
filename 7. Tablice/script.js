/*Zadanie 1
Stwórz tablicę z dowolnymi elementami a następnie wypisz je w konsoli.*/

let exampleTable = [1, 2, 3];
console.log(exampleTable);

/*Zadanie 2
Stwórz tablicę z dowolnymi elementami a następnie w konsoli wypisz:

1. Pierwszy i drugi element
2. Ostatni element
3. Wszystkie elementy
4. Co drugi element
5. Wszystkie stringi
6. Wszystkie numbery*/

let exampleTableWithElements = [1, 2, 3, 'cat', 'lion', 'elephant'];

//Ad.1
for (let i = 0; i < 2; i++) {
    console.log(exampleTableWithElements[i]);
}

//Ad.2
console.log(exampleTableWithElements[exampleTableWithElements.length - 1]);

//Ad.3
console.log(exampleTableWithElements);

//Ad.4
for (let i = 0; i < exampleTableWithElements.length; i++) {
    if (i % 2 == 0) {
        console.log(exampleTableWithElements[i]);
    }
}
//Ad.4 second way
exampleTableWithElements.forEach((elem, i) => {
    if (i % 2 == 0) console.log(elem);
})
//Ad.5
for (let i = 0; i < exampleTableWithElements.length; i++) {
    if (typeof exampleTableWithElements[i] == 'string') {
        console.log(exampleTableWithElements[i]);
    }

}
//Ad.5 second way
exampleTableWithElements.forEach((elem, i) => {
    if (typeof exampleTableWithElements[i] == 'string') console.log(elem);
})

// Ad.6
for (let i = 0; i < exampleTableWithElements.length; i++) {
    if (typeof exampleTableWithElements[i] == 'number') {
        console.log(exampleTableWithElements[i]);
    }
}
// Ad.6 second way
exampleTableWithElements.forEach((elem, i) => {
    if (typeof exampleTableWithElements[i] == 'number') console.log(elem);
})
/*Zadanie 3
Stwórz tablicę tylko z elementami typu number. W konsoli wypisz:

1. sumę wszystkich elementów
2. różnicę wszystkich elementów
3. średnią wszystkich elementów
4. elementy parzyste
5. elementy nieparzyste
6. największą liczbę
7. najmniejszą liczbę
8. wypisz tablicę od tyłu

* nie rozpatrujemy warunków brzegowych. Liczby nie powtarzają się.*/

let exampleArray = [1, 3, 7, 66, 462, 745];
//Ad1.
let counter = 0;
exampleArray.forEach((elem, i) => {
    counter += elem;
})
console.log(counter);

//Ad.2
exampleArray.forEach((elem, i) => {
    counter -= elem;
})
console.log(counter);

//Ad.3
exampleArray.forEach((elem, i) => {
    counter += elem;
})
console.log(counter / exampleArray.length);

//Ad.4
exampleArray.forEach((elem, i) => {
    if (elem % 2 == 0) console.log(elem);
})

//Ad.5
exampleArray.forEach((elem, i) => {
    if (elem % 2 != 0) console.log(elem);
})

//Ad.6
var max = 0;
for (let i = 0; i < exampleArray.length; i++) {
    if (max <= exampleArray[i]) {
        max = exampleArray[i];
    }
}
console.log('max: ', max);

//Ad.7
var min = exampleArray[0];
for (let i = 0; i < exampleArray.length; i++) {
    if (exampleArray[i] < min) {
        min = exampleArray[i];
    }
}
console.log('min: ', min)

//Ad.8
console.log(exampleArray.reverse());

/*Zadanie 4
Napisz funkcję która przyjmie jako parametr tablice liczb. Zwróć do konsoli sumę wszystkich liczb.*/
let exampleArrays = [1, 2, 5, 7, 222];
let sum = 0;

function sumOfElem(array) {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumOfElem(exampleArrays));

//ad.4 second way
function sumOfElems(array) {
    return array.reduce((a, b) => a + b, 0);
}

console.log(sumOfElems(exampleArrays));

/*Zadanie 5
Napisz funkcję która przyjmuje jako parametr tablicę liczb.
Następnie wypisz w konsoli wszystkie elementy tej tablicy pomnożone przez średnią tablicy
 */

function multipliedElemOfArray(array) {
    let average = (array.reduce((a, b) => a + b, 0)) / array.length;
    return array.map(n => n * average);
}

console.log(multipliedElemOfArray(exampleArrays));

/*Zadanie 6
Napisz funkcję, która zwraca średnią liczb parzystych z tablicy którą przekażesz jako parametr tej funkcji.*/

function averageValueOfElem(array) {
    const evenNumbers = array.filter(n => n % 2 == 0);
    evenNumbers.forEach((elem) => {
        counter += elem;
    })
    return counter / evenNumbers.length
}

console.log(averageValueOfElem(exampleArrays));


/*Zadanie 7
Posortuj tablicę przekazaną jako parametr do funkcji. Wypisz ją w konsoli*/
let nonSortedArray = [2, 44, 3, 54, 1, 7];

function sortedElem(a, b) {
    return a - b;
}

console.log(nonSortedArray.sort(sortedElem));

/*Zadanie 8
Napisz funkcję która będzie zwracać tablicę która będzie sumą indeksów dwóch tablic przekazanych jako parametry funkcji.*/
let exampleArrayA = [7, 6, 3, 4]
let exampleArrayB = [5, 6, 7, 8]

function sumOfArraysIndex(arrayA, arrayB) {
    let array = [];
    arrayA.forEach((num, i) => {
        array.push(num + arrayB[i]);
    });
    return array;
}

console.log(sumOfArraysIndex(exampleArrayA, exampleArrayB));

/*Zadanie 9

Napisz funkcję która przyjmie jako parametr tablice oraz element tablicy.
Następnie funkcja ma zwrócić nową tablicę na podstawie pierwszego parametru ale bez elementu z drugiego parametru*/

let exampleArrayC = ["Nigdy", "wczoraj", "jutro"]

function deleteOneOfElement(arr, element) {
    let indexOfElement = arr.indexOf(element);
    if (indexOfElement >= 0) {
        arr.splice(indexOfElement, 1);
    }
    return arr;
}

let newArray = deleteOneOfElement(exampleArrayC, "wczoraj");

console.log(newArray);


/*Zadanie 10

Napisz funkcję która przyjmuje jako parametr tablicę z numberami,
 a następnie zwraca nową tablicę na podstawie parametru gdzie każdy element tablicy ma odwrotny znak.*/


let exampleArrayD = [-5, 3, -25, 4, -30, 45]

function changeElementsOfArray(arr) {
    return arr.map(n => n * -1);
}

console.log(changeElementsOfArray(exampleArrayD));