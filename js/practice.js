// 
// JavaScript != JAVA
// ES6 ECMAScript

var text = "hello";
var number = 5;

// console.log(typeof number);

var number1 = 11;
var number2 = 10;
// var number2 = '21';
var number3 = number1 + number2;
// console.log('number3:' + number3);
// ===  !== 
// console.log(number1 === number2);

// console.log(number1 >= number2);

var budget = 19000;

budget = budget + 100000000;

// 
if (budget >= 50000) {
    console.log('' + budget + '');
} else if (budget >= 10000 && budget < 50000) {
    console.log('' + budget + '');
} else {
    console.log('' + budget + '');
}

// function

function addNumbers(a, b) {
    var number = a + b;
    console.log(number);
}

addNumbers(15, 20);
/*
var dog = {
    name: '',
    age: 5,
    breed: ''
};

console.log(dog);
*/

var Dog = function (name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
};

var dog1 = new Dog('', 6, '');
var dog2 = new Dog('Bob', 8, '');

console.log('' + dog2.name + '' + dog2.age + ',' + dog2.breed);
