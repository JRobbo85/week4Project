const {addCheck} = require("../problems/problem5")





describe("should return 2 numbers that total num", () => {
    test("should return 2, 6", () => {
        let number = [1, 2, 4, 5, 5, 6]
        let answer = [2, 6]
        expect(addCheck(8)).toEqual(answer)
    })
    test("should return 1, 2", () => {
        let number = [1, 1, 2, 4, 4]
        let answer = [1, 2]
        expect(addCheck(3)).toEqual(answer)
    })
})