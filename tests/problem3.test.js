const {isEven} = require("../problems/problem3")

describe("should return true of false based on input", () => {
    test("should return true", () => {
        expect(isEven(4)).toBe(true)
    })
    test("should return false", () => {
        expect(isEven(7)).toBe(false)
    })
})