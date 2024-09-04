/**
 * You have a list of numbers, and you want to find the first number that is greater than 10. Once you find it, stop the loop and print that number.
 */

const numbers = [2, 5, 11, 8, 12, 4, 18];

for (const number of numbers) {
    if (number > 10) {
        console.log(number);
        break;
    }
    // console.log(number);
}