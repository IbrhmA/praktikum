
function checkAge() {
    var data = {};
    data.name = document.getElementById("name").value;
    data.lastname = document.getElementById("lastname").value;
    data.age = document.getElementById("age").value;
    data.address = document.getElementById("address").value;

    var isIbrahim=data.age === "15"&&data.name==="Ibrahim"&&data.lastname==="Abaci";
    
    if(isIbrahim){
		document.getElementById("output").innerHTML = "Hi bro";
    }
    else{
        document.getElementById("output").innerHTML= data.name + " " + data.lastname + " is " + data.age + " years old ";
    }
}