// Group is an implementation of a set.
// Each element on the set is unique.
class Group {
  constructor()
  {
    // Underscore implies private
    this._group = [];  
  }
  
  // Add item to set if it is not present.
  add(item) {
    if (!this.has(item))
      this._group.push(item);
  }
  
  // Remove item from the set if it is present.
  delete(item) {
    let index = this._group.findIndex(i => i === item);
    if (index !== -1) {
     // Swap the element to remove with the last element, then pop.
     // Could also use Array.filter. That might look simpler, but would be slower
     // due to the copy.
     this._swap(index, this._group.length - 1);
     this._group.pop();
    }
      
  }
  
  // Check if item is present in the set
  has(item) {
   return this._group.includes(item); 
  }
  
  // Creates a new group object from the elements of an iterable
  static from(iterable) {
    group = new Group();
    for (let item of iterable) {
      group.add(item);
    }
    
    return group;
  }
  
  // Helper function used to swap values in the array
  _swap(idx0, idx1) {
      let temp = this._group[idx0];
      this._group[idx0] = this._group[idx1];
      this._group[idx1] = temp;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false