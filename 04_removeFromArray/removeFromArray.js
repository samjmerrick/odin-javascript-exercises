const removeFromArray = function (array, ...removeItems) {
  return array.filter((arrayItem) => !removeItems.includes(arrayItem));
};

// Do not edit below this line
module.exports = removeFromArray;
