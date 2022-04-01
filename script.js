// add
function add(a, b) {
    return a + b;
}

// subtract
function sub(a, b) {
    return a - b;
}

// multiply
function mul(a, b) {
    return a * b;
}

// divide
function div(a, b) {
    return a / b;
}

// operate function takes an operator and two numbers and calls add/sub/mul/div on the nums
function operate(op, num1, num2) {

    switch (op) {
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
equalBtn.classList.add('evaluate');
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
acBtn.classList.add('allClear');
acBtn.textContent = 'AC';
operatorContainer.appendChild(acBtn);

let currentNum;
let savedNum;
let operator;
let firstDigInstance = true;
let currentOperator;
let savedOperator;

// when a number is clicked, update the display
let numbers = document.querySelectorAll('.digit');
numbers.forEach(number => {

    number.addEventListener('click', () => {

        // if this is the first digit of the number wanted, we reset the display before updating the display with the clicked digit
        // this is to prevent digits from the last inputted number from showing on the display
        if (firstDigInstance == true) {

            // reset display
            displayContainer.textContent = ''

            // update boolean such that the display doesn't update while waiting/inputting more digits
            firstDigInstance = false;
        }

        // populate display
        displayContainer.textContent += number.textContent;
    })
})

// when an operator such as /, +, -, * are clicked, the digits on the display are saved, the operator choice is saved as well, we also reset firstDigInstance to true
let operators = document.querySelectorAll('.operator');
operators.forEach(operator => {

    operator.addEventListener('click', () => {

        // when an operator is clicked, we should reset the firstDigInstance boolean so when digits are entered again, they don't overflow from previous digits
        firstDigInstance = true;

        // save the operator user clicks
        currentOperator = operator.textContent;

        // save the digits on the display
        currentNum = displayContainer.textContent;

        // if only one number has been inputted, calculations cannot be made
        // save digits into savedNum
        if (savedNum == undefined) {
            console.log('savedNum: ' + savedNum + '\ncurrentNum: ' + currentNum + '\ncurrentOperator: ' + currentOperator);

            // store the currentNum in savedNum
            savedNum = currentNum;
            savedOperator = currentOperator;
            console.log('currentNum is now saved in savedNum');
  

            currentNum = undefined;
            console.log('savedNum: ' + savedNum + '\ncurrentNum: ' + currentNum + '\ncurrentOperator: ' + currentOperator);

        } else {

            // else occurs when two numbers have been inputted

            //console.log(operate(currentOperator, parseInt(savedNum), parseInt(currentNum)));
            console.log(`savedOperator: ${savedOperator}\nsavedNum: ${savedNum}\ncurrentNum: ${currentNum}`);
            savedNum = operate(savedOperator, parseInt(savedNum), parseInt(currentNum));
            console.log(`savedOperator: ${savedOperator}\nsavedNum: ${savedNum}\ncurrentNum: ${currentNum}`);
            displayContainer.textContent = savedNum;

            // reset currentNum and savedOperator
            // currentNum = undefined;
            // savedOperator = undefined;
            // update the operator to the most recently clicked one
            savedOperator = currentOperator;
            console.log('savedNum: ' + savedNum + '\ncurrentNum: ' + currentNum + '\ncurrentOperator: ' + currentOperator);
        }

        // else two numbers have been inputted, do this


        // reset display after operator is clicked


        // if '=' clicked, save currentNum into savedNum variable


    })

})

equalBtn.addEventListener('click', () => {

    // save the current display digits
    currentNum = displayContainer.textContent;

    firstDigInstance = true;

    console.log('in here');
    console.log(`savedOperator: ${savedOperator}\nsavedNum: ${savedNum}\ncurrentNum: ${currentNum}`);
    savedNum = operate(savedOperator, parseInt(savedNum), parseInt(currentNum));
    console.log(`savedOperator: ${savedOperator}\nsavedNum: ${savedNum}\ncurrentNum: ${currentNum}`);
    displayContainer.textContent = savedNum;

})

// if AC clicked, reset operator, currentNum, savedNum;
acBtn.addEventListener('click', () => {

    firstDigInstance = true;

    displayContainer.textContent = '0';
    currentOperator = undefined;
    currentNum = undefined;
    savedNum = undefined;
    console.log(`operator: ${currentOperator}\nsavedNum: ${savedNum}\ncurrentNum: ${currentNum}`);

})


// keep doing this loop until user presses '='
    // when number is clicked, populate display and save the currentNum
    // when operator (+,-,*,/) is clicked, save currentNum into savedNum
        // also save the operator
        // operate() when user presses '='


// 


