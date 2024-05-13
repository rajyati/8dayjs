//Challenge : Factorial Finder

// Write a function factorial that taken a non- negative integer num as input and return its factorial. 
// the factorial of a non-negative integer n , denoted as n! , the product of all positive integers less than or equal 
// to n, the factorial of 0 is defined as 1,

// Here are examples of factorial calculations:

const factorial = (num) =>{
    let fact = 1;
    for(let i=1; i<=num;i++){
        fact = fact *i;
    }
    return fact;
}
 
 console.log(factorial(5));
 console.log(factorial(0));
 console.log(factorial(3));
