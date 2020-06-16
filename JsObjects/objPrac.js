function Person(firstName , email){
   this.firstName = firstName;
   this.email = email;
}//constructor function

//prototype function
Person.prototype.login = function () {
    console.log(this.firstName,' ',this.lastName,
    ' whose account is ',this.email,' has logged in');
}
//inherit using apply

// function Profession(...args){
//     Person.apply(this , args);
//this.profession = 'Student';
    
// }
function Profession(firstName , mail , profession)
{
    Person.call(console.log(this) , firstName , mail);
    this.profession = profession;
}
Profession.prototype = Object.create(Person.prototype);
// Profession.prototype.pros = function(profession){
//     console.log(pro.firstName ,' has a profession ',
//     profession);
// }
Profession.prototype.pros = function(){
    console.log(this.firstName ,' has a profession ',
    this.profession);
}

person = new Person('sakib' , 'sakib@gmail.com');//object
person1 = new Person('George' , 'George@gmail.com');
console.log(person);
person.lastName = 'Nazmus';
console.log(person);
console.log(person.lastName);
console.log(typeof Person);
console.log(typeof person );
console.dir(person);
console.dir(Person);
person.login();
console.log(person1);

pro = new Profession('Maru' , 'maru@gmail.com' , 'Officer');
console.log(pro);
// let x= 'Teacher';
pro.lastName = 'Rei';
pro.login();
// pro.pros(x);
pro.pros();

