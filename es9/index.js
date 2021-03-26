const obj = {
    name: 'Sc',
    age: 29,
    conuntry: 'COL'
};
let { name, conuntry, ...all } = obj;
console.log(all);


const obj2 = {
    name: 'Sc',
    age: 29
}
const obj3 = {
    ...obj2,
    conuntry: 'COL'
}
console.log(obj3);


const helloMan = () => {
    return new Promise((resolve, reject) => {
        console.log('wait...');
        (!true) ?
        setTimeout(() => resolve('Hello Man'), 3000): reject(new Error('Test Error'))
    })
}
helloMan()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(`${year} ${month} ${day}`);