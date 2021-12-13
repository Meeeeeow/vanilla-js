// //User one description
// var userOneEmail = 'kzutiasuna@gmail.com';
// var userOneName = 'Kazuto';
// var userOneFriends = ['Asuna' , 'Yui'];

// //User two description
// var userTwoEmail = 'tatsuminron@gmail.com';
// var userTwoName = 'asuna';
// var usertwoFriends = ['Kazuto' , 'Yui'];

// function login(email){
//     console.log(email , 'has logged out');
// }
// function logFriends(friends){
//     friends.forEach(friend => {
//         console.log(friend);
//     });
// }

// login(userOneEmail);

// var userOne = {
//     firstName : 'kazuto',
//     email : 'kazutokun467@gmail.com',
//     login(){
//         console.log(this.email , ' logged in');
//     },
//     logOut(){
//         console.log(this.email , 'has logged out');
//     },
//     logInfo(){
//          console.log(this.firstName,' ',this.email,' ',this.age);
//     } 
//     //encapsulation
// };
// console.log(user.email);
// user.firstName = 'Asuna';
// var passBy = 'firstName';
// console.log(user[passBy]);//this method is useful sometimes
 
//class
class User {
    constructor(firstName , email , age){
         this.firstName = firstName;
         this.email = email;
         this.age = age;
         this.score = 0;
    }
    login(){

        console.log(this.email , 'has logged in');
        return this;//will return the instance of the object user here user one/two
    }
    logOut(){
        console.log(this.firstName , 'whose email is ', this.email , 'has logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email , 'score is ' ,this.score);
        return this;//needed for method chain
    }
}
var userOne = new User('kazuto' , 'kazutomihoyo@gmail.com',23);
var userTwo = new User('Asuna' , 'asuna@gmail.com' , 21);
console.log(userOne);
console.log(userTwo);
userOne.login().updateScore().updateScore().updateScore().logOut();//method chaining
userTwo.logOut();
//the new keyword
//creates an empty object
//sets the value of 'this' to be the new empty object
//calls the constructor method

//class inheritance
class Admin extends User {
    constructor(firstName , email , age , location){
        super(firstName , email , age);
        this.location = location;
    }
    deleteUser(user){
        users = users.filter(value =>{
        value.email === user.email ? console.log(user.email ,
            ' is deleted') : console.log('Unique Email :',
            value.email);
        });
    }

}
//class chara   eta constructor er kaaj korse
// function User(firstName , email ,age){
//      this.email = email;
//      this.firstName = firstName;
//      this.age = age;
//      this.score = 0;
//      this.login = function(){
//          console.log(this.email ,' has logged in');
//      }
// }
var admin = new Admin('yagami' , 'yagami@gmail.com',24 , 'Dhaka');
console.log(admin);
var users = [userOne , userTwo,admin];
admin.deleteUser(userOne);
console.log(users);

