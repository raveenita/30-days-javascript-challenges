## How to solve Challenge 01?​

The key point in this challenge is to work with any number of numbers, whether 3 or 3000. For this we can use arrays, so when calling the function we have the freedom to pass as many numbers as we want and this will be correctly handled within it.

## Resolution


function average(numbers) {
  const sum = numbers.reduce((accum, num) => accum + num, 0)
  const avg = sum / numbers.length
  return avg
}
We can also use the spread operator so that the parameters do not need to be passed as an array:

function average(...numbers) {
  const sum = numbers.reduce((accum, num) => accum + num, 0)
  const avg = sum / numbers.length
  return avg
}
Finally, we can remove unnecessary variable declarations and return the mathematical operation directly:

function average(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0) / numbers.length
}