function showRating(rate) {
let wholeNum = Math.floor(rate/1)
let decNum = rate % 1
let arr = []

arr.length = wholeNum
arr.fill("*")
if (decNum > 0) {
    arr.push('.')
}
return arr
}



console.log(showRating(4.5))