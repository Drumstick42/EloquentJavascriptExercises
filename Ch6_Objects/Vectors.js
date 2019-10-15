// Vec represents 2D vector in space
// Defined using class notation
class Vec {
 constructor(x, y) {
   this.x = x;
   this.y = y;
 }
  
 plus(vecToAdd) {
 	return new Vec(this.x + vecToAdd.x, this.y + vecToAdd.y);
 }
  
 minus(vecToSub) {
    return new Vec(this.x - vecToSub.x, this.y - vecToSub.y); 
 }
  
  get length() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }
}

// Vec2 also represents a 2D vector, but using the messier, 
// older way of defining a constructor
function plus(vecToAdd) {
 	return new Vec(this.x + vecToAdd.x, this.y + vecToAdd.y);
 }
  
function minus(vecToSub) {
    return new Vec(this.x - vecToSub.x, this.y - vecToSub.y); 
}


function Vec2(x, y) {
  this.x = x;
  this.y = y;
}

Vec2.prototype.plus = plus;
Vec2.prototype.minus = minus;
// Can't figure out a way to create a getter on the prototype


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// ? Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// ? Vec{x: -1, y: -1}
console.log(new Vec2(3, 4).length);
// ? 5