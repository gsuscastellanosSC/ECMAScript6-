const data = {
    frontend: 'Sc',
    backend: 'Jesus',
    desing: 'Sa',
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
    frontend: 'Sc',
    backend: 'Jesus',
    desing: 'Sa',
}
const value = Object.values(data);
console.log(value);
console.log(value.length);

const string = '+hello';
console.log(string.padStart(string.length + 2, 'hi'));
console.log(string.padEnd(string.length + 2, 'hi'));