/* Q.8 > How to copy values from one object to another in above mentioned example , merge and
print them?*/


console.log("start....");     // test to check if js file is linked or not.

const Name = { 
    firstName: 'Philip',
    lastName: 'Fry' 
};

const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};
var finalObject = Object.assign(Name, details)     // copying the value from both objects and storing it in targeted obejects.
console.log(finalObject);                           // dispalyinh the target object which holds properties of both objects.

/* output : 
Object { firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express" }
*/
