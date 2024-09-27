// function showRating(rate) {
// let wholeNum = Math.floor(rate/1)
// let decNum = rate % 1
// let arr = []

// arr.length = wholeNum
// arr.fill("*")
// if (decNum > 0) {
//     arr.push('.')
// }
// return arr
// }



// console.log(showRating(4.5))



// function showRating(rating) {
//     let ratings = ""
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         ratings = ratings + "*"
//         if (i !== Math.floor(rating - 1)) {
//             ratings +=  " "
//         }
//     }

//     if (!Number.isInteger(rating)) {
//         ratings = ratings + ' .'
//     }
//  return ratings
// }

// console.log(showRating(3.5))


//BEST PRACTICE//

function showRating(rating) {
const stars = " *".repeat(Math.floor(rating))
const fullStop = !Number.isInteger(rating) ? ' .' : ''
return stars + fullStop;
}

console.log(showRating(4.5))