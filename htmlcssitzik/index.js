// variables
var name = "Ibrahim";
var lastName = "Abaci";
var age = prompt("age?");

checkAge(age, name, lastName);
alert("im going to chage the page content...");
checkAge(39, "Itzik", "Cohen");


// arrays and loops

var people = ["hello", "world", "my name", "lol"];
var i = 0;
while(i < people.length) {
	console.log("item " + i + " in array is: " + people[i]);
	i = i + 1;
}

console.log("im finished");

// functions

function checkAge(age, name, lastName) {
	if(age > 14) {
		document.getElementById("output").innerHTML = name + " " + lastName + " is an adult with the age of " + age;
	}
	else {
		document.getElementById("output").innerHTML = name + " " + lastName + " is a child with the age of " + age;
	}
}

// buttons and events

function getData() {
	age = document.getElementById("input").value;
	console.log(age);
	checkAge(age, name, lastName);
}

