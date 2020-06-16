/////////////// JAVASCRIPT - CONSTRUCTOR
/*
var marco = {
  name: 'Marco',
  yearOfBirth: 1986,
  job: 'Front end developer'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge  = function() {
  console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var marco = new Person('Marco', 1986, 'front end developer');
var fany = new Person('Fany', 1990, 'motion designer');
var hugo = new Person('Hugo', 1990, 'suplay chain analyst');

marco.calculateAge();
fany.calculateAge();
hugo.calculateAge();

console.log(marco.lastName);
console.log(fany.lastName);
console.log(hugo.lastName);
*/



// Object.create

/*
var personProto = {
  calculateAge: function() {
      console.log(2020 - this.yearOfBirth);
  }
};

var marco = Object.create(personProto);
marco.name = 'Marco';
marco.yearOfBirth = 1986;
marco.job = 'Front end Developer';

var fany = Object.create(personProto, {
  name: { value: 'Fany' },
  yearOfBirth: { value: 1990 },
  job: { value: 'motion designer' }
});
*/