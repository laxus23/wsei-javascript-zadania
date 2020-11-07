/*Zadanie 1
Utwórz 2 obiekty person i person2. Niech posiadają następujące właściwości:

* Imię
* Nazwisko
* Wiek
* Kraj
* Miasto

Stwórz metody:
1. Która wypiszą wszystkie informacje o tej osobie
2. Która dodaje 1 rok do wieku za każdym jej wywołaniem
Następnie napisz kilka wywołań metody numer 2 w różnych kontekstach tak aby sprawdzić zasadę jej działania.*/

class Person {
    constructor(name, surname, age, country, city) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.country = country;
        this.city = city;
    }

    getInfo() {
        console.log(this.name, this.surname, this.age, this.country, this.city);
    }

    addYearToAge() {
        this.age += 1;
    }
}

const person = new Person("Adam", "Nazwisko", 33, "Russia", "Moscow");
person.getInfo();
person.addYearToAge();
person.getInfo();
const person1 = new Person("Maciej", "Janusz", 55, "Poland", "Cracow");
person1.getInfo();
person1.addYearToAge();
person1.addYearToAge();
person1.getInfo();

/*Zadanie 2

Rozszerz obiekty person i person2 z poprzedniego zadania o nowe pole typu tablicowego, które będzie przetrzymywać ulubione dania danej osoby.
Następnie napisz metodę która będzie wypisywać w konsoli zawartość tego pola oraz metodę która będzie dodawać kolejne elementy do tego pola.
Wszystkie te rzeczy mają znaleźć się poza pierwotnym ciałem obiektu
 */

Person.prototype.favouriteDish = [];
Person.prototype.addFavouriteDish = function (food) {
    this.favouriteDish.push(food);
}
Person.prototype.getDishes = function () {
    console.log(this.favouriteDish);
}
person.favouriteDish = [];
person.addFavouriteDish("pasta");
person.getDishes();
person.addFavouriteDish("meat");

person1.favouriteDish = [];
person1.addFavouriteDish("sushi");
person1.addFavouriteDish("bread");

person.getDishes();
person1.getDishes();


/*Zadanie 3

Napisz kalkulator który będzie miał funkcję dodawania, odejmowania, mnożenia i dzielenia. Potrzebne metody:

1. Metoda zapisująca liczby a i b w kontekście obiektu
2. Metoda sumująca wcześniej zapisane liczby
3. Metoda odejmująca wcześniej zapisane liczby
4. Metoda mnożąca wcześniej zapisane liczby
5. Metoda dzieląca wcześniej zapisane liczby. Jeśli liczba b = 0 to wypisz w konsoli odpowiedni komunikat błędu.*/

function Calculator(a, b) {
    this.a = a;
    this.b = b;

    this.add = function () {
        return this.a + this.b;
    }
    this.subtract = function () {
        return this.a - this.b;
    }
    this.divide = function () {
        if (this.b === 0) return "You cannot divide by 0.";
        return this.a / this.b;
    }
    this.multiply = function () {
        return this.a * this.b;
    }
}

const calculator = new Calculator(2, 0);
console.log(calculator.add());
console.log(calculator.divide());
console.log(calculator.multiply());
console.log(calculator.subtract());

/*Zadanie 4

Stwórz prosty symulator wchodzenia i schodzenia z drabiny. Potrzebne będą trzy metody. Zastanów się jakie?*/

function LadderClimbingSimulator(height){
    this.currentHeight = 0;
    this.ladderHeight = height;
    this.toUp = function () {
        this.currentHeight < this.ladderHeight && this.currentHeight ++;
    }
    this.toDown = function () {
        this.currentHeight > 0 && this.currentHeight --;
    }
    this.toGround = function () {
        this.currentHeight = 0;
    }
}

const ladder = new LadderClimbingSimulator(10);
console.log("--------------")
ladder.toUp();
ladder.toUp();
ladder.toUp();
ladder.toUp();
ladder.toDown();
ladder.toDown();
ladder.toDown();
console.log(ladder.currentHeight);
ladder.toUp();
ladder.toUp();
console.log(ladder.currentHeight);
ladder.toGround();
console.log(ladder.currentHeight);
