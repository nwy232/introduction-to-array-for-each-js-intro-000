// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = 'j';
}

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);

// log out animals -- pretty cool, right?
console.log(animals);
