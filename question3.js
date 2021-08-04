//Q.3 > What will be the output of the following code?

console.log("start....");     // test to check if js file is linked or not.
var Employee =
{
company: 'Rohit'
}

let Emp1 = Object.create(Employee);
delete Emp1.company;
console.log(Emp1.company);

/* output :
Rohit
*/