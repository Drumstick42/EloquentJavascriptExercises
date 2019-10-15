// PGroup is a group similar to what was seen in chapter 6, except that 
// it returns a new instance whenever modified, instead of modifying the internal array
class PGroup {

  
  // DO not use constructor
  constructor(oldGroupItems)
  {
    this._items = [];
    for (let item of oldGroupItems)
      this._items.push(item);
  }
  
  static get empty() {
   return new PGroup([]); 
  }
  
  add(item)
  {
     let newGroup = new PGroup(this._items);
     if(!newGroup.has(item))
      newGroup._items.push(item);
     return newGroup;
  }
  
  delete(item)
  {
    let newGroup = new PGroup(this._items);
    newGroup._items = newGroup._items.filter(i => i != item);
    return newGroup;
  }
  
  has(item)
  {
    return this._items.includes(item); 
  }
  
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false