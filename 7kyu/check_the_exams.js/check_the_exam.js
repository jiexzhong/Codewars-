/*
P: 
  -Input: array of strings
  -Output: number, for each matching string
  
  -Rules: arrays are not empty, same length
          +4 for matching
          -1 for non matching
          +0 for empty 
          if score is less than 0, return 0 
          
E: 
  ["a", "a", "b", "b"], ["a", "c", "b", "d"]
  +4, -1, +4, -1 = 6
  
  ["a", "a", "c", "b"], ["a", "a", "b",  ""]
  +4, +4, -1, 0 = 7 
  

D: 
  array, array methods 

  
A: 
  -init count set to 0 //count -> 6, 
  
  -iterate through arr1 
    -if current value is equal to the current value of arr2 // b = e
      -count increment by 4 // 4, 4 - 1, 3 + 4 = 7, 7 - 1
    -else count decrement by 1 //4 - 1 // 7 - 1
    
    -if current value is undefined, 
      -count plus zero / 7 + 0 = 7 
        
  -if count is less than 0, return 0
  
  -return count // 6 
  
  
*/



function checkExam(array1, array2) {

    let count = 0;
     
     for(let i = 0; i < array1.length; i++) {
       if (array1[i] === array2[i]) {
         count += 4
       } else if(array2[i] === "" ) {
         count += 0
       } else {
         if(array1[i] !== array2[i]){
         count -= 1
       }
         
       }
       console.log(count)
     }
       if(count <= 0)  {
         return 0
       }
       
     return count 
   }