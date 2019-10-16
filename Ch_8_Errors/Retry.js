// Inheirits from error. Allows catching of this specific exception
class MultiplicatorUnitFailure extends Error {}

// 20% chance to multiply two numbers, 80% chance to fail.
// Used for practice writing exception handlers
function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  
  // Return the value produced if primitiveMultiply works, repeat otherwise
  // only if the exception raised is a MultiplicatorUnitFailure
  while(true) {
    try {
     return primitiveMultiply(a, b); 
    } 
    catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));
// ? 64