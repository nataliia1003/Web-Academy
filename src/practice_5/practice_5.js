import './practice_5.scss';

/*let name = prompt();
/!*alert( `Hello, ${name}!` )*!/

console.log(test)
test.innerHTML = `Hello, ${name}!`*/

let a = prompt('значение a');

let b = prompt('значение b');

let operator = prompt('функция');

if(operator === "+") {
    test.innerHTML = +a + +b;
}
if(operator === "-") {
    test.innerHTML = a - b;
}
if(operator === "/") {
    test.innerHTML = a / b;
}
if(operator === "*") {
    test.innerHTML = a * b;
}
