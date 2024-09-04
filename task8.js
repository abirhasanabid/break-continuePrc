/**
 * You have a list of numbers from 1 to 10, and you want to print only the numbers that are not divisible by 3.
 */

/**
 * Task: Modify the code to count how many numbers were skipped (those divisible by 3) and print that count after the loop.
 */


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        count++
        continue;
    }
    else {
        console.log('This numbers are not divisible by 3 :', numbers[i])
    }
}
console.log(count);