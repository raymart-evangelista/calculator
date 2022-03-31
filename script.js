// add
function add(a,b) {
    return a + b;
}

// subtract
function sub(a,b) {
    return a - b;
}

// multiply
function mul(a,b) {
    return a * b;
}

// divide
function div(a,b) {
    return a / b;
}

// operate function takes an operator and two numbers and calls add/sub/mul/div on the nums
function operate(op, num1, num2) {

    switch(op) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return sub(num1, num2);
            break;
        case '*':
            return mul(num1, num2);
            break;
        case '/':
            return div(num1, num2);
            break;
    }

}
