console.log("hi");
console.log(5+4);
function add7(number){
	console.log(number + 7);
}
function multiply(a, b){
	console.log(a*b);
}
function capitalize(string){
	string = string.toLowerCase();
	let first = string.charAt(0);
	console.log(first.toUpperCase() + string.slice(1));
}
function lastletter(string){
	console.log(string.slice(-1));
}
