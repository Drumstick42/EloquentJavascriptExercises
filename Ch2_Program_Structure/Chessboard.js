let s = "";

for(let i = 1; i <= 100; i++) {
  let w = "";
  
  if(i % 3 == 0) w += "Fizz";
  if (i % 5 == 0) w += "Buzz";
  
  s = s + (w || i) + "\n";
}

console.log(s);
