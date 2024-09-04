/**
 * You have a list of words, and you want to find the first occurrence of the word "JavaScript". Once you find it, stop the loop and print a message.
 */

let words = ["HTML", "CSS", "Python", "JavaScript", "Ruby", "Java"];

const str = "JavaScript";

for (const word of words) {
    if (word === str) {
        console.log('this is the word :', word);
        break;
    }
    console.log(word)
}