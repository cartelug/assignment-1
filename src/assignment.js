// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================

/**
 * Challenge - 1
 * Sum of numbers from 1 to destination
 */
export function sumOfNumbersTo(destination) {
    let sum = 0;
    for (let i = 1; i <= destination; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Challenge - 2
 * Even numbers within range
 */
export function evenNumbersWithin(destination) {
    const arrayOfEvenNumbers = [];
    let sum = 0;

    for (let i = 0; i <= destination; i++) {
        if (i % 2 === 0) {
            arrayOfEvenNumbers.push(i);
            sum += i;
        }
    }

    return {
        count: arrayOfEvenNumbers.length,
        sum,
        arrayOfEvenNumbers,
    };
}

/**
 * Challenge - 3
 * Celsius → Fahrenheit conversion
 */
export function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers.map(num => Math.trunc((num * 9) / 5 + 32));
}

/**
 * Challenge - 4
 * Odd numbers within range
 */
export function oddNumbersWithin(destination) {
    const arrayOfOddNumbers = [];
    let sum = 0;

    for (let i = 1; i <= destination; i++) {
        if (i % 2 !== 0) {
            arrayOfOddNumbers.push(i);
            sum += i;
        }
    }

    return {
        count: arrayOfOddNumbers.length,
        sum,
        arrayOfOddNumbers,
    };
}

/**
 * Challenge - 5
 * Multiples of a given factor
 */
export function findMultiples(arrayOfNumbers, factor) {
    const arrayOfMultiples = arrayOfNumbers.filter(num => num % factor === 0);
    const sum = arrayOfMultiples.reduce((acc, n) => acc + n, 0);

    return {
        count: arrayOfMultiples.length,
        sum,
        arrayOfMultiples,
    };
}

/**
 * Challenge - 6
 * Factorials of numbers
 */
export function calculateFactorials(arrayOfNumbers) {
    function factorial(n) {
        if (n < 0) return 0;
        if (n === 0) return 1;
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    return arrayOfNumbers.map(num => factorial(num));
}

/**
 * Challenge - 7
 * Prime numbers
 */
export function findPrimeNumbers(arrayOfNumbers) {
    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    const arrayOfPrimes = arrayOfNumbers.filter(num => isPrime(num));
    const sum = arrayOfPrimes.reduce((acc, n) => acc + n, 0);

    return {
        count: arrayOfPrimes.length,
        sum,
        arrayOfPrimes,
    };
}

/**
 * Challenge - 8
 * Double the values
 */
export function doubleTheValues(arrayOfNumbers) {
    return arrayOfNumbers.map(num => num * 2);
}

// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================
