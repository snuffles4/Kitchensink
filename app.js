var name = "Christian";

const states = 50;

//computing the result of 5+4

var sum = (5 + 4);

function sayhello() {
    alert("Hello World!")
        //Function for helloWorld!
}

sayhello()


function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    } else {
        console.log("Welcome!")
    }
}
var people = [
    { name: "charles", age: 21 },
    { name: "abby", age: 27 },
    { name: "james", age: 18 },
    { name: "john", age: 17 }

]

for (var i = 0; i < people.length; ++i) {
    checkAge(people[i].name, people[i].age)
}

var vegatables = [
    "carrot", "apples", "bannana",
    "asparagus", "coin"
]

for (var o = 0; o < vegatables.length; o++) {
    console.log(vegatables[o])
}
var pet = { name: "Fen", breed: "hound" }

console.log(pet.name, pet.breed)

var otherpeople = [
    { name: "Chase", age: 23 },
    { name: "bob", age: 12 },
    { name: "jose", age: 20 },
    { name: "caleb", age: 23 },
    { name: "reid", age: 24 }
]
for (var p = 0; p < otherpeople.length; ++p) {
    checkAge(otherpeople[p].name, otherpeople[p].age)
}

function GetLength(word) {
    return word.length

}

var Wordlength = GetLength("Hello world")
if (Wordlength % 2 == 0) {
    console.log("The world is nice and even")
} else if (Wordlength % 2 !== 0) {
    console.log(Wordlength)
    console.log("The world is an odd place.")
}