/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";
let statement1 = statement.substring(0, 4);
let statement2 = statement.substring(8, 26);

result = statement1 + statement2;

// let result = "";

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
