/*
Problem: Given an array of integers, and a number, Search the array to find a pair that sum to equal the given number.

Test Cases:
Input: [1, 2, 4, 5, 5, 6] and 8
Output: [2, 6]

Input: [1, 1, 2, 4, 4] and 3
Output: [1, 2]

Input: [] and 3
Output: null */

const number = [1, 2, 4, 5, 5, 6]

const addCheck = (num) => {
    let length = number.length
    
    for (let i = 0; i < length; i++){
        for (let x = 0; x < length; x++){
        if (i == x){
             null;
        }
        else if (number[i] + number[x] == num){
                let result = [number[i], number[x]]
                return result           
            }
        else{
            null;
        }}
    }
}


console.log(addCheck(8))
console.log(addCheck(10))
console.log(addCheck(3))
console.log(addCheck(30))
console.log(addCheck(5))

module.exports = {
    addCheck,
}