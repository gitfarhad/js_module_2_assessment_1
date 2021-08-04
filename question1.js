// Q.1 > How to fetch the millisecond according to universal time from a given Date object?

console.log("start....");                                      // test to check if js file is linked or not.

 var dateToday = new Date('October 15 1996 05:35:32');      // had to remove milisecond part as it was showing invalid date.

console.log(dateToday.toDateString());                      // printing the full date in string and readable format
let result = dateToday.setMilliseconds(77);                // setting milisecond again as 77 (as per the question)
console.log(dateToday.getMilliseconds());                 // fetching the millisecond according to universal time from a given Date object.

/*output :
Tue Oct 15 1996 
77
*/
