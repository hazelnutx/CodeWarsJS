// Kata 8 ->
// function isDivisible(n, x ,y) {
//   if(n % x === 0 && n % y === 0) return true
//   else return false
// }

// console.log(isDivisible(12,3, 4))
// console.log(isDivisible(10,3, 5))

// ------------------------------

// Between the numbers Kata 8 ->

// function between(a, b) {
//   let arr = []
//   for(let i = a; i <= b; i++){
//     arr.push(i)
//   }
//   return arr
// }

// console.log(between(1, 4))
// console.log(between(-2, 2))

// ------------------------------

/* 

// Generate numbers between min and max, by the amount of step
// if step is 3, and min 1, max 10 => 1, 4, 7, 10
// Kata 8
function generateRange(min, max, step){
  let arr = [];
  for(let i = min; i <= max; i+=step){
    arr.push(i)
  }
  return arr;
}

or 

function generateRange(min, max, step){
  for(let arr = []; min <= max; min+=step) arr.push(min)
  return arr;
}

console.log(generateRange(2, 10, 2))
console.log(generateRange(1, 10, 3))
*/

// ------------------------------

// Kata 8
// function maps(x){
//   return x.map(item => item * 2);
// }
// console.log(maps([1,2,3]))
// console.log(maps([4, 1, 1, 1, 4]))

// ------------------------------
// Kata 8

// function well(x){
//   let goodCount = 0;
//   for(let i = 0; i < x.length; i++){
//     if(x[i] ==='good'){
//       goodCount++;
//     }
//   }

//   if(goodCount === 0){
//     return 'Fail'
//   } else if(goodCount <= 2){
//     return 'Publish!'
//   } else return 'I smeel a series!'
// }

//or

// function well(x){
//   let good = x.filter(item => item === 'good').length;

//   if(good > 2) return 'I smell a series!'
//   if(good > 0) return 'Publish!'
//   return 'Fail'
// }

// For some odd reason, the first one is faster than the second one.

// well(['bad', 'bad', 'bad'])
// well(['good', 'bad', 'bad', 'bad', 'bad'])
// well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])

// ------------------------------

// function sumMix(x){
// return x.reduce((a, b) => parseInt(a) + parseInt(b), 0)
// return x.reduce((result, el) => resullt + Number(el), 0)
// that ,0 is the initialvalue that is used as first argument, if not
// the first element in the erray will be used and skipped.
//reduce has 3 arguments - Accumulator (total / result) = accumulates the //callback return values
// currentValue (el) = passes through the array
// and the index = that tells us the index of that currentValue in the array.
// if the initialvalue is used -> the index will start from ,0 with the index.
// }

// console.log(sumMix([2, 3, '5']))
// console.log(sumMix([2]))

// ------------------------------

// function monkeyCount(n) {
//   let arr = [];
//   for(let i = 1; i <= n; i++){
//     arr.push(i)
//   }
//   return arr;
// }

// console.log(monkeyCount(10))

// ------------------------------

// function sumOfStringValues(a, b){
//   let parse = Number(a) + Number(b)
//   return parse.toString()
// }

// or

// function sumOfStringValues(a, b){
//   return String(Number(a) + Number(b));
// }

// console.log(sumOfStringValues('2', '4'))
// console.log(sumOfStringValues('', '2'))

// ------------------------------

//if true multiply by 10
// function bonusTime(salary, bonus) {
//   return !bonus ? ` \u00A3${salary}` : ` \u00A3${salary * 10}`
// }

// console.log(bonusTime(10000, true))
// console.log(bonusTime(9000, false))
// console.log(bonusTime(2, true))

// ------------------------------

// function century(year) {
//   return Math.floor((year - 1) / 100) + 1;
// }

// console.log(century(2000))
// console.log(century(1705))
// console.log(century(2))

// ------------------------------
