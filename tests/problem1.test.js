const {longestWord} = require("../problems/problem1")

test("should return longest word in array (sandwich)", () => {
    const testArray = ["cheese", "bacon", "bread", "sandwich", "pizza" ]
    expect(longestWord(testArray)).toBe("sandwich")
})