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