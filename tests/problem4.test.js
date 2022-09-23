const {multiply} = require("../problems/problem4")

const values = {
    hp: 100,
    mp: 20,
    attack: 10,
    defence: 7,
    magic: 8,
    spirit: 5,
}



describe("should return all values doubled", () => {
    test("should return hp 200", () => {
    const result = {
    hp: 200,
    mp: 40,
    attack: 20,
    defence: 14,
    magic: 16,
    spirit: 10,
}
        expect(multiply(values)).toEqual(result)
    })

})