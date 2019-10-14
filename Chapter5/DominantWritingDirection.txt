// Must be run on book site for access to SCRIPTS

function dominantDirection(text) {
  // 1.) Find all the scripts, group by the direction
  let scripts = countBy(text, char => {
   let script = characterScript(char.codePointAt(0));
   return script ? script.direction : "undf";
  }).filter(({name}) => name != "undf");
 
  return scripts.reduce((a, b) => a.count < b.count ? b : a);  
}

function countBy(items, groupName) {
 let counts = [];
 for(let item of items) {
  let name = groupName(item);
  let index = counts.findIndex(c => c.name == name);
  if (index === -1) {
    counts.push({name, count: 1});
  }
  else {
    counts[index].count++;
  }
 }
  
 return counts;
}

function characterScript(charCodePoint) {
   for (let script of SCRIPTS) {
     if (script.ranges.some(([lo, hi]) => {
         return charCodePoint >= lo && charCodePoint < hi;
     })) return script;
   }
  
   return null;
}

console.log(dominantDirection("Hello!"));
// ? ltr
console.log(dominantDirection("Hey, ???? ?????"));
// ? rtl