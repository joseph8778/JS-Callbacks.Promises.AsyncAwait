function sortLowTohigh(arr) {
return arr.sort((a, b) => a.price - b.price
)
}
console.log(sortLowTohigh([
    { id: 1, price: 50 },
    { id: 2, price: 0},
    { id: 3, price: 500},

]))