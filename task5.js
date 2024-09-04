/**
 * You have a list of numbers, and you want to print only the odd numbers, skipping the even ones.
 */

const numbers = [1, 2, 3, 4, 5, 6];

for (const num of numbers) {
    if (num % 2 === 0) {
        continue;
    } else {
        console.log('odd number :',num);
    }
}