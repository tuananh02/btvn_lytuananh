const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  

////////////////////////some/every/////////////////////
// Q1 Does any inventor have the letter 'y' in their name?
 console.log(inventors.includes('y'));
//Q2 Does every inventor have the letter 'e' in their name?


function checkInventor(e){
    return e.includes('e')
};
console.log(inventors.every(checkInventor))



// Q3 Does every inventor have first name that's longer than 4 characters?
function checkFirstname(inventor){
  for(var i=0;i<inventor.length;i++){
    if(inventor[i].charAt(3)==' '){
      return false
    }
  }
}
console.log(inventors.every(checkFirstname));
/////////////////filter////////////////////////////////////
// Q4 Print out an array of the inventors whose name starts with 'A'.
function checkA(nameA){
  for(var i=0;i<nameA.length;i++){
    if(nameA[i].charAt(0)=='A'){
      return true
    }
  }
}
console.log(inventors.filter(checkA));

// Q5 Print out an array of the inventors whose name contains 'n'.
function checkn(containN){
  for(var i=0;i<containN.length;i++){
    for(var j=0;j< containN[i].length;j++){
      if(containN[i][j]=='n'){
        return true
      }
    }
  }
};
console.log(inventors.filter(checkn));


////////////////////find/findIndex///////////////////////
// Q6 Find the inventor that has a middle name.



const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
//Q7  Find the number divisible by 7.
function divi7(number){
  if (number%7==0){
    return true
  }
}
console.log(numbers.find(divi7))
// Q9 Print out an array of the numbers which are prime.
function checkPrime(number){
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if(number==1){
      return false;
    }
    else if (number % i === 0) {
      return false};
  }
  return true;
  }
console.log(numbers.filter(checkPrime))


//   Q10  Print out an array of every number multiplied by 100.
function mul(num){
  return num*100
}
console.log(numbers.map(mul));
// Q11  Given an array, Write a function to reverse the items in that array.
const newArray = numbers.reverse();
console.log(newArray)