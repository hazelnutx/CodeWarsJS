// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

// Thinking about algo :
/**
 * So I have 3 arguments. the array and the numbers that I want to search and destroy inside the array.
 * So there is not a limited number of 'arguments' that a function can have, so for that I think I need a for loop, to make i be the numbers
 * of arguments the function can have.
 *
 * So the first argument is always the array, the 2 -> n - 1 are the arguments that delete/destroy the same elements inside the array;
 * arr => arguments[0] (array), arguments[i]
 */

const destroyer = (arr, ...valuesToDestroy) =>
    arr.filter(item => !valuesToDestroy.includes(item));

// OR

// function destroyer(arr) {
//     let args = Array.from(arguments).slice(1);
//     return arr.filter(item => !args.includes(item));
// }

/**
 * By filtering the array it works like this:
 * I filter the items in my array, and if the items are true (meaning that are not equal with the arguments values ) then I pass them
 * and If they are equal with the arguments values then I delete them.(false)
 * That's why I put ! , if not it would return me the arguments values.
 */

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // 1,1
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // 1, 5, 1
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
