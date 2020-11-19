/*Zadanie 1

Stwórz funkcję do której przekażesz jako parametr listę elementów o klasie more-divs. Następnie zwróć z tej funkcji tablicę tagów utworzoną na podstawie przekazanego parametru.
Wynik wyświetl w konsoli.*/

function getTagsFromDivs(elems){
    const tags = [];
    for (let i = 0; i < elems.length; i++){
        tags.push(elems[i].tagName);
    }
    return tags;
}
const divs = document.getElementsByClassName('more-divs');
console.log(getTagsFromDivs(divs));

/*Zadanie 2

Stwórz funkcję i przekaż do niej jako parametr element short-list. Następnie wyświetlw konsoli:

1. Kod html wewnętrzny
2. kod html zewnętrzy
3. listę klass elementu w postaci stringu
4. listę klass elementu w postaci tablicy
5. obiekt dataset */

const elem = document.getElementsByClassName("short-list")[0];
function printElems(elem){
    console.log("Kod html wewnętrzny: ", elem.innerHTML);
    console.log("Kod html zewnętrzy: ", elem.outerHTML);
    console.log("Lista klas elementu w postaci stringu: ", elem.className);
    console.log("Lista klas elementu w postaci tablicy: ", elem.classList);
    console.log("Obiekt dataset: ", elem.dataset);
}

printElems(elem);

/* Zadanie 3

Stwórz funkcję która zwracać będzie wynik dodawania oraz odejmowania liczb pobranych z przekazanych parametrów. Liczby te muszą pochodzić z atrybutów data elementu o id datasetCheck */
const data = document.querySelector('#datasetCheck');
const a = Number(data.dataset.numberone);
const b = Number(data.dataset.numbertwo);
const c = Number(data.dataset.numberThree);

function getResult(a, b, c){
    let sum = a + b + c;
    let subtraction = a - b - c
    return  [sum, subtraction];
}

console.log(getResult(a,b,c));

/* Zadanie 4

Zmień tekst w elemencie o id spanText na dowolny
*/

document.querySelector('#spanText').textContent = 'xyz';

/* Zadanie 5

Zmień klasę elementowi o id spanText na dowolną
*/

document.querySelector('#spanText').classList = 'xyzz';

/* Zadanie 6

Napisz funkcję która przyjmie jako parametr listę klass elementu o id classes.
Następnie funkcja powinna wypisać w konsoli pojedynczo wszystkie klasy a na końcu wyświetlić string z połączonych klass znakiem '+'.
Następnie usuń wszystkie klasy temu elementowi i wypisz w konsoli tekst: "Usunięto wszystkie klasy".
*/
const data1 = document.querySelector('#classes');
function Classes(listOfClasses){
    console.log(listOfClasses);
    listOfClasses.forEach(classes => console.log(classes));
    console.log([...listOfClasses].join('+'));
    data1.classList = '';
    console.log('Usunięto wszystko klasy');
}
Classes(data1.classList);


/* Zadanie 7

Znajdź wszystkie elementy li w elemencie longList.
Przekaż te elementy do funkcji której zadaniem będzie dodanie każdemu elementowi li atrybutu data-text="text" ale tylko tym elementom w których taki data atrybut nie istnieje.
*/
const data2 = document.querySelectorAll('#longList li');
function addAttributeDataToLiElems(elems){
    elems.forEach((elem) => {
        if(!elem.dataset.text){
            elem.dataset.text = 'text';
        }
    })
}

addAttributeDataToLiElems(data2);


/* Zadanie 8

Napisz funkcję która będzie przyjmować parametr typu string. Następnie string ten zapisz w postaci obiektu:

{
    newClass: 'string_z_parametru'
}

Obiekt ten przekaż do drugiej funkcji w której odczytasz string z obiektu i przypisz go do zmiennej. Następnie ustaw taką klasę elementowi o id myDiv.
*/

function buildObject(str){
    const newObject = {
        newClass: str
    }
    return newObject
}

function addClass(newObject){
    const newClass = newObject.newClass;
    document.querySelector('#myDiv').classList.add(newClass);
}

addClass(buildObject('string_z_parametru'));

/* Zadanie 9

Napisz funkcję która będzie dodawać odpowiednią klasę do elementu o id "numbers" w zależności od przekazanego parametru. Parametr powinien być losową liczbą z zakresu 0-10.
Jeśli liczba będzie parzysta ustaw klasę 'even' jak nieparzysta 'odd;
*/

function addProperClassToId(number){
    const numbers = document.querySelector('#numbers');
    if(number % 2 == 0) {
        numbers.classList.add('even');
    } else {
        numbers.classList.add('odd');
    }
}
addProperClassToId(Math.floor(Math.random() * 11));


/* Zadanie 10

Napisz funkcję do której przekaż element o id "longList". Następnie zwróć tablicę wypełnioną wartościami pobranymi z elementów ten listy.
*/
const data3 = document.querySelectorAll('#longList li');
function getTableWithElements(elems){
    let newTable = [];
    elems.forEach((elem)=>{
        newTable.push(elem.innerText);
    })
    return newTable;
}

console.log(getTableWithElements(data3));

/* Zadanie 11

Napisz funkcję do której przekażesz listę dzieci elementu o id longList.
Następnie zamień wszystkie wartości tych elementów na losowe liczby z zakresu 0-10 jednocześnie przechowując starą wartość w data atrybucie.*/

const data4 = document.querySelector('#longList').children;
function changeValues (elems){
    [...elems].forEach((elem) => {
        elem.dataset.beforechanges = elem.textContent;
        elem.textContent = Math.floor(Math.random() * 11);
    });
};
changeValues(data4);

