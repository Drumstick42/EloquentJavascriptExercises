function reverseArray(array) {
  let newArr = [];
  for (let item of array) 
    newArr.unshift(item);
  
  return newArr;
}

function reverseArrayInPlace(array) {
  let start = 0, end = array.length - 1;
  while(start < end) {
    temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    
    start++;
    end--;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// ? ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// ? [5, 4, 3, 2, 1]