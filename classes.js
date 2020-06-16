/////////////// JAVASCRIPT - CLASES

/* 
//ES5

var PersonFive = function(name, year, job){
  this.name = name;
  this.year = year;
  this.job = job;
}

PersonFive.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.year;
  console.log(age);
}

var markFive = new PersonFive('Mark', 1986, 'Web Developer');


//subclass of PersonFive in ES5
var AthleteFive = function(name, year, job, olympicGames, medals){
  PersonFive.call(this, name, year, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

AthleteFive.prototype = Object.create(PersonFive.prototype);

AthleteFive.prototype.wonMedal = function(){
  this.medals ++;
  console.log(this.medals)
}

var markAthleteFive = new AthleteFive('Marco', 1956, 'swimmer', 3, 10);

markAthleteFive.calculateAge();
markAthleteFive.wonMedal();


// ES6 Clases !!!! clases are not hoisted

class PersonSix {
  constructor (name, year, job) {
      this.name = name;
      this.year = year;
      this.job = job;
  }
  calculateAge(){
      let age = new Date().getFullYear() - this.year;
      console.log(age);
  }

}

class AthleteSix extends PersonSix {
  constructor(name, year, job, olympics, medals){
      super(name, year, job);
      this.olympics = olympics;
      this.medals = medals;
  }

  wonMedal(){
      this.medals ++;
      console.log(this.medals);
  }
}

const markSix = new PersonSix('Marco', 1986, 'FS Web Developer');
const markAthleteSix = new AthleteSix('Hugo', 1990, 'Runner', 3, 10);

markAthleteSix.calculateAge();
markAthleteSix.wonMedal();
*/