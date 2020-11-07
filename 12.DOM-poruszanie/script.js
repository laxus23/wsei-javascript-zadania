/*Zadanie 1

Wypisz w konsoli:

1. Rodzica elementu id="buz"
2. Brata elementu id="baz"
3. Dzieci elementu id="foo"
4. rodzica elementu id"foo"
5. pierwsze dziecko elementu id="foo"
6. środkowe dziecko elementu id="foo"
*/
console.log(document.getElementById('buz').parentNode);
console.log(document.getElementById('baz').previousElementSibling);
console.log(document.getElementById('foo').children);
console.log(document.getElementById('foo').parentNode);
console.log(document.getElementById('foo').firstElementChild);
var elem = document.getElementById('foo').children;
console.log(elem[Math.floor(elem.length / 2)]);


/*Zadanie 2

Napisz funkcję która przyjmie jako parametr element id="ex2".
Następnie doda nasłuchiwanie eventu click na tym elemencie.
Jeśli czerwony kwadrat zostanie kliknięty pobierz tekst z wewnętrzego diva tego elementu i wyświetl go w konsoli.
 */
function getText(elem) {
    elem.addEventListener('click', (el) => {
        console.log(el.target.children[0].outerText.trim());
    });
}

getText(document.getElementById('ex2'));

/*Zadanie 3

Napisz funkcję która doda na każdym buttonie w div id="ex3" ten sam event kliknięcia.
Zadaniem eventu będzie odsłanianie lub ukrywanie elementu span obok buttona.
 */

function addDiv() {
    var elem = document.getElementById('ex3');
    elem.querySelectorAll('button').forEach(button => {
        button.onclick = () => {
            if (button.nextElementSibling.style.display === "none") button.nextElementSibling.style.display = 'inline';
            else button.nextElementSibling.style.display = 'none';
        }
    })
}

addDiv()

/*Zadanie 4

Dodaj event na buttony z zadania 3 tak aby po kliknięciu na dowolny z nich ich rodzic zmieniał kolor na dowolny.
Całość zapisz w funkcji.

    Losowy kolor:
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
*/

function addDivAndChangeColor() {
    var elem = document.getElementById('ex3');
    elem.querySelectorAll('button').forEach(button => {
        button.onclick = () => {
            var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            if (button.nextElementSibling.style.display === "none") button.nextElementSibling.style.display = 'inline';
            else button.nextElementSibling.style.display = 'none';
            button.parentNode.style.backgroundColor = randomColor;
        }
    })
}

addDivAndChangeColor()

/*Zadanie 5

W div id="ex5" znajdują się trzy prostokąty.
Po najechaniu na dowolny z nich elementy na liście powinny zmienić swój background-color na taki jak prostokąt,
 ale według poniższych punktów:


1. Tylko pierwszy element listy
2. tylko ostatni element listy
3. Parzyste elementy listy
4. Wszystkie elementy listy
5. Żaden z elementów - tylko cała lista
*/

function changeColor() {
    var element = document.getElementById('ex5');
    element.querySelectorAll('div').forEach((div) => {
        div.onmouseover = () => {
            var elem = element.querySelectorAll('li:first-of-type');
            // var elem = element.querySelectorAll('li:last-of-type');
            // var elem = element.querySelectorAll('li:nth-of-type(2n)');
            // var elem = element.querySelectorAll('li');
            // var elem = element.querySelectorAll('ul');
            elem.forEach(el => el.style.color = div.style.backgroundColor);
        };
    });
}

changeColor();

/*Zadanie 6

W div id="ex6" zaczynając od tego diva znajdź i zapisz do zmiennych następujące kombinacje:

1. pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
2. pierwsze dziecko -> rodzic -> pierwsze dziecko -> pierwsze dziecko -> brat -> rodzic
3. rodzic -> pierwsze dziecko -> rodzic -> drugie dziecko -> pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko*/

var elem = document.getElementById('ex6')
var firstElem = elem.firstElementChild.firstElementChild.firstElementChild;
var secondElem = elem.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
var thirdElem = elem.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;

console.log(firstElem, secondElem, thirdElem);