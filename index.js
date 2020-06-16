/////////////// JAVASCRIPT - HOISTING

/* 
// functions hoisting 
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/

/////////////// JAVASCRIPT - SCOPING
/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'marco';
    //console.log(c);
    console.log(a+d);
}
*/


/////////////// JAVASCRIPT - THIS KEYWORD

/*
//console.log(this);

calculateAge(1986);

function calculateAge(year) {
    console.log(2020 - year);
    console.log(this);
}

var marco = {
    name: 'marco',
    yearOfBirth: 1986,
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

marco.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = marco.calculateAge;
mike.calculateAge();
*/