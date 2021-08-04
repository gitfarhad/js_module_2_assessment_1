//Q.7 > Create a nested array object called operatingSystem 
//and add below key and values Name - Ubuntu , version - 18.4 , license - open source


console.log("start....");                                            // test to check if js file is linked or not.

var operatingSystem = [{}
]
operatingSystem = [...operatingSystem,{"name" : "ubantu"}]           // adding first key value pair in array object using spread
console.log(operatingSystem);                                        // checking array if its udated or not .
operatingSystem = [...operatingSystem,{"version" : 18.4}]            // adding the second key value pair
operatingSystem = [...operatingSystem,{"license" : "open_source"}]   // adding the third key value pair.


console.log(operatingSystem);                                        // displaying the final array object with all values in it.


/*
ouput : 
Array(4) [ {}, {…}, {…}, {…} ]
0: Object {  }
1: Object { name: "ubantu" }
2: Object { version: 18.4 }
3: Object { license: "open_source" }
length: 4
 */