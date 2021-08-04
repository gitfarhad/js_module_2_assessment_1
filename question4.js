//Q.4 > Consider the two functions below. Will they both return the same thing? Why or why not?

console.log("start....");     // test to check if js file is linked or not.
function foo1()
{
return {
bar: "hello"
};
}
function foo2()
{
    return 
    {
    bar: "hello"
    };
    }
console.log(foo1());                          // calling function 1 
console.log(foo2());                          // calling function 2 

/* output : 
Object { bar: "hello" }
undefined 
unreachable code after return statement
*/

/*
reason : control of code exits the finction after return statement, 
so the control doesn't goes to next line, and that code becomes unreachable,
and hence give a warning of reachable code with "undefined".

*/
