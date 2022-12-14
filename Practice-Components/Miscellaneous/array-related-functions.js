/*
 *Here I'm learning the use cases of Set function in JS
 */
var array = [55, 44, 65, 55, 44, 65];
//transforms the array to an set
var set = new Set(array);

//transforms the set to array type
var modified_array = [...set];

//For iterating over the set
for (const item of set) {
  console.log(item);
}
var stringTest = 'Abhaay';
//It can be used to remove duplicate values in strings and is case-sensitive
console.log(new Set(stringTest));
console.log(set);
//It can be used to find if the given element exits in a list or not
console.log(set.has(65));
console.log(modified_array);

//FUnctions that can be used with set
// 1. size
// 2. has
// 3.delete
// 4. add
