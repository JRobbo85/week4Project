const values = {
    hp: 100,
    mp: 20,
    attack: 10,
    defence: 7,
    magic: 8,
    spirit: 5,
}

const multiply = (item) => {
    for (let x in item){
        item[x] *= 2        
    }
    return item
}

multiply(values);


console.log(values)
multiply(values)
console.log(values)

module.exports = {
    multiply,
}