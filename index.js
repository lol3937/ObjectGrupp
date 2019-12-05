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
print(fullName);

