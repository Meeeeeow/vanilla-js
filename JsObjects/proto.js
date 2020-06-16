//prototype 
//class chara   eta constructor er kaaj korse
function User(firstName , email ,age){  
     this.firstName = firstName;
     this.email = email;
     this.age = age;
     this.score = 0;
     this.online = false;
}
//prototyping the constructor 
User.prototype.login = function() {
   console.log(this);
   console.log(this.email ,' has logged in');
   this.online = true;
   return this;
}
User.prototype.logOut = function() {
    console.log(this);
    console.log(this.email ,' has logged Out');
    this.online = false;
    return this;
 }
 User.prototype.updateScore = function() {
    console.log(this);
    this.score++;
    console.log(this.email, ' has scored ',this.score);
    return this;
 }
 //prototype inheritance like class inheritance
 function Admin(firstName , mail , age , role){
   //...args evabeo korte pari
   //args is gonna be an array (...) is called res
//    console.log(args); //Array(3) [ "YAGAMI", "yagami@gmail.com", 24 ]
//    console.log(this);
   User.apply(this,[firstName , mail , age]);//this ta hocche new Admin object jta User constr
   //uctor e gie args array er value gula apply korbe 
   //that is the admin object
   this.role = role;
 }

//to  get function from prototype to another proto or protottype inherit
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUsers = function(user){
   console.log(this.role , 'will be vacant');  
   userss = userss.filter(u => {
         return u.email != user.email;
     });
};
var userOne = new User('kazuto' , 'kazutokun467@gmail.com',23);
var userTwo = new User('Asuna' , 'asuna@gmail.com' , 21);
var admin = new Admin('YAGAMI', 'yagami@gmail.com' , 24 , 'super admin');
console.log(userOne);
console.log(userTwo);
// userOne.login().updateScore().updateScore().logOut();
//function ta barbar repeat hocche eta processing time waste hocche
console.log(admin);
var userss = [userOne , userTwo , admin];
admin.deleteUsers(userOne);
console.log(userss);




