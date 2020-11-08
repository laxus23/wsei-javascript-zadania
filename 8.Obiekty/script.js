/*Zadanie 1

Stwórz obiekt car i dopisz do niego różne właściwości. Wypisz właściwości w konsoli*/

let car = {
    name: "BMW",
    model: "X5",
    productionYear: 2018,
    color: "black",
    changeName(name) {
        car.name = name;
    }
}

console.log(car.name, car.model, car.color, car.productionYear);

/*Zadanie 2

Na podstawie obiektu z zadania 1 dopisz do niego metodę zmieniającą jego nazwę na podstawie parametru przekazanego z wywołania metody.*/

car.changeName("Porsche");
console.log(car.name);

/*Zadanie 3

Stwórz obiekt z metodą sumującą wszystkie liczby z tablicy podanej w parametrze w wywołaniu tej metody.
Następnie metoda ta powinna zapisywać wynik we właściwości sum tego obiektu. Na koniec wypisz właściwość sum w konsoli.*/

let sumOfNumbers = {
    sum: 0,
    sumOfNumber: function (array) {
        return sumOfNumbers.sum = array.reduce((acc, number) => acc += number)
    }
}

sumOfNumbers.sumOfNumber([5, 6, 7, 8, 9, 10]);
console.log(sumOfNumbers.sum);

/*Zadanie 4

Stwórz obiekt car. Następnie wypisz w konsoli informacje na jego temat na podany poniżej wzór:

    name: BMW
age: 12
...

Czy pary klucz wartość.*/

let car1 = {
    name: "BMW",
    age: 12,
    model: "X5",
    color: "black",
}
for (const key in car1) {
    console.log(key + " = " + car1[key]);
}

/*Zadanie 5

Stwórz dowolny obiek w obiekcie car. Następnie wypisz w konsoli jego właściwości.*/

let car2 = {
    name: "BMW",
    age: 12,
    model: "X5",
    color: "black",
    owner: {
        name: "Adam S",
        purchaseYear: 2019,
    }
}
console.log(car2.owner.name, car2.owner.purchaseYear);

/*Zadanie 6

Do obiektu car dodaj dowolną właściwość oraz metodę wypisującą w konsoli napis "Hello". Zrób to poza ciałem obiektu.*/

car.productionCity = "Warsaw";
car.welcome = function () {
    return "Hello";
}
console.log(car.productionCity, car.welcome());