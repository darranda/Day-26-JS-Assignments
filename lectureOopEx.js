class Car {
    constructor (model, make, year) {
        this.model = model;
        this.make = make;
        this.year = year;
        this.speed = 60 //mp
        this.time = 1 //hr
    }

    mph () {
        return this.speed / this.time;
    }
}

let sedan = new Car('Explorer', 'Ford', 2017);

console.log(sedan);
console.log(Car);
