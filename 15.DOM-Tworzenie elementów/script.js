/* Zadanie 1

Stwórz i dodaj do strony element div wraz z tekstem: "To jest nowy element";


const div = document.createElement("div");
div.textContent = "To jest nowy element";
document.querySelector('#root').appendChild(div);


/* Zadanie 2

Stwórz odpowiednie elementy i dodaj do strony listę ulubionych owoców (minimum 6)


const fruitsUl = document.createElement('ul');
fruitsUl.setAttribute("id", "fruits_ul");
const myFruits= [
    'apple',
    'orange',
    'banana',
    'mango',
    'lemon',
    'grapes'
];
myFruits.forEach((fruit) =>{
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitsUl.appendChild(li);
});
document.body.appendChild(fruitsUl);

/* Zadanie 3

Na podstawie listy z zadanie 2 stwórz event który usunie z tej listy co drugi element.

document.body.addEventListener('click', () =>{
    const elem = document.querySelectorAll('ul li');
    elem.forEach((elems, index) => {
        if (index % 2 == 1) elems.remove();
    });
});

/* Zadanie 4

Dodaj do strony button po kliknięciu na button ma on się usuwać ze strony.

const button = document.createElement('button');
button.textContent  = 'Hide';
button.addEventListener('click', function (index) {
    this.remove();
});

document.body.appendChild(button);

/* Zadanie 5

Na podstawie losowej liczby utwórz odpowiednią ilość divów z tekstem: "to jest div numer ${numer}"

function addDivs(number){
    for(let i=0; i<number; i++) {
        const div = document.createElement('div');
        div.textContent = 'to jest div numer ' + (i + 1);
        document.body.appendChild(div);
    }
};
addDivs(Math.floor(Math.random()*20));


/* Zadanie 6

Na podstawie obiektu stwórz struktórę w html

{
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span',
}


const newObject = {
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span',
}

    const div1 = document.createElement('div');
    div1.innerText = newObject.div1;
    document.body.appendChild(div1);

    const span1 = document.createElement('span');
    span1.innerText = newObject.span1;
    document.body.appendChild(span1);

    const div2 = document.createElement('div');
    div2.innerText = newObject.div2.div3;
    document.body.appendChild(div2);

    const span2 = document.createElement('div');
    span2.innerText = newObject.span2;
    document.body.appendChild(span2);

/* Zadanie 7

Stwórz dwie listy. W jednej umieść minim 6 elementów. Druga niech będzie pusta. Pod każdą z list dodaj button.
Po kliknięciu na button pod listą ostatni element listy ma być przeniesiony do drugiej listy.
Jeśli w danej liście nie ma żadnych elementów to button ma być zablokowany przy pomocy atrybutu disabled;

function addChild(a, b){
    return a.appendChild(b);
}
const divA = document.createElement("div");
const divB = document.createElement("div");
const secondList = document.createElement("ul");
const firstList = document.createElement("ul");
const secondListB = ["first", "second", "third", "fourth", "fifth", "sixth"];
secondListB.forEach((index) => {
  const items = document.createElement("li");
  items.innerText = index;
  firstList.appendChild(items);
});
const firstButton = document.createElement("button");
firstButton.innerText = "Go to firstlist";
const secondButton = document.createElement("button");
secondButton.innerText = "Go to secondlist";
addChild(divA, secondList);
addChild(divA, firstButton);
addChild(divB, firstList);
addChild(divB, secondButton);
document.body.appendChild(divA);
document.body.appendChild(divB);
firstButton.addEventListener("click", function(elem) {
    secondList.appendChild(firstList.lastChild);
  if (firstList.children.length === 0) {
    elem.currentTarget.disabled = true;
  }
});
secondButton.addEventListener("click", function(elem) {
    firstList.appendChild(secondList.lastChild);
  if (secondList.children.length === 0) {
    elem.currentTarget.disabled = true;
  }
});

/* Zadanie 8

Stwórz formularz do którego będzie można wpisać jaki element user chce utworzyć, z jakim tekstem, z kolorem tekstu i ile razy ma być ten element powtórzony na stronie.
Po kliknięciu na button "Utwórz" formularz powinien tworzyć taką strukturę.

const form = document.createElement("form");


const tag = document.createElement("INPUT");
tag.placeholder = "Tag";
form.appendChild(tag);

const text = document.createElement("INPUT");
text.placeholder = "Text";
form.appendChild(text);

const color = document.createElement("INPUT");
color.placeholder = "Color";
form.appendChild(color);
const number = document.createElement("INPUT");
number.placeholder = "Number";
number.type = "number";
form.appendChild(number);

const submit = document.createElement("button");
submit.textContent = "Create";
form.appendChild(submit);

document.body.appendChild(form);
const submit1 = (event) => {
  event.preventDefault();
  for (let i = 0; i < number.value; i++) {
    const elem = document.createElement(tag.value);
    elem.textContent = text.value;
    elem.style.color = color.value;
    elem.style.display = "block";
    form.after(elem);
  }
};
form.addEventListener("submit", submit1);



/* Zadanie 9

Stwórz formularz do którego będzie można wpisać dane tabelarczne takie jak:

1. Imię
2. Nazwisko
3. Wiek
4. Ilość dzieci

Formularz powinien mieć możliwość dodawania kilku takich pozycji po kliknięciu na button "Więcej".
Po kliknieciu na "Utwórz" powinna utworzyć się tabela z odpowiednimi headerami oraz wypełnionymi danymi z formularza.
Na końcu każdej lini powinien być button "Usuń" który usuwa daną linijkę.

const container = document.createElement('div');
const table = document.createElement('table');
const add = document.createElement('button');
const buttons = document.createElement('button')
buttons.textContent = "more table";
buttons.addEventListener("click", () => {
    container.appendChild(create());
});
add.textContent = "create";
add.addEventListener("click", () => {
    table.innerHTML += createTable();
});

container.appendChild(add);
container.appendChild(buttons);
container.appendChild(create());
document.body.appendChild(container);
document.body.appendChild(table);

function createTable() {
	const outputTable = document.querySelector("#outputHolder");
	let html = "";
	let forms = document.querySelectorAll(".form1");
	if(table.innerHTML === ""){
		html += "<tr><td>Imię</td><td>Nazwisko</td><td>Wiek</td><td>Dzieci</td></tr>";
	}
	forms.forEach((form) => {
		let firstName = capitalize(form.querySelector("input[placeholder='Imię']").value);
		let lastName = capitalize(form.querySelector("input[placeholder='Nazwisko']").value);
		let age = capitalize(form.querySelector("input[placeholder='Wiek']").value);
		let kids = capitalize(form.querySelector("input[placeholder='Ilość dzieci']").value);

        html += `<tr><th>${firstName}</th><th>${lastName}</th><th>${age}</th><th>${kids}</th></tr>`;
	});

	return html;
}
function create(){

    let form = document.createElement("form");
    let firstName = document.createElement("input");
    let lastName = document.createElement("input");
    let age = document.createElement("input");
    let kids = document.createElement("input");

	form.classList.add("form1");
    firstName.placeholder = "Imię";
	firstName.setAttribute("name", "firstName");
	lastName.placeholder = "Nazwisko";
	lastName.setAttribute("name", "lastName");
	age.placeholder = "Wiek";
	age.setAttribute("name", "age");
	kids.placeholder = "Ilość dzieci";
	kids.setAttribute("name", "numberOfKids");

	form.appendChild(firstName);
	form.appendChild(lastName);
	form.appendChild(age);
	form.appendChild(kids);

	return form;
}
/* Zadanie 10

Na podstawie powyższego zadania stwórz funkcję która sprawdzi wszystkie stringi wpisane i zamieni pierwsze ich litery na duże.

function capitalize(str){
	if(str.length > 0){
		str = str[0].toUpperCase() + str.substr(1);
		return str;
	}
	else{
		return str;
	}
}

/* Zadanie 11

Stwórz funkcję która będzie przyjmować dowolny string. Sprawdź czy występują w nim liczby. Jeśli tak to podaj w konsoli ich sumę.
Dodatkowo stwórz tyle divów z tym tekstem ile wynosi iloczyn tych liczb.

function checkIfNumberInString(string){
    const reg = /\d/g;
    if(reg.test(string)){

        const number = string.match(reg);
        const convertedNumber = number.map(elem=>Number(elem));
        const sum = convertedNumber.reduce((a,b)=>a+b);

    for(let i=0;i<sum;i++){
        const div = document.createElement('div');
        root.appendChild(div);
        div.textContent = 'Suma liczb w stringu wynosi: '+sum;
        console.log(sum);
    }

    }
}
checkIfNumberInString('a222a');

/* Zadanie 12

Stwórz funkcję która przyjmuje dowolnego stringa. Następnie Wrzuć tego strina do obiektu pod dowolnym polem.
Dopisz metodę do obiektu która będzie sprawdzać czy w tekście występuje string 'Ala' i jeśli tak to zamieni go na 'Ola'.
Jeśli tekst nie występuje to niech utworzy odpowiedniego diva i doda do niego tekst "Słowo Ala nie występuje w tekście."
function createObj(str) {
    return {
        name: str
    }
}
const newObject = createObj('Ala ma kota');
newObject.checkStr = function () {
    if (this.name.includes('Ala')) {
        this.name = this.name.replaceAll('Ala', 'Ola');
        console.log(this.name);
    } else {
        const div = document.createElement('div');
        div.innerText = 'Słowo Ala nie występuje w tekście.';
        document.body.appendChild(div);
    }
}

newObject.checkStr();

/* Zadanie 13

Stwórz funkcję która przyjmie tablicę stringów. Funkcja ma zwrócić nową tablicę z ilością liter w stringach.
Druga funkcja ma zsumować wszystkie liczby z tablicy i zwrócić wynik. Trzecia funkcja ma wyciągnąć średnią z liczb i zwrócić wynik.

function returnNumberOfNumbers(string){
    return string.map((string) => string.length);
}

function sumAllNumbers(string){
    return string.reduce((a, b) => a += b, 0);
}

function getAverage(string){
    return sumAllNumbers(string) / string.length;
}
const example = returnNumberOfNumbers(['This', 'is', 'example']);
console.log(example, sumAllNumbers(example), getAverage(example));

/* Zadanie 14

Stwórz obiekt z 3 polami:
{
    name: '',
    surname: '',
    age: ''
}

Następnie stwórz funkcję (nie metodę) która przypisuje nowe wartości do tych pól oraz tworzy nowe pola z długością stringów.
Jeśli któryś ze stringów będzie dłuższy niż 5 to stwórz w html button po kliknięciu którego cały obiekt wróci do stanu początkowego.*/

const newObject = {
    name: '',
    surname: '',
    age: ''
};
function addNewValue(name, surname, age, object){
    object.name = name;
    object.surname = surname;
    object.age = age;
    let butt = false;

    for(i in object){
        object[i + "Length"] = object[i].length;

        if(object[i].length >= 6){
            butt = true;
        }
    }

    if(butt){
        createClearButton();
    }

    function createClearButton(){
        const clearButton = document.createElement("button");
        clearButton.innerText = "Back to the beginning";

        clearButton.addEventListener("click", function() {
            object = {
                name: "",
                surname: "",
                age: ""
            };
        });

        document.body.appendChild(clearButton);
    }
}

addNewValue("Rafałł", "Łafar", "66", newObject);