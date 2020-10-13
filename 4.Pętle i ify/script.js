/*Zadanie 1
W konsoli stwórz dwie zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej ```if ... else ```,
wypisz w konsoli, która z nich jest większa.*/

let firstVariable = 20;
let secondVariable = 30;
if (firstVariable > secondVariable) {
    console.log(firstVariable);
} else if (firstVariable == secondVariable) {
    console.log("Variable are equals");
} else {
    console.log(secondVariable);
}

/*Zadanie 2

W konsoli stwórz trzy zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej **if**, **else if** i **else**
wypisz w konsoli, która z nich jest największa.*/

let firstNumber = 20;
let secondNumber = 50;
let thirdNumber = 40;
if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(firstNumber);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log(secondNumber);
} else {
    console.log(thirdNumber);
}

/*Zadanie 3
W konsoli stwórz pętle, która 10 razy wypisze w konsoli tekst "Lubię JavaScript".*/

for (var step = 0; step < 10; step++) {
    console.log("Lubię JavaScript");
}

/*Zadanie 4
W konsoli stwórz zmienną ```result``` i przypisz do niej liczbę 0. Następnie stwórz pętle, która doda do siebie liczby od 1 do 10.*/

let result = 0
for (var i = 1; i <= 10; i++) {
    result += i;
}
console.log(result);


/*Zadanie 5
W konsoli napisz program, który na podstawie wartości zmiennej np. ```var n = 5;``` wypisuje wszystkie liczby od zera do **n**.
Przy każdej liczbie program ma napisać, czy  liczba jest parzysta czy nie. Np.:

```JavaScript
0 – parzysta
1 – nieparzysta
2 – parzysta
3 – nieparzysta
...
```*/
// <= 5 - the value of n should also be printed
for (var n = 0; n <= 5; n++) {
    if (n % 2 == 0) {
        console.log(n + ' - Even number')
    } else {
        console.log(n + " - Odd number")
    }
}

/*Zadanie 6
W konsoli stwórz dwie pętle niezależne i wypisz wartości ich liczników w każdej iteracji. Wykorzystaj:
konkatenację np.
    ```JavaScript
console.log("i= " + i + ", j= " + j);
```*/

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log("i= " + i + ", j= " + j);
    }
}

/*Zadanie 7

FizzBuzz - wypisz w consoli liczby od 0 do 100. Zamiast każdej podzielnej liczby przez 3 wypisz "Fizz",
zamiast każdej podzielnej liczby przez 5 wypisz "Buzz" a zamiast każdej podzielnej liczby przez 3 i przez 5 wypisz "FizzBuzz"

Przykład:

    ```
0 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ....
```*/

for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}


/*Zadanie 8
Narysuj w konsoli:
    a)
```
*
**
***
****
*****
```
b)
```
    *
   * *
  * * *
 * * * *
* * * * *
```
c)
```
    *
   ***
  *****
 *******
*********
```
d)
```
*1234
**234
***34
****4
*****
-----
*****
****4
***34
**234
*1234
```
e)
```
    *
   * *
  * * *
 * * * *
* * * * *
    *
    *
    *
```*/

//a
let star = '*';
for (let i = 0; i < 5; i++) {
    let resultA = '';
    for (let j = 0; j <= i; j++) {
        resultA += star;
    }
    console.log(resultA)
}

//a - second way to do this tasks, with only 1 for
let resultA = '';
for (let i = 0; i < 5; i++) {
    resultA += '*';
    console.log(resultA);
}

//b

var resultB = "";
for (i = 1; i <= 5; i++) {
    resultB = "";
    for (j = i; j < 5; j++) {
        resultB += " ";
    }
    for (k = 0; k < i; k++) {
        resultB += " *";
    }
    console.log(resultB);
}

//c
var resultC = "";
for (i = 0; i < 5; i++) {
    resultC = "";
    for (j = 0; j < 5 - i; j++) {
        resultC += " ";
    }
    for (k = 0; k < (i * 2 + 1); k++) {
        resultC += "*";
    }
    console.log(resultC);
}


//d

for (let i = 0; i < 5; i++) {
    let resultD = '';
    for (let j = 0; j < i + 1; j++) {
        resultD += star;
    }
    let counter = i + 1;
    for (let k = 1; k > i - 3; k--) {
        resultD += counter++;
    }
    console.log(resultD);

}
console.log('-----')

for (let i = 5; i > 0; i--) {
    let resultD = '';
    for (let j = 0; j < i; j++) {
        resultD += star;
    }
    let counter = i;
    for (let k = 2; k > i - 3; k--) {
        resultD += counter++;
    }
    console.log(resultD);

}

//e
let starA = ' *';

for (let i = 0; i < 5; i++) {
    let resultE = '';
    for (j = 0; j < 5 - i; j++) {
        resultE += ' ';
    }
    for (k = 0; k < i + 1; k++) {
        resultE += starA;
    }
    console.log(resultE);
}
for (let i = 0; i < 3; i++) {
    let resultE = '';
    for (j = 0; j < 5; j++) {
        resultE += ' ';
    }
    resultE += starA;
    console.log(resultE);
}


