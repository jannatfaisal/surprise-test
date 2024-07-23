// // QUETION 1

// function reverseArray(arr) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
//     return arr;
// }

// const originalArr = [1, 2, 3, 4, 5];
// const reversedArr = reverseArray(originalArr);
// console.log("Original Array:", originalArr);
// console.log("Reversed Array:", reversedArr);

// // QUESTON 2



// function filterNegativeNumbers(arr) {
//     return arr.filter(function(number) {
//       return number >= 0;
//     });
//   }
  

//   const numbers = [1, -3, 5, -6, 8, -2, 7];
//   const positiveNumbers = filterNegativeNumbers(numbers);
//   console.log(positiveNumbers); 

// // QUETION 3

// function countVowels(str) {
  
//     const vowels = /[aeiouAEIOU]/g;
    

//     const matches = str.match(vowels);
    
  
//     return matches ? matches.length : 0;
//   }
  
 
//   const sentence = "Hello, My name is jannat faisal?";
//   const vowelCount = countVowels(sentence);
//   console.log(vowelCount); 

// //   question 4


// function isPalindrome(str) {

//     const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    

//     const reversedStr = cleanedStr.split('').reverse().join('');
    
//     return cleanedStr === reversedStr;
//   }
  
  
//   console.log(isPalindrome("civic")); 
//   console.log(isPalindrome("deed")); 
//   console.log(isPalindrome("rotor")); 
//   console.log(isPalindrome("repaper")); 
//   console.log(isPalindrome("hello")); 
//   console.log(isPalindrome("no lemon, no melon"));

// //   quetion 5

// function isInRange(a, b) {
    
//     const isAInRange = a >= 50 && a <= 99;
//     const isBInRange = b >= 50 && b <= 99;
    
    
//     return isAInRange || isBInRange;
//   }
  

//   console.log(isInRange(55, 30)); 
//   console.log(isInRange(45, 75)); 
//   console.log(isInRange(20, 40)); 
//   console.log(isInRange(99, 100)); 
//   console.log(isInRange(49, 50)); 

// //   question 6

//   function getMappedMinValue(arr, mapFunction) {

//     const mappedValues = arr.map(mapFunction);
    
    
//     const minValue = Math.min(...mappedValues);
    
//     return minValue;
//   }
  
  
//   const number = [1, 2, 3, 4, 5];
//   const square = num => num * num;
  
//   const minSquareValue = getMappedMinValue(number, square);
//   console.log(minSquareValue); 


// //   question 7


// function repeatLastThreeChars(str) {
    
//     if (str.length < 3) {
//       return "String length must be 3 or above";
//     }
    
    
//     const lastThreeChars = str.slice(-3);
    
    
//     const updatedString = lastThreeChars.repeat(4);
    
//     return updatedString;
//   }
  
//   console.log(repeatLastThreeChars("Jannat")); 
//   console.log(repeatLastThreeChars("Hello"));   
//   console.log(repeatLastThreeChars("xyz"));        
//   console.log(repeatLastThreeChars("zyx"));         


// //   question 8


// function findAngleType(angle) {
//     if (angle > 0 && angle < 90) {
//       return "Acute angle";
//     } else if (angle === 90) {
//       return "Right angle";
//     } else if (angle > 90 && angle < 180) {
//       return "Obtuse angle";
//     } else if (angle === 180) {
//       return "Straight angle";
//     } else {
//       return "Invalid angle";
//     }
//   }
  
  
//   console.log(findAngleType(50));   
//   console.log(findAngleType(60));   
//   console.log(findAngleType(145));  
//   console.log(findAngleType(186));  
//   console.log(findAngleType(300));  



// // question 9


// function smallestRoundNumber(num) {
   
//     if (num % 10 === 0) {
//       return num;
//     }
    
  
//     return Math.ceil(num / 10) * 10;
//   }
  
 
//   console.log(smallestRoundNumber(592)); 
//   console.log(smallestRoundNumber(590));  
//   console.log(smallestRoundNumber(1234)); 
//   console.log(smallestRoundNumber(99));   
//   console.log(smallestRoundNumber(1000)); 



// //   question 10

// function findIndexOfItem(arr, item) {
    
//     for (let i = 0; i < arr.length; i++) {
      
//       if (arr[i] === item) {
        
//         return i;
//       }
//     }
    
//     return -1;
//   }
  
  
//   const array = [90, 20, 60, 40, 80];
//   const itemToFind = 60;
  
//   const index = findIndexOfItem(array, itemToFind);
//   console.log(index); 





