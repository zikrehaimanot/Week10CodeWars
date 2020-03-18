// Given a series of numbers as a string, determine if the number represented by the string is divisible by three.
//
// You can expect all test case arguments to be strings representing values greater than 0.
//
//
//


function divisibleByThree(str){
  let sum = 0;
  for(let i = 0; i < str.length; i++){
    let char = Number(str[i]);
    sum += char
  }
  if(sum%3 === 0) return true;
  return false;
}
