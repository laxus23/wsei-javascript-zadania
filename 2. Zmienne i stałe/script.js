/*Zadanie 1

Stwórz w zmienne wstawiając do każdej z nich następujące dane i wyświetl je w konsoli:

* liczbę
* string
* liczbę + string np. (2 + "dwa")
* wartość logiczną
* wartość specjalną*/

const exampleNumber = 25;
const exampleString = "lorem";
const exampleNumberString = 3 + "lorem";
const exampleBool = true;
const exampleNull = null;

console.log("exampleNumber: ", exampleNumber)
console.log("exampleString: ", exampleString)
console.log("exampleNumberString: ", exampleNumberString)
console.log("exampleBool: ", exampleBool)
console.log("exampleNull: ", exampleNull)

/*Zadanie 2
W konsoli stwórz następujące zmienne:
* dwie zmienne mają przechowywać dowolne liczby,
* ostatnia o nazwie ```sum``` ma przechowywać liczbę 0.

Następnie wypis w konsoli sumę dwóch pierwszych zmiennych przypisując wynik do zmiennej ```sum```.*/

let firstnumber = 20;
let secondnumber = 30;
let sum = 0;
sum = firstnumber + secondnumber;
console.log(sum);

/*Zadanie 3
W konsoli stwórz zmienną i nic do niej nie przypisuj. Wypisz ją w konsoli i powiedz skąd taki wynik.*/

let exampleVariable;
// return undefined - nothing has been assigned to the variable.
console.log(exampleVariable);
