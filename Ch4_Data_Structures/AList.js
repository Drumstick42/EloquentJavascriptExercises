function arrayToList(arr) {
  let list = {
    item: arr[0],
    rest: null
  };
  
  let ogList = list;
  
  for (let i = 0; i < arr.length - 1; i++)
  {
    list.rest = {
      item: arr[i+1], 
      rest: null
    }
    
    list = list.rest;
  }
  
  return ogList;
}

function listToArray(list) {
  let arr = [], index = 0;

  if (list == null) return arr;
  
  do {
    arr[index] = list["item"];
    list = list.rest;
    index++;
  } while(list != null)
    
    return arr;
}

function prepend(item, list) {
 let newList = {
   item: item,
   rest: list
 };
  
  return newList;
}

function nth(list, index) {
  if (index <= 0 || list.rest == null)
    return list.item;
  else
    return nth(list.rest, index -1 );
}