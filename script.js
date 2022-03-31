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

const body = document.querySelector('body');

// create container for calculator display
let displayContainer = document.createElement('div');
displayContainer.classList.add('display');
    
    // add dummy text into display
    displayContainer.textContent = '0';

// create container for digits and operators

    // for digits
let digitContainer = document.createElement('div');
digitContainer.classList.add('digits');

    // for operators
let operatorContainer = document.createElement('div');
operatorContainer.classList.add('operators');

// append onto body
body.appendChild(displayContainer);
body.appendChild(digitContainer);
body.appendChild(operatorContainer);

// create buttons for digits
let oneBtn = document.createElement('button');
oneBtn.classList.add('btn');
oneBtn.classList.add('digit');
oneBtn.textContent = '1';

let twoBtn = document.createElement('button');
twoBtn.classList.add('btn');
twoBtn.classList.add('digit');
twoBtn.textContent = '2';

let threeBtn = document.createElement('button');
threeBtn.classList.add('btn');
threeBtn.classList.add('digit');
threeBtn.textContent = '3';

let fourBtn = document.createElement('button');
fourBtn.classList.add('btn');
fourBtn.classList.add('digit');
fourBtn.textContent = '4';

let fiveBtn = document.createElement('button');
fiveBtn.classList.add('btn');
fiveBtn.classList.add('digit');
fiveBtn.textContent = '5';

let sixBtn = document.createElement('button');
sixBtn.classList.add('btn');
sixBtn.classList.add('digit');
sixBtn.textContent = '6';

let sevenBtn = document.createElement('button');
sevenBtn.classList.add('btn');
sevenBtn.classList.add('digit');
sevenBtn.textContent = '7';

let eightBtn = document.createElement('button');
eightBtn.classList.add('btn');
eightBtn.classList.add('digit');
eightBtn.textContent = '8';

let nineBtn = document.createElement('button');
nineBtn.classList.add('btn');
nineBtn.classList.add('digit');
nineBtn.textContent = '9';

let zeroBtn = document.createElement('button');
zeroBtn.classList.add('btn');
zeroBtn.classList.add('digit');
zeroBtn.textContent = '0'


// create buttons for operators
let addBtn = document.createElement('button');
addBtn.classList.add('btn');
addBtn.classList.add('operator');
addBtn.textContent = '+';

let subBtn = document.createElement('button');
subBtn.classList.add('btn');
subBtn.classList.add('operator');
subBtn.textContent = '-';

let mulBtn = document.createElement('button');
mulBtn.classList.add('btn');
mulBtn.classList.add('operator');
mulBtn.textContent = '*';

let divBtn = document.createElement('button');
divBtn.classList.add('btn');
divBtn.classList.add('operator');
divBtn.textContent = '/';

let equalBtn = document.createElement('button');
equalBtn.classList.add('btn');
equalBtn.classList.add('operator');
equalBtn.textContent = '=';

// append digits onto digits container
digitContainer.appendChild(sevenBtn);
digitContainer.appendChild(eightBtn);
digitContainer.appendChild(nineBtn);
digitContainer.appendChild(fourBtn);
digitContainer.appendChild(fiveBtn);
digitContainer.appendChild(sixBtn);
digitContainer.appendChild(oneBtn);
digitContainer.appendChild(twoBtn);
digitContainer.appendChild(threeBtn);
digitContainer.appendChild(zeroBtn);

// append operators onto operators container
operatorContainer.appendChild(divBtn);
operatorContainer.appendChild(mulBtn);
operatorContainer.appendChild(subBtn);
operatorContainer.appendChild(addBtn);
operatorContainer.appendChild(equalBtn);

// create All Clear btn
let acBtn = document.createElement('button');
acBtn.classList.add('btn');
acBtn.textContent = 'AC';
digitContainer.appendChild(acBtn);

// populate display when a number is clicked
let currentNum;
let savedNum;
let operator;
let numbers = document.querySelectorAll('.digit');
numbers.forEach(number => {

    number.addEventListener('click', () => {
        displayContainer.textContent += number.textContent;
        
        // store displayContainer contents
        currentNum = displayContainer.textContent;
    })
})