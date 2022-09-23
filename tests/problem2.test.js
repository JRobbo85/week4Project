const {lastThree} = require("../problems/problem2")

test("should return 4, 5, 6", () => {
    const arr = [1, 2, 3, 4, 5, 6]
    expect(lastThree(arr)).toBe[4, 5, 6]
})