//Q.9 > How to access and print greet function from the above object code ?

console.log("start....");     // test to check if js file is linked or not.

const gimli =
{
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function () { 
        return `Hi, my name is ${this.name}!`; 
    },
};

console.log(gimli.greet());     // we can access the property of an object using ". notation" after the name of object

/*
output :
start....
Hi, my name is Gimli!
*/