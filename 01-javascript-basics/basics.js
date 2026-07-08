/**
 
// ===============================
// TASK 1: Variable + String Output
// ===============================
const myName = "Sultan";
console.log("My name is " + myName);


// ===============================
// TASK 2: Add Two Numbers
// ===============================
const firstNumber = 5;
const secondNumber = 3;

console.log(firstNumber + secondNumber);


// ===============================
// TASK 3: String Length
// ===============================
const backendWord = "Backend";
const userName = "Sultan";
const shortWord = "JS";

console.log(backendWord.length);
console.log(userName.length);
console.log(shortWord.length);


// ===============================
// TASK 4: Simple Calculator
// ===============================
const num1 = 10;
const num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);


// ===============================
// TASK 5: Total Price
// ===============================
const price = 100;
const quantity = 3;
const totalPrice = price * quantity;

console.log("Total price is " + totalPrice);


// ===============================
// TASK 6: Convert String to Uppercase
// ===============================
console.log(userName.toUpperCase());


// ===============================
// TASK 7: Mixed String and Number Output
// ===============================
const age = 20;

console.log("My name is " + userName + " and I am " + age + " years old");


// ===============================
// TASK 8: Shopping Receipt
// ===============================
const item = "Book";
const itemPrice = 500;
const itemQuantity = 2;
const totalCost = itemPrice * itemQuantity;

console.log("You bought " + itemQuantity + " " + item + "(s). Total cost is " + totalCost);
console.log(`You bought ${itemQuantity} ${item}(s). Total cost is ${totalCost}`);


// ===============================
// TASK 9: Greeting Function
// ===============================
function greetUser(name = "Happiness") {
    console.log(`Hello ${name}`);
}

greetUser("Sultan");


// ===============================
// TASK 10: Check Even or Odd
// ===============================
function checkEven(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkEven(7);


// ===============================
// TASK 11: Loop from 1 to 5
// ===============================
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// ===============================
// TASK 12: Sum Numbers from 1 to N
// ===============================
function sumNumbers(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total = total + i;
    }

    return total;
}

console.log(sumNumbers(5));


// ===============================
// TASK 13: Find Maximum Number
// ===============================
function findMax(a, b) {
    if (a > b) {
        console.log(`The bigger number is ${a}`);
    } else {
        console.log(`The bigger number is ${b}`);
    }
}

findMax(20, 200);


// ===============================
// TASK 14: Count Letters Manually
// ===============================
function countLetters(word) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        count = count + 1;
    }

    return count;
}

console.log(countLetters("Sultan"));


// ===============================
// TASK 15: Reverse a String
// ===============================
function reverseString(word) {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed = reversed + word[i];
    }

    return reversed;
}

console.log(reverseString("Shola"));


// ===============================
// TASK 16: Login Simulation
// ===============================
const correctPassword = "1234";

function login(password) {
    if (password === correctPassword) {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }
}

login("1234");


// ===============================
// TASK 17: Shopping Summary
// ===============================
function shoppingSummary(price, quantity) {
    const total = price * quantity;

    if (total > 1000) {
        console.log(`Total is ${total}. Big purchase!`);
    } else {
        console.log(`Total is ${total}. Small purchase`);
    }
}

shoppingSummary(2, 4000);

// ===============================
// TASK 18: Multiplication Table
// ===============================

function multiplyNumbers(m) {

    for (let i = 1; i <= 12; i++) {
        console.log(`${m} * ${i} = ${m*i}`)
        
    }
}

multiplyNumbers(2)
* 
 */

/*
let singleQuotes = 'This is a string';
console.log(singleQuotes);
let doubleQuotes = "This is also a string";
console.log(doubleQuotes);
let developer = "Jessica";
console.log(developer);
developer = "Quincy";
console.log(developer);

let greeting = 'Hello';
greeting += ', John!';

console.log(greeting); // "Hello, John!"

let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2); 
console.log(result); // Hello World

//JavaScript Trivia Bot

console.log("Hello! I'm your coding fun fact guide!")
let botName = 'Allienino';
let botLocation = 'The Cloud';
let favoriteLanguage = 'JavaScript';

console.log("My name is " + botName + " and I live on " + botLocation + ".");

console.log("My favorite programming language is "+ favoriteLanguage + '.' )

let codingFact = favoriteLanguage + ' was originally named Mocha.';

console.log(codingFact)

codingFact = favoriteLanguage + ' was later renamed to LiveScript.'

console.log(codingFact)

codingFact = favoriteLanguage + 'was later renamed to TypeScript.'

console.log(codingFact)

console.log ("It was fun sharing these facts with you. Goodbye! - "+ botName + " from " + botLocation + ".")


//Build a Sentence Maker

let adjective = "gigantic";
let noun = "dragon";
let verb = "angry";
let place = "volcano";
let adjective2 = "smoky";
let noun2 = "marshmallows";

let firstStory;

firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

console.log("First story: " + firstStory);

adjective = "tiny";
noun = "unicorn";
verb = "excited";
place = "enchanted forest";
adjective2 = "sparkly";
noun2 = "cupcakes";

let secondStory;

secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

console.log("Second story: " + secondStory);

let num = 7

console.log(typeof num) */

let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);

const name = "Alice";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

let poem1 = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

console.log(poem1);

const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(output); 

//Fortune teller 

let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";



let randomNumber = Math.floor(Math.random() * 5) + 1;


let selectedFortune;

if (randomNumber === 1) {
    selectedFortune = fortune1;
} else if (randomNumber === 2) {
    selectedFortune = fortune2;
} else if (randomNumber === 3) {
    selectedFortune = fortune3;
} else if (randomNumber === 4) {
    selectedFortune = fortune4;
} else if (randomNumber === 5) {
    selectedFortune = fortune5;
}


console.log(selectedFortune);

//Calculator

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25))
console.log(calculateSquareRoot(100))

//Build an Email Masker
function maskEmail(email) {
  // 1. Locate the delimiter between the local part and the domain.
  const atIndex = email.indexOf("@");

  // 2. Isolate the local part (everything before the '@').
  const localPart = email.slice(0, atIndex);

  // 3. Isolate the domain part (the '@' and everything after it).
  const domainPart = email.slice(atIndex);

  // 4. Extract the first and last characters of the local part.
  const firstChar = localPart[0];
  const lastChar = localPart[localPart.length - 1];

  // 5. Generate the precise number of asterisks needed to mask the middle.
  // The number of asterisks is the total length minus the 2 visible characters.
  const maskedMiddle = "*".repeat(localPart.length - 2);

  // 6. Concatenate the parts back together.
  return firstChar + maskedMiddle + lastChar + domainPart;
}

// Global scope execution
const email = "apple.pie@example.com";
console.log(maskEmail(email));

//Temp conversion
function convertCtoF(temp){
  return temp * (9/5) + 32
}

convertCtoF(-30)
