//Q.6 > How to delete 'Beethoven' from set

console.log("start....");     // test to check if js file is linked or not.

const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin']);
console.log(set);                   // displaying set before deleting "Beethoven" 
set.delete("Beethoven");            // deleting value from set using delete method
console.log(set);                   // displating set after deleting "Beethoven"

/* output :
Set(3) [ "Beethoven", "Mozart", "Chopin" ]           // set before deleting "beethoven (duplicate value is also ignored)".
Set [ "Mozart", "Chopin" ]                           // set after deleting "Beethoven".
 */
