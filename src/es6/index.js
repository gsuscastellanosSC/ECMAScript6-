//Antes
function newFunction(name, age, country) {
    var name = name || 'sc';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'sc', age = 32, country = "MX") {
    console.log(name, age, country);
}

newFunction2();

newFunction2('Ricardo', '23', 'CO');

//Antes
let hello = "Hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multilínea Antes
let lorem = "Lorem Ipsum is simply dummy text of the printing\n" + "and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500 s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960 s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
console.log(lorem);
//Multilínea es6
let lorem2 = `
Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the industry s 
standard dummy text ever since the 1500 s, when an unknown printer 
took a galley of type and scrambled it to make a type specimen book.It 
has survived not only five centuries, but also the leap into electronic 
typesetting, remaining essentially unchanged.It was popularised in the
 1960 s with the release of Letraset sheets containing Lorem Ipsum passages, 
 and more recently with desktop publishing software like Aldus PageMaker including 
 versions of Lorem Ipsum.`
console.log(lorem2);

//Antes
let person = {
    'name': 'sc',
    'age': 32,
    'country': 'COL'
}
console.log(person.name, person.age);
//es6
let { name, age, country } = person;
console.log(name, age, country);

//Destructuración:
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = ['David', ...team1, ...team2];
console.log(education);

const a = 'b';
a = 'a'; //No permitido cuando se tiene definido como const
console.log(a);

//Arrow Functions, Promesas y Parámetros en objetos
//Arrow Functions
const names = [
    { name: 'Sc', age: 32 },
    { name: 'Jesús', age: 32 }
]
let listOfNames = names.map(function(item) {
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //...
};

const listOfNames4 = name => {
    //...
}

const square = num => num * num;

// Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if ('b' === 'b') {
            resolve('Hey');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error))

//Parámetros en objetos
let name = 'sc';
let age = 32;
//es5
obj = { name: name, age: age };
console.log(obj);
//es6
obj2 = { name, age };
console.log(obj2);

//Clases, Módulos y Generadores

//Clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

    multiplicar(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA * this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sumar(1, 2));
console.log(calc.multiplicar(1, 2));

//Módulos
import { hello } from './module';
hello();

//Generadores
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true == !false) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);