alert ("Welcome to my online store");

console.log("test");

var cost = prompt("Enter the cost of an item");

if (isNan(cost)||cost===){
	console.log ("please enter a valid number");
	}
var discount = prompt("enter your discount for the item");

if (isNan(discount||discount===){
	console.log ("enter a valid number");
	}
else if(discount>100||discount||<0){
	console.log("enter a valid number");
	}
function endcost(cost,discount){
	var disprice = cost*(discount/100);
	return disprice}
	
console.log (endcost)