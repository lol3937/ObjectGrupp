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
    fullName: function() {
        return this.firstName+" "+this.lastName;
    }
}
let fibonacci = {
    n1: 1,
    n2: 2,
    n3: 3,
    n4: 5,
    n5: 8,
    n6: 14,
    n7: 21,
}
// let url = "jsonplaceholder.typicode.com/posts/42";
fetch("jsonplaceholder.typicode.com/posts/42") = data;

let info = "Fetch is when you get info from a external source" + data;

function fetchInfo(){
    let newData = document.getElementById("info_fetch").innerHTML= info;
    return newData;
}