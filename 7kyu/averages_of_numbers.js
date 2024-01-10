/*
P:
  Input: array of numbers
  Output: array of number - averages 
  
  Rules: if array is empty, 1 value or null, return empty arr
  
E:
  [1, 2, 3, 5, -8]
    
  [1.5, 2.5, 4, -1.5]
  
D: 
  array of nums, arr methods
  
A: 
  
  -if array's length is 1 or less, or null
    -return empty array 
    
  -init empty arr to store output [2, 4, 3, -4.5]
    
  -iterate through the input array, stop at the last value in the array 
    -init current value // 
    -init sum to store the current value plus the next  
    -init avg to store sum divided by 2 //
    -push avg to result array 
  
  -return result array 
    
*/

function averages(numbers) {
    console.log(numbers)
    if(numbers === null || numbers.length <= 1)  {
      return [];
    }
    
    let result = [];
    for(let i = 0; i < numbers.length - 1; i++){
      let curr = numbers[i];
      let sum = curr + numbers[i + 1];
      let avg = sum / 2;
      result.push(avg);
    }
    return result; 
  }