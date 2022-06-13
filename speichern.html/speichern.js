// getting the string from localstorage
var rawData = localStorage.getItem("formData");
// converting the string to object
var formData = JSON.parse(rawData);

// updating the values in the inputs
document.getElementById("name").value = formData.name;
document.getElementById("lastname").value = formData.lastName;
document.getElementById("age").value = formData.age;
document.getElementById("address").value = formData.address;

function saveData() {
    // empty the from errors befre checking again
    document.getElementById("output").innerHTML = "";

    // collecting the data
    var data = {};
    data.name = document.getElementById("name").value;
    data.lastName = document.getElementById("lastname").value;
    data.age = document.getElementById("age").value;
    data.address = document.getElementById("address").value;
    
    // validation
    if (data.name.length > 20 || data.lastName.length > 20) {
      document.getElementById("output").innerHTML = "<img src=\"https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png\" />Name to long";
      return;
    }
    else if(data.age > 100) {
      document.getElementById("output").innerHTML = "<img src=\"https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png\" />Bro you're old";
      return;
    }

    // save data
    localStorage.setItem("formData", JSON.stringify(data));
  }

