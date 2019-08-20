// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we will use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  firstItem(items, item => console.log(`I love my ${item}!`));
  // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    console.log(`this ${article} is worth a million dollars!`);
  };

  firstItem(items, logExorbitantPrice);
  // "this Pencil is worth a million dollars!"
*/

//1
function getLength(arr, cb) {
  console.log(items.length)
};

firstItem(items, getLength);

//2
function last(arr, cb) {

  console.log(items.length - 1)
}

firstItem(items, last);

//3
function sumNums(x, y, cb) {

  cb(x + y);
};

sumNums(12, 9, function(sum) {
 console.log(sum);
});

//4
function multiplyNums(x, y, cb) {
  
  cb(x * y);
};

multiplyNums(3, 13, function(multiply) {
 console.log(multiply);
});

//5
function contains (array, item, cb) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
};

contains(items, 'Notebook', function(result) {
  console.log(result);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
