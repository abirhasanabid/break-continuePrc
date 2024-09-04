/**
 * You have a list of numbers, and you want to print all the numbers until you find one that is a multiple of 7. Skip any numbers that are less than 5.
 */

const numbers = [2, 4, 6, 7, 9, 14, 3, 8];

for (const num of numbers) {
    if (num < 5) {
        continue;

    }
    if (num % 7 === 0) {
        console.log('the right number :', num);
        break;
    }
}

