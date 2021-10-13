function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

const calculator = {
    add,
    subtract,
    multiply,
    divide,
};

 module.exports = calculator;

//키랑 밸류가 이름이 같으면 밸류 생략해도 ㄱㅊ음

console.log(add(1, 3));
console.log(subtract(1, 3));
console.log(multiply(1, 3));
console.log(divide(1, 3));