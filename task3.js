/**
 * Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
 */

// for (let i = 1; i <= 100; i++) {
//     if (Math.sqrt(i) % 1 === 0) {    // condition ta clear na 
//         console.log(i)
//         break;
//     }
// }

for (let i = 1; i <= 100; i++) {
    if (Math.sqrt(i) % 1 === 0) { // Check if 'i' is a square number
      console.log(`Encountered the first square number: ${i}`);
      break; // Stop the loop when a square number is found
    }
    console.log(i);
  }