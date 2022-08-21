let str = 'My Name is Abhay';
let result = str.match(/Abh(ay)/);

// console.log(result);
// console.log(result.input); //This will print the input string
// console.log(result.index); //This will print the index value of the input string where the match is found
// console.log(result[0]);
// console.log(result[1]); //This willreturn the grouped text in the input string

/**
 * Here at line 2, if /g parameter is not mentioned then we can access input and index on the .match function
 * but /g is mentioned then we can't access them
 */

let str2 = '<h1>Hello, world!</h1>';
let regexp = /<(.*?)>/g;

let matchAll = str2.matchAll(regexp);

console.log(matchAll);
