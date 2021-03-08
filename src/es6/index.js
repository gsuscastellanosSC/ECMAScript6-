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
a = 'a'; //No permitido
console.log(a);