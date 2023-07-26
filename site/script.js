// object literal: var x = { a: 2, ...}
//.prototype to use for all
// function constructor in new object(); instead of object write name of fuvar x = 10;
var x = ["mike", "jay", "Eyuel", "Dani", "Jone"];
for(var i = 0; i < x.length; i++){
	if(x[i][0] == 'j' || x[i][0] == 'J'){
		console.log("Hi " + x[i]);
	}
	else{
		console.log("hello ", x[i]);
	}
}
