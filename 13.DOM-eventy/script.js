/*Zadanie 1

Stwórz następujące eventy i sprawdź co udostępnia ich obiekt event:

1. Kliknięcie w przycisk o id="test-event"
2. Ruch myszką na ekranie
3. Najechanie myszką na przycisk o id="test-event"
4. naciśnięcie klawisza na klawiaturze
5. scrollowanie strony w dół i w górę
6. zmianę tekstu w input id="input-test"
*/

//Ad.1.1

document.getElementById('test-event').addEventListener('click', (event) => {
    console.info(event);
});

//Ad.1.2

document.addEventListener('mousemove', (event)=> {
    console.info(event);
});

//Ad.1.3

document.getElementById('test-event').addEventListener('mouseover', (event) => {
    console.info(event);
});

//Ad.1.4

document.addEventListener('keydown', (event)=> {
    console.info(event);
});

//Ad.1.5

document.addEventListener('scroll', (event)=> {
    console.info(event);
});

//Ad.1.6

document.getElementById('input-test').addEventListener('input', (event) => {
    console.info(event);
});

/*Zadanie 2

Napisz funkcję która po kliknięciu na button id="ex2" pobierze tekst z jego data atrybutu,
 a następnie wpisze ten tekst do spanu który jest poniżej.
 */
function printTextSpan(){
    document.querySelector('#ex2').addEventListener('click', (event) =>{
        const text = event.target.dataset.text;
        const addText = event.target.nextElementSibling;
        addText.innerText = text;
    })
}
printTextSpan();


/*Zadanie 3

Napisz funkcję która po najechaniu na czerwony kwadrat zmieniu jego kolor na niebieski.
Następnie po zjechaniu myszki z obszaru kwadratu zmieni się z powrotem na czerwony.
 */

function changeColorOfSquare(){
    document.querySelector('#ex3').addEventListener('mouseover', (event) =>{
        event.target.style.backgroundColor = 'blue';
    });
    document.querySelector('#ex3').addEventListener('mouseout', (event) =>{
        event.target.style.backgroundColor = 'red';
    });
}

changeColorOfSquare();

/*Zadanie 4

Napisz funkcję walidacyjną dla input id="input-test". Funkcja ma za zadanie sprawdzać co jest wpisane w inputa.
Jeśli user wpisze jakąś cyfrę pokaż mu komunikat błędu pod inputem informujący że nie może wpisywać cyfr.
 */

function checkInputTest(){
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const text = document.querySelector('#ex3-err');
    document.querySelector('#input-test').addEventListener('keydown', (event) => {
        if(event.key in numbers){
            text.textContent = 'You cannot type numbers';
        }
    });
}

checkInputTest();


/*Zadanie 5

Napisz funkcję countera.
Funkcja ma za zadanie wpisywać do spanu w divie id="ex5" numerka odpowiadającego ilości kliknięć w button id="ex5-button".
Jeśli licznik dojdzie do 10 event powinien być usunięty.
 */
/*
const counter = 0;
function countClick(){
    counter++
    document.querySelector('#ex5').innerText = counter;
    if(counter > 9){
        document.querySelector('#ex5-button').removeEventListener('ckick', countClick);
    }
}
document.querySelector('#ex5-button').addEventListener('click', countClick);

/*Zadanie 6

Napisz funkcję która będzie obserwowac scroll strony. Jeśli scroll zjedzie poniżej 200px zmień kolor strony na czerwony.
Jeśli będzie powyżej 200px niech zmieni kolor na biały.
 */
function getScrollPosition(){
    document.addEventListener("scroll", () => {
        if(window.scrollY > 200){
            document.body.style.backgroundColor = 'red';
        }else{
            document.body.style.backgroundColor = 'white';
        }
    })};

getScrollPosition();

/*Zadanie 7

Napisz obsługę kalkulatora. Dodaj odpowiednie eventy do przycisków.
Wynik wyświetlaj w inpucie. Staraj się aby funkcje były reużywalne.
*/
let calc = document.querySelector('#calculator > input');
let clickIsEval = false;
let clickIsClear = false;
const signs = ['/', '*', '+', '-'];
function calculator(){
    document.querySelectorAll('#calculator > div > button').forEach((elem) => {
        elem.addEventListener('click', (event) => {
            if (clickIsClear !== false) {
                calc.value = "";
                clickIsClear = false;
            }
            calc.value += event.target.innerText;
            if (clickIsEval !== false) {
                calc.value = eval(calc.value);
                clickIsEval = false;
                clickIsClear = true;
            }
            if (signs.includes(event.target.innerText)) {
                clickIsEval = true;
            }
        });
    });
}

calculator();
