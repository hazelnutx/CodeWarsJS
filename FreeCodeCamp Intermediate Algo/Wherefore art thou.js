// Make a function that looks through an array of objects (first argument) and returns an array of all objects
//that have matching name and value pairs (second argument). Each name and value pair of the source object has to
//be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is
// [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
//and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument),
// because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    let objKey = Object.keys(source);

    return collection.filter(item => {
        return objKey.every(
            key => item.hasOwnProperty(key) && item[key] === source[key]
        );
    });
}

/**
 * Explanation:
 *
 * 1. We find out the key value of the arguments object by doing Object.keys(source) === 'last' or if there is 'first', 'last'
 * 2. Filter through the collection.
 * 3. For every key inside the collection we do a true or false check. False is filtering the values that do not meet the requirements
 * and True if they do meet the req.
 *
 * When we do the second return on every key inside the object. it reads like this:
 * If the item that is filtered inside the collection, has the same property like the key inside the object source (be that 'last' or 'first', 'last'),
 * and the item value (item[key] - key being the value) is equal with the source value (source[key]) - That object is true and we return that.
 *
 * We check if the key and the key values are the same as the collection key and key value.
 */

console.log(
    whatIsInAName(
        [
            { first: "Romeo", last: "Montague" },
            { first: "Mercutio", last: null },
            { first: "Tybalt", last: "Capulet" }
        ],
        { last: "Capulet" }
    )
);
