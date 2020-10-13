/*Zadanie 1
W konsoli stwórz dwie zmienne i przypisz do nich dwie wartości boolean. Porównaj je za pomocą odpowiedniego operatora.*/

let isEmpty = false;
let isFull = true;
console.log(isEmpty == isFull);

/*Zadanie 2
W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a trzecia o nazwie ```moduloResult``` niech przechowuje liczbę 0.
Oblicz resztę z dzielenia (modulo) tych liczb i zapisz wynik w zmiennej ```moduloResult```.
Wypisz zmienną ```moduloResult``` w konsoli.*/

let firstNumber = 7;
let secondNumber = 4;
let moduloResult = 0;

moduloResult = firstNumber % secondNumber;

console.log(moduloResult);

/*Zadanie 3
W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne stringi, a jedna o nazwie ```stringsResult```,
niech przechowuje pusty string np. ```let stringsResult = ""```
Połącz stringi za pomocą konkatenacji i zapisz wynik w zmiennej ```stringsResult``` oraz wypisz go w konsoli.*/

let firstString = "lorem";
let secondString = "ipsum";
let stringsResult = "";

stringsResult = firstString + secondString;

console.log(stringsResult);

/*Zadanie 4
W konsoli stwórz dwie zmienne:
    ``` JavaScript
var someNumber = 425;
var someString = "425";
 ```
Porównaj te zmienne za pomocą operatorów ```==``` oraz ```===```.
Wypisz wyniki w konsoli. Opowiedz grupie o wynikach*/

var someNumber = 425;
var someString = "425";

//true - because they have the same value
console.log(someNumber == someString);

//false - because they have different type
console.log(someNumber === someString);

/*Zadanie 5
W konsoli stwórz zmienną o nazwie ```counter```. Wstaw do niej liczbę 30.
Wypisz jej wartość w konsoli, a następnie:

* za pomocą inkrementacji zwiększ wartość zmiennej ```counter```
* wypisz ją w konsoli
* za pomocą dekrementacji zmniejsz wartość zmiennej ```counter```
* wypisz ją w konsoli.*/

let counter = 30;
counter++;
console.log(counter);
counter--;
console.log(counter);

/*Zadanie 6

W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a jedna o nazwie ```result```, niech przechowuje ```null```.
Sprawdź czy liczba pierwsza jest większa od drugiej za pomocą odpowiedniego operatora i zapisz wynik w zmiennej ```result```.
Wypisz tą zmienną w konsoli.
 */

let firstVariable = 20;
let secondVariable = 50;
let result = null;
result = firstVariable > secondVariable;
console.log(result);
