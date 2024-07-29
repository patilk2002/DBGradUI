// Task 1: Use map to convert an array of numbers into an array of their cubes


function cubeArray(numbers) {
    return numbers.map(number => Math.pow(number, 3));
}

// Example usage:
console.log(cubeArray([1, 2, 3, 4])); // Output: [1, 8, 27, 64]


// Task 2: Use reduce to find the sum of all elements in an array

function sumArray(numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

// Example usage:
console.log(sumArray([1, 2, 3, 4])); // Output: 10



// Task 3: Use filter to find all prime numbers in an array

function sumArray(numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

// Example usage:
console.log(sumArray([1, 2, 3, 4])); // Output: 10


// Task 4: Use map, reduce, and filter to calculate the average of squared odd numbers in an array

function averageOfSquaredOdds(numbers) {
    const oddNumbers = numbers.filter(number => number % 2 !== 0);
    const squaredOdds = oddNumbers.map(number => number * number);
    const sumOfSquares = squaredOdds.reduce((total, number) => total + number, 0);
    return sumOfSquares / squaredOdds.length;
}

// Example usage:
console.log(averageOfSquaredOdds([1, 2, 3, 4, 5])); // Output: 11



// Task 5: Use map, reduce, and filter to find the longest string in an array of strings
function findLongestString(strings) {
    return strings.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

// Example usage:
console.log(findLongestString(["apple", "banana", "cherry", "date"])); // Output: "banana"


// Task 6: Use map to capitalize the first letter of each word in a sentence

function capitalizeFirstLetters(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage:
console.log(capitalizeFirstLetters("hello world from javascript")); // Output: "Hello World From Javascript"



// Task 7: Use filter to find all students who passed the exam

function passedStudents(students) {
    return students.filter(student => student.score >= 60);
}

// Example usage:
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 45 },
    { name: 'Charlie', score: 75 },
    { name: 'David', score: 30 }
];
console.log(passedStudents(students)); // Output: [{ name: 'Alice', score: 85 }, { name: 'Charlie', score: 75 }]



// Task 8: Create a Private Counter for Multiple Instances
function createInstanceCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

// Example usage:
const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2



// Task 9: Create a Promise-Based Calculator

function calculate(a, b, operation) {
    return new Promise((resolve, reject) => {
        switch (operation) {
            case 'add':
                resolve(a + b);
                break;
            case 'subtract':
                resolve(a - b);
                break;
            case 'multiply':
                resolve(a * b);
                break;
            case 'divide':
                if (b === 0) {
                    reject('Division by zero error');
                } else {
                    resolve(a / b);
                }
                break;
            default:
                reject('Invalid operation');
        }
    });
}

// Example usage:
calculate(10, 5, 'add').then(result => console.log(result)).catch(error => console.error(error)); // Output: 15
calculate(10, 0, 'divide').then(result => console.log(result)).catch(error => console.error(error)); // Output: Division by zero error



// Task 10: Calculate Total Score


function totalScore(objects) {
    let total = 0;
    objects.forEach(obj => {
        total += obj.score;
    });
    return total;
}

// Example usage:
const objects = [
    { score: 10 },
    { score: 20 },
    { score: 30 },
    { score: 40 }
];
console.log(totalScore(objects)); // Output: 100

