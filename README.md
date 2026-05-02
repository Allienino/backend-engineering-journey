# 🚀 Backend Engineering Journey

Hi, I'm learning backend engineering from scratch using JavaScript (Node.js).

## 📚 What I'm Learning

* JavaScript fundamentals
* Node.js
* APIs
* Databases
* Authentication

## 🎯 Goal

To become a backend engineer and build real-world applications.

## Day 1: Introduction to Node.js

## What I Learned

>How to run JavaScript using Node.js
>Variables and functions in JavaScript
>Basic program execution in the terminal

## Code Example
const yourname = "Sultan";

function greet(user) {
    return "Hello " + user + ", you are learning backend!";
}

console.log(greet(yourname));

## Output

Hello Sultan, you are learning backend!

## Notes

This is my first step into backend engineering. I learned how Node.js allows JavaScript to run outside the browser.

## 📅 Day 2: First Backend Server

### What I Learned

* What a server is
* How to create a server using Node.js
* How a browser sends requests and receives responses

### Code Example

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from your first backend server!");
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
```

### Output

When I open http://localhost:3000 in my browser, I see my custom message.

### Notes

Today I learned how my computer can act like a server and respond to browser requests.

## 📅 JavaScript Basics Practice

### Topics Covered

* Variables
* Numbers & Operators
* Strings
* Data Types

### What I Practiced

* String manipulation
* Basic calculations
* Combining variables
* Using typeof

### Notes

I practiced how to store data, manipulate strings, and perform operations using JavaScript.
