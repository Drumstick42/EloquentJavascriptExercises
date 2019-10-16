// Can only access box object when unlocked
const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

// Unlocks the box, runs the specified function, locks the box before returning
// If box is already unlocked, then it leaves it unlocked
//(function) -> N/A
function withBoxUnlocked(body) {
  // Your code here.
  
  // Note: we can't expect what is going to blow up inside the input function.
  // We don't know what might blow up in the input function, so I'm going
  // to guess that we don't want to catch the exception, because we want
  // to know what the error is.
  // Use finally to make sure that the box is locked regardless of whether or 
  // Not an exception was raised.
   
  let initiallyLocked = box.locked;
  
  if(initiallyLocked)
    box.unlock();
    
  try {
    body(); 
  }
  finally {
   if(initiallyLocked)
     box.lock(); 
  }
}

// Works normally
withBoxUnlocked(function() {
  box.content.push("gold piece");
});

// Will throw an exception
try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked); // If true, the finally block executed.
// → true

// Now, test if box remains unlocked if initially unlocked
box.unlock();
try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// -> false