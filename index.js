// Example of a object
let bil = {
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
    n2: 1,
    n3: 2,
    n4: 3,
    n5: 5,
    n6: 8,
    n7: 14,
    n8: 21,
}
// let url = "jsonplaceholder.typicode.com/posts/42";
fetch("jsonplaceholder.typicode.com/posts/42") = data;

let info = "Fetch is when you get info from a external source" + data;

function fetchInfo(){
    document.getElementById("info_fetch").innerHTML= info;
    return
}