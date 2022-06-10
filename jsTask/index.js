
function checkAge() {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    
    if(age === "15"&&name==="Ibrahim"&&lastname==="Abaci"){
		document.getElementById("output").innerHTML = "Hi bro";
    }
    else{
        document.getElementById("output").innerHTML= name + " " + lastname + " is " + age + " years old ";
    }
}
	
   