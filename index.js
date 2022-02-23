// Global Valiables
let cycles = 0;
let primes = [];

// FUNCTION: isPrime
// Description: Check if one number is prime
// Arg: int number
// Return: boolean
export default function isPrime(numberForTest = 7919){
  if( numberForTest < 1 ) return [ 'error', [] ];
  
  let result = true;
  primes = [2];
  if( numberForTest == 1 ) {
    primes = [];
    result = false;
  }

  console.time('Time');
  for(let x=3; x <= numberForTest; x=x+2){ 
    result = checkPrime(x);
  }
  console.timeEnd('Time');

  // INFOS:
  console.log( 'Is prime:', numberForTest, result );
  console.log( 'Quantity:', primes.length, 'primes' );
  console.log( 'All primes found:', primes );
  console.log( 'Necessary "for()" cycles:', cycles );
  
  return [ result, primes ];

} // isPrime



// FUNCTION: checkPrime
// Description: Check if one number is prime
// Arg: int number
// Return: boolean
const checkPrime = function(number){

  const sqrtNumber = Math.sqrt(number);
  let checkPrime = true;
  let primesLength = primes.length;

  for(let i=0; i <= primesLength; ++i){
    ++cycles; // used only for DEV, comment = +20% faster

    const currentValue = primes[i];
    
    if(currentValue > sqrtNumber) {
      checkPrime = true;
      break;
    } 
    if(number % currentValue === 0) {
      checkPrime = false;
      break;
    }  

  }

  if(checkPrime) primes.push(number);

  return checkPrime;

} // checkPrime --------------------------------------------







