/* 
Given an array of words
write a function that returns
the longest word 
*/

const words = ["cheese", "bacon", "bread", "sandwich", "pizza"]

const longestWord = (arr) => {
    let longest = arr[0]
    for (let word of arr){
        if (word.length > longest.length){
            longest = word
        }
    }
    return longest;
}

console.log(words)
console.log(longestWord(words))

module.exports = {
    longestWord,
}