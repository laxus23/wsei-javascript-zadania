/*Zadanie 1

Stwórz konstruktor Person z następującymi właściwościami:

1. Imię
2. Nazwisko
3. Wiek
4. Kraj
5. Miasto
6. Język

Wszystkie te właściwości powinny pochodzić z parametrów przekazanych przez użytkownika w wywołaniu konstruktora.
Następnie dopisz metody które będą modyfikować wiek oraz miasto. Pamiętaj o reużywalności kodu i oszczędzaniu pamięci.
Wywołaj konstruktor Person na minimum 5 różnych osobach. Następnie zmień im wiek oraz miasto i sprawdź jak zachowują się obiekty.
 */

function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;

    this.changeAge = function (newAge) {
        this.age = newAge;
    };

    this.changeCity = function (newCity) {
        this.city = newCity
    };
}

let persons = [
    new Person("Rafał", "Antonowski", 34, "Russia", "Moscow", "ru"),
    new Person("Adam", "Sikorski", 23, "Poland", "Warsaw", "pl"),
    new Person("Marek", "Padlina", 54, "Czech Republic", "Prague", "cs"),
    new Person("Aneta", "Atena", 66, "Germany", "Berlin", "de"),
    new Person("Władysław", "Witaliczko", 19, "USA", "Los Angeles", "en"),
    new Person("Czesława", "Niemowa", 36, "China", "Pekin", "zh-char"),
];

console.log(persons);

persons.forEach(element => {
    //change age of every person to 20
    element.changeAge(20);
    //change city of every person to London
    element.changeCity("London");
});

console.log(persons);


/*Zadanie 2

Stwórz konstruktor kalkulatora z czterema podstawowymi działaniami.
Konstruktor powinien posiadać pamięć operacji oraz metody do odpowiednich działań.
Dopisz również metodę wypisującą zawartość pamięci oraz czyszczącą zawartość pamięci kalkulatora.
Stwórz na podstawie konstruktora minimum dwa niezależne kalkulatory.
 */
class Calculator {
    constructor(numbers) {
        this.numbers = numbers;
        this.memory = [];
    }

    add() {
        let result = this.numbers.reduce((a, b) => a + b);
        this.addToMemory('Add', result);
        return result;
    }

    substract() {
        let result = this.numbers.reduce((a, b) => a - b);
        this.addToMemory('Substract', result);
        return result;
    }

    divide() {
        let result = this.numbers.reduce((a, b) => a / b);
        this.addToMemory('Divide', result);
        return result;
    }

    multiply() {
        let result = this.numbers.reduce((a, b) => a * b);
        this.addToMemory('Multiply', result);
        return result;
    }


    addToMemory(action, result) {
        this.memory.push({
            action: action,
            numbers: this.numbers,
            result: result
        })
    }

    getMemory() {
        return this.memory;
    }

    clearMemory() {
        this.memory = [];
    }
}

const calculator = new Calculator([3, 4, 6]);
calculator.add();
calculator.substract();
console.log(calculator.getMemory());
calculator.clearMemory();
console.log(calculator.getMemory());

const calculator2 = new Calculator([2, 5, 7]);
calculator2.multiply();
calculator2.divide();
console.log(calculator2.getMemory());
calculator2.clearMemory();
console.log(calculator2.getMemory());


/*Zadanie 3( gra )

Stwórz konstruktor z dwoma metodami. Jedna co sekundę ma zmieniać zawartość pola typu number na losową liczbę z zakresu 1-10.
Druga ma sprawdzać czy liczba jest większa o 5. Jeśli tak to program ma zakończyć działanie.
Obie metody muszą być wywołane na różnych obiektach i wymianiać dane przy pomocy pola prototype.
 */

function DrawOfNumber() {
    this.randomNumber = () => {
        DrawOfNumber.prototype.period = setInterval(() => {
            DrawOfNumber.prototype.num = Math.round(Math.random() * 10);
            console.log(DrawOfNumber.prototype.num);
        }, 1000);
    };
    this.greaterThan5 = () => {
        DrawOfNumber.prototype.check = setInterval(() => {
            if (DrawOfNumber.prototype.num > 5) {
                console.log("Większa niż 5.");
                clearInterval(DrawOfNumber.prototype.period);
                clearInterval(DrawOfNumber.prototype.check);
            }
        }, 1000);
    };
}

let play = new DrawOfNumber();
let play1 = new DrawOfNumber();
play.randomNumber();
play1.greaterThan5();