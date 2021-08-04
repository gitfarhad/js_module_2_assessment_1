// Q.5 > What will be the output for the code?

console.log("start....");     // test to check if js file is linked or not.


var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function (num) {
    return num / 2;
});
console.log(new_arr);


/* output :
Array(5) [ 1, 28, 39, 17, 32.5 ]    // all the numbers are devided by 2 
*/