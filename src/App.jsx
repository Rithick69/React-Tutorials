const myfav = "Thapa";

const favprog = "React js";

function myName() {
	let name = "vinod";
	return name;
}
function myNames() {
	let names = "vinod dikon";
	return names;
}

export default myfav;
// default can only have one value
// we use default when we don't have any other variable or function to export.
// it quite like the switch case default condition..
// the name of the variable can be anything while importing in the index page.

export { myName, myNames, favprog };

//the name of the variable needs to be exactly same while importing in the index page.
