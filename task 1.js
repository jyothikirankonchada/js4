function person(FirstName ,LastName,Office_Address){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.Office_Address=Office_Address
}

var p1 = new person("jyothi","kiran","vizag , A.P");
var p2 = new person("arjun","reddy","srikakulam , A.P");
var p3 = new person("chintu","konchada","kotturu , A.P");

console.log(p1);
console.log(p2);
console.log(p3);
