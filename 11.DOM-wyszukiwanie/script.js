/*Zadanie 1

Wyszukaj na stronie wszystkie elementy o klasie list i zapisz wynik do odpowiedniej zmiennej.*/
const list = window.document.getElementsByClassName('list');
console.log(list);

/*Zadanie 2

Stwórz funkcję która będzie zwracać elementy(tagi) na podstawie podstawie przesłanego parametru.
Wynik działania funkcji zapisz do zmiennej i wyświetl w konsoli.
 */
function getElements(element) {
    const elements = document.querySelectorAll(element);
    return elements;
}

const elem = getElements('div');
console.log(elem);

/*Zadanie 3

Znajdź na stronie element listy od id="list" i zapisz do odpowiedniej zmiennej.*/

const elem = document.getElementById('list');
console.log(elem);

/*Zadanie 4

Napisz funkcje która będzie wypisywać w konsoli elementy przekazane w parametrze. Do funkcji przekaż następujące elementy:

1. wszystkie elementy li na stronie
2. wszystkie elementy ul na stronie
3. wszystkie spany na stronie
4. wszystkie spany znajdujące się w elemencie div z klasą list
5. wszystkie spany znajdujące się w elemencie div który posiada id="spans"*/

function getElements(elem) {
    elem.forEach(element => console.log(element));
}

getElements(document.querySelectorAll('li'));
getElements(document.querySelectorAll('ul'));
getElements(document.querySelectorAll('span'));
getElements(document.querySelectorAll('div.list > span'));
getElements(document.querySelectorAll('div#spans > span'));