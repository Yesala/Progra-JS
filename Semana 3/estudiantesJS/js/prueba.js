var array1 = [1, 2, 3, 4];
var array2 = ["a", "b", "c", "d"];
var array3 = ["f", "d", "s", "a"];

var newArray = array1.map(function(value, index) {
  return value + array2[index] + array3[index];
});
console.log(newArray);