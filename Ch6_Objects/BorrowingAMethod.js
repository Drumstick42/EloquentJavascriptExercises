// JS objects have a method called hasOwnProperty, that returns true
// If the argument is a property of the object, but not the prototype.
// Below, we added a hasOwnProperty the map.
// How do we call the hasOwnProperty belonging to the Object prototype?

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call

// Old call (error):
//console.log(map.hasOwnProperty("one"));
// New call:
console.log(map.prototype.hasOwnProperty.call(map, "one"));
// → true