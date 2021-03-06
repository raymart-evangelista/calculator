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
            return Math.round(div(num1, num2) * 100) / 100
            break;
    }

}

const body = document.querySelector('body');

// create the main container that holds all the calculator content
let calculator = document.createElement('div');
calculator.classList.add('calculator');
body.appendChild(calculator);

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

// append onto calculator
calculator.appendChild(displayContainer);
calculator.appendChild(digitContainer);
calculator.appendChild(operatorContainer);

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
zeroBtn.classList.add('zero');
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

// create All Clear btn
let acBtn = document.createElement('button');
acBtn.classList.add('btn');
acBtn.classList.add('allClear');
acBtn.textContent = 'AC';
// operatorContainer.appendChild(acBtn);

// create Delete btn
let delBtn = document.createElement('button');
delBtn.classList.add('btn');
delBtn.classList.add('delete');
delBtn.textContent = 'DEL';
//operatorContainer.appendChild(delBtn);

// // create useless btn that does nothing
// let uselessBtn = document.createElement('button');
// uselessBtn.classList.add('btn');
// uselessBtn.classList.add('useless');

// // create another btn that does nothing right now
// let dotBtn = document.createElement('button');
// dotBtn.classList.add('btn');
// dotBtn.classList.add('dot');


// append digits onto digits container
digitContainer.appendChild(acBtn);
digitContainer.appendChild(delBtn);
// digitContainer.appendChild(uselessBtn);
digitContainer.appendChild(divBtn);

digitContainer.appendChild(sevenBtn);
digitContainer.appendChild(eightBtn);
digitContainer.appendChild(nineBtn);
digitContainer.appendChild(mulBtn);

digitContainer.appendChild(fourBtn);
digitContainer.appendChild(fiveBtn);
digitContainer.appendChild(sixBtn);
digitContainer.appendChild(subBtn);

digitContainer.appendChild(oneBtn);
digitContainer.appendChild(twoBtn);
digitContainer.appendChild(threeBtn);
digitContainer.appendChild(addBtn);

digitContainer.appendChild(zeroBtn);
// digitContainer.appendChild(dotBtn);
digitContainer.appendChild(equalBtn);

// append operators onto operators container
// operatorContainer.appendChild(divBtn);
// operatorContainer.appendChild(mulBtn);
// operatorContainer.appendChild(subBtn);
// operatorContainer.appendChild(addBtn);
// operatorContainer.appendChild(equalBtn);



let currentNum;
let savedNum;
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
        currentNum = displayContainer.textContent;
    })
})

// when an operator such as /, +, -, * are clicked, the digits on the display are saved, the operator choice is saved as well, we also reset firstDigInstance to true
let operators = document.querySelectorAll('.operator');
operators.forEach(operator => {

    operator.addEventListener('click', () => {


        // only continue if user entered a number and operator
        // if the user only inputted an operator and maybe done so twice or multiple times, don't do anything
        if (currentNum != undefined) {

            // when an operator is clicked, we should reset the firstDigInstance boolean so when digits are entered again, they don't overflow from previous digits
            firstDigInstance = true;

            // save the operator user clicks
            currentOperator = operator.textContent;

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

                // check if user is dividing by zero
                if (savedOperator == '/' && currentNum == '0') {

                    divByZero();

                } else {

                    // else occurs when two numbers have been inputted, and an operation is given

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

            }

        }


    })

})

equalBtn.addEventListener('click', () => {

    if (savedOperator == '/' && currentNum == '0') {
        divByZero();
    } else if (savedNum == undefined || currentNum == undefined) {

        // user might press enter even if there is no numbers to evaluate, so in that case, don't do anything
        console.log('nothing occurs');
    }
    else {
        firstDigInstance = true;

        console.log('in here');
        console.log(`savedOperator: ${savedOperator}\nsavedNum: ${savedNum}\ncurrentNum: ${currentNum}`);
        savedNum = operate(savedOperator, parseInt(savedNum), parseInt(currentNum));
        console.log(`savedOperator: ${savedOperator}\nsavedNum: ${savedNum}\ncurrentNum: ${currentNum}`);
        displayContainer.textContent = savedNum;

        currentNum = 0;
    }



})

// if AC clicked, reset operator, currentNum, savedNum;
acBtn.addEventListener('click', () => {

    resetCalculator();

})

// when delete clicked, remove a digit from the displayContainer, if there's only a single digit shown, and delete is clicked, set display to 0
delBtn.addEventListener('click', () => {

    switch (displayContainer.textContent) {
        case '0':
        case '':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            displayContainer.textContent = '0';
            firstDigInstance = true;
            break;
        default:
            displayContainer.textContent = displayContainer.textContent.slice(0, -1);
    }

})

function resetCalculator() {

    firstDigInstance = true;

    displayContainer.textContent = '0';

    currentNum = undefined
    savedNum = undefined
    currentOperator = undefined;
    savedOperator = undefined;

    console.log(`savedOperator: ${savedOperator}\ncurrentOperator: ${currentOperator}\nsavedNum: ${savedNum}\ncurrentNum: ${currentNum}`);

}


function divByZero() {
    alert('Dividing by 0 produces NOT A NUMBER');
    resetCalculator();
}


let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let currentColor = button.style.backgroundColor;
        button.style.backgroundColor = 'grey';
        console.log(currentColor);

        setTimeout(function () {
            button.style.backgroundColor = currentColor;
        }, 100);

    })
})