let deepEqual = function(obj1, obj2)
{
  let keys = Object.keys(obj1);
  for (let key of keys) {
   if (typeof obj1[key] == "object" && typeof obj2[key] == "object") {
      	if (!deepEqual(obj1[key], obj2[key])) 
            return false;
   }
   else {
    if (obj1[key] !== obj2[key]) 
     return false;
   }
  }
  
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(Object.keys(obj));
            
console.log(deepEqual(obj, obj));
// ? true
console.log(deepEqual(obj, {here: 1, object: 2}));
// ? false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// ? true