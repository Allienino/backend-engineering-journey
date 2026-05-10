var studentInfo = {
    studentName : "John Bull",
    age : 17,
    admitted :true,
    hobbies : ['swimming','running','jumping'],
    greeting : function (endWord) {
        console.log(`The Student said, ${endWord}`)
    }
}

studentInfo.studentName = "Taiwo Taiwo"
studentInfo.age = studentInfo.age-1
studentInfo.hobbies[2]= 'hiking'
studentInfo.hobbies.push('cooking')
studentInfo.greeting = function (endWord,time) {
     console.log(`The Student said, ${endWord} this ${time}`)
}

console.log(studentInfo.studentName)
console.log(studentInfo.age)
console.log(studentInfo.admitted)
console.log(studentInfo.hobbies)
studentInfo.greeting("Hi!","morning")


var car = {
    name: "Tesla",
    model: "Cyber Truck",
    speed: 250,
    availability: false 
}

//console.log(car["model"])
car["speed"] = car["speed"] +10

console.log(car["speed"])

for (let i in car) {
    console.log(car[i])
    
}

const arrowFunc = (a,b) => {
    //console.log(`Hello There!`)
    return a*b
}


let result = arrowFunc(4,10);
console.log(result)