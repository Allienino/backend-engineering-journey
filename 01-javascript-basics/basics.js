
// const name = "Sultan";
// console.log("My name is " + name);

// const a = 5
// const b = 3

// console.log(a+b)

// let name = "Backend"
// let name1 = "Sultan"
// let name2 = "Backend"
// let name3 = "JS"


// console.log(name.length)
// console.log(name1.length);
// console.log(name2.length);
// console.log(name3.length);

// const num1 = 10;
// const num2 = 5;

// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num1/num2)

// const price = 100;
// const quantity = 3;

// console.log("Total price is " + price*quantity)
// console.log(name1.toUpperCase())

// const namee = "Sultan";
// const age = 20;

// console.log("My name is " + namee + " and I am " + age + " years old")

// const item1 = "Book";
// const price1 = 500;
// const quantity1 = 2;

// const total = price1 * quantity1;

// console.log("You bought " + quantity1 + " " + item1 +"(s)." + " Total cost is " + price1*quantity1)
// console.log(`You bought ${quantity1} ${item1}(s). Total cost is ${total}`);

function greetUser(name = "Hapiness") {
    console.log(`Hello ${name}`)
}

greetUser("Sultan")

function checkEven(num) {
    if(num % 2 === 0){
        console.log ("Even")
    } 
    else{
        console.log ("Odd")
    }
        
    // your code checkEven(4) → EvencheckEven(7) → Odd
}

checkEven(7)

for (let i = 1; i<6; i++) {
    console.log(i)
    
}

function sumNumbers(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total = total + i;
    }

    return total;
}

 console.log(sumNumbers(5)); 

function findMax(a, b) {
    if(a>b){
        console.log(`The bigger number is ${a}`)
    }
    else{
        console.log (`The bigger number is ${b}`)
    }
    // return bigger number
}

findMax(20, 200)

function countLetters(word) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        count = count + 1;
    }

    return count;
}

console.log(countLetters("Sultan"));

function reverseString(word) {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed = reversed + word[i];
    }

    return reversed;
}

console.log(reverseString("Shola"));