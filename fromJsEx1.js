/* Exercise 01
// Re-write the following code using TypeScript.
Try to be as explicit as possible and add Types to everything you can.
When you are done, transpile the TS code to JS code and inspect the JS code.
*/
// function University(name, dept) { 
// 	this.name = name; 
// 	this.dept = dept; 
// 	this.graduation = function(year) { 
// 		 console.log(`Graduating ${this.dept} ${year} students`); 
// 	} 
// } 
// var miu = new Univeristy("MIU", "Computer Science"); 
// miu.graduation(2019);
function University(name, dept) {
    this.name = name;
    this.dept = dept;
    this.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
}
var miu = new University("MIU", "Computer Science");
miu.graduation(2019);
