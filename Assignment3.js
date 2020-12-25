class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  change_color(newColor) {
    this.color = newColor;
  }
  description() {
    return "Name: " + this.name + " Color: " + this.color;
  }
}

let c = new Car("Honda","white");
console.log(c.description());
c.change_color("red");
console.log(c.description());

class Animal {
  constructor(legs,name,weight,child) {
    this.legs = legs;
    this.name = name;
    this.weight = weight;
    if(child===undefined) {
      this.child = null;
    }
    else {
      this.child = child;
    }
  }
  description() {
    if(this.child===null) {
      return "# of legs: " + this.legs + " Name: " + this.name + " Weight: " + this.weight;
    }
    else {
      return "# of legs: " + this.legs + " Name: " + this.name + " Weight: " + this.weight + " Child's name: " + this.child;
    }
  }
  eat() {
    this.weight = this.weight + this.weight/10;
  }
  starve() {
    this.weight = this.weight/2;
  }
}
let a = new Animal(4,"Woof", 100);
let b = new Animal(2,"Hii",45,"Hoo");
console.log(a.description());
console.log(b.description());
a.eat();
b.eat();
console.log(a.description());
console.log(b.description());
a.starve();
b.starve();
console.log(a.description());
console.log(b.description());