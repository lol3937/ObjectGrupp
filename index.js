// Example of a object
let carGABRIEL = {
    name: "Tesla", 
    model: "Cybertruck", 
    weight: "3499",
    color: "metalic",
    year: "2025"};

// A example of another object
let person = {
    firstName: "Elon", 
    lastName:"Musk", 
    age: 50, 
    occupation: "TeslaMaster",
}

let data = fetch("http://jsonplaceholder.typicode.com/posts/42");
data = JSON;
carName = carGABRIEL.name;
carmodel = carGABRIEL.model
let info = "Fetch is when you get info from a external source";

function fetchInfo(){
    document.getElementById("info_fetch").innerHTML = info;
    document.getElementById("Paradraph").innerHTML = carName + " " + carmodel + " "+ data;
}