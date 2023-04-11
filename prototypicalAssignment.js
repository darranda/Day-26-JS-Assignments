/* Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods (an array).*/

function Person (firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = favoriteFoods;

  // Add a property on the Person object called family which is an empty array.

  this.family = [];
}

/*Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object 
created by the Person constructor concatenated together.*/

Person.prototype.fullName = function () {
  //console.log(this.firstName + ' ' + this.lastName);
}
let peter = new Person('Peter', 'Oleary', 'Green', 42, ['pasta', 'pizza']);
peter.fullName();

/* Overwrite the toString method from the Object prototype by creating a toString method for Person.*/

Person.prototype.toString = function () {
 //console.log(lisa);
}

let lisa = new Person('Lisa', 'Oleary', 'Red', 30, ['rice', 'chicken']);
lisa.toString();


/*Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. 
To make sure that the object you are adding is an object constructed from the Person constructor - take a look at the instanceofoperator. 
Make sure that your family array does not include duplicates! This method should return the length of the family array.*/

Person.prototype.addToFamily = function (person) {
  this.family.push(person);
return this.family.length;
}
let susan = new Person('Susan', 'Oleary', 'Pink', 20, ['burger', 'fries']);
let ray = new Person('Ray', 'Oleary', 'Blue', 8, ['nuggets', 'hotdog']);
let chris = new Person('Chris', 'Oleary', 'Yellow', 10, ['pancakes', 'chips']);
susan.addToFamily();
ray.addToFamily();
chris.addToFamily();

//console.log(susan.family.length);
//console.log(lisa.family.length);
//console.log(chris.firstName); 
//console.log(susan.favoriteColor);
//console.log (ray.favoriteFoods);
