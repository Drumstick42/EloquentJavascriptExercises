// Your code here.
let range = (start, end, step = 1) => {
  let arr = [];
 
  if(end < start) step = -1;  

  if (step > 0) {
    for(let i = start; i <= end; i += step) 
      arr.push(i);
  }
  else {
    for(let i = start; i >= end; i += step)
      arr.push(i);
  }
  
  return arr;
}

let sum = numbers => {
  let s = 0;
  for (let number of numbers)
    s  += number;

  return s;
}