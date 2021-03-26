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

//Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Hello World'), 3000): reject(new Error('Test Error'))
    })
}
const helloAsync = async() => {
    console.log("wait...");
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (!true) ? setTimeout(() => resolve('Hello World'), 3000): reject(new Error('Test QWERTY Error'))
    })
}
const anothorFunction = async() => {
    console.log('wait..');
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch {
        console.log(error);
    }
};
anothorFunction();