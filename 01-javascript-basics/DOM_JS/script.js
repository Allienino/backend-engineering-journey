 /** console.log(`Hello World! External JS`)

 //let a = document.getElementById('pOne')

 //let b = document.getElementsByTagName('p')

// let c = document.getElementsByClassName('pCool')
 
//let d = document.querySelector(".heading")

//let e = document.querySelectorAll(`[title='more info']`)

let para1 = document.querySelector('p')
let para2 = document.getElementById('pTwo')

para1.id = "Initial"

//let result3 = document.getElementById('newDiv')

let meMe = document.getElementById('p8');

// meMe.style.color = 'red';
// meMe.style.backgroundColor = 'green';

meMe.innerHTML = "Lagbaja Tamedo"

console.log(meMe.innerHTML);

var myDiv = document.createElement('div');

var parentEl = document.querySelector('body');

parentEl.appendChild(myDiv)**/

function printText() {
    console.log('I love coding')
}

//setInterval (printText, 3000)

function alertText() {
    alert('I love coding')
}

// setTimeout(alertText,4000)

function domManipulation(){
    var newDiv = document.createElement('div')
    newDiv.style.backgroundColor = 'red';
    newDiv.style.width = '200px';
    newDiv.style.height = '80px';

    var bodyVar = document.querySelector('body');
    bodyVar.appendChild(newDiv)

}

setTimeout(domManipulation,4000)