console.log('hey you!');
alert('peaky Blinders');
console.log('Thomas Shelby');
//variables
var s='String example';
console.log(s);
var number = 23.33;
console.log(number);
document.getElementById('somehtml').innerHTML = 'Javascript Basics';
//var name = prompt('What is your Name?');
//console.log('your name is '+name);
              




                      //number 





var num1 =10;
var num2 =12;
console.log(num1 + num2);
console.log(num1%2);
console.log(num1++);
num1+=12;
console.log(num1);
console.log(typeof null );
console.log(typeof undefined);
function add(n1,n2)
{
    console.log("your result is "+ (n1+n2));
    alert("addition done");
}
var n1=12;
var n2=11;
add(n1,n2);
var n3 = prompt("number 1");//string dai
console.log(n1+23);
//while and for loops
var num=0,n4=12;
while(num<100)
{
    num++;
    n4+=num;
    console.log(n4);
}
for(let i=0;i<100;i++)
{
    console.log(i);
}
function test(number1,number2)
{
    for(let i=0;i<4;i++)
    {
        console.log(number1+number2+i);
    }
}
var number1=12,number2=23;
test(number1,number2);
                     


                    //string

                     
  console.log('string\n\n\n');                   
let subjects='os,msd,isd,datacommunication,hum';
console.log(subjects.length);
console.log(subjects.indexOf('m'));//search from first
console.log(subjects.indexOf("m",4));//search from 3rd pos to last
console.log(subjects.lastIndexOf("m"));//search from first to find the last element
console.log(subjects.lastIndexOf("m",24));//24 is the limit to find the last m
console.log(subjects.toUpperCase());
console.log(subjects.search("hum"));
//for extracting a part of a string
console.log(subjects.slice(3,6));//slice(Start,end)
console.log(subjects.slice(-13));//starting from back
//substring cannot accept negative index
console.log(subjects.substring(3,6));
//substr(start,length of what i am going to cutout)
console.log(subjects.substr(7,3));
console.log(subjects.substr(7));//will start from 7th pos to last
console.log(subjects.replace("os","dsd"));//replace is case sensitive and only works on the first match
console.log(subjects.replace(/ISD/i,"dsd"));//to replace with case sesitive
console.log(subjects.replace("m","n"));
console.log(subjects.replace(/M/ig,"n"));//to replace with all matches and case sensitive
//concat
console.log("hello".concat(" ","Gamers!"," Nippon"));
console.log("hello"+" "+"gamers!");
//Extracting characters
console.log(subjects.charAt(0));
console.log(subjects.charCodeAt(0));//will give ascii value of the position
var arr=subjects.split(",");
var text="";
for(let i=0;i<arr.length;i++)
{
    text += arr[i] +'\n';
} 
console.log(text);
                            


                          //array


console.log('array\n\n\n\n');
//declaring
let fruits=['bananna','mango','jackfruits'];
let fruits1=new Array('bananna','mango','jackfruits');
//accessing
console.log(fruits);
console.log(fruits[0]);
fruits[0]="Guava";
console.log(fruits);
fruits1[1]=fruits;//array inside an array
fruits1[2]=Date.now;
console.log(fruits1);
console.log(fruits.length);
console.log(fruits1.length);
console.log(fruits.sort())//for sorting array elements
//looping an array
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i] + "\n");
}
//show the array using unordered list will only work in the html page 
texts="<ul>";
for(let i=0;i<fruits.length;i++)
{
    texts+="<li>"+fruits[i]+"</li>";
}
texts+="</ul>";
document.getElementById("demo").innerHTML=texts;

texts1="<ol>";
for(let i=0;i<fruits1.length;i++)
{
    texts1+="<li>"+fruits1[i]+"</li>";
}
texts1+="</ol>";
//document.getElementById("demo").innerHTML=texts1;
texts2="<ul>";
fruits.forEach(functions);
texts2+="</ul>";
document.getElementById("demo").innerHTML=texts2;
function functions(value)
{
    texts2 +="<li>" + value + "</li>"; 
    console.log(value + "1++");
}
//pushing an element to last space
fruits.push("kiwi");
console.log(fruits);
fruits[fruits.length]="orange";
console.log(fruits);
var points=[12,23,1,3,234]//avoid using new method;
//console.log(points.sort());evabe sort numbers er khetre hoina
//
//how to recognize an array
//eta die hbe na
console.log(typeof(num1));
console.log(typeof(subjects));
console.log(typeof(fruits));//returns object because js array is an object
//solution1
console.log(Array.isArray(fruits));
//solution2
console.log(fruits instanceof Array);
//solution3
console.log(isArray(fruits));
function isArray(x)
{
    return x.constructor.toString().indexOf("Array") > -1;
}
//remove an element
console.log(fruits.pop());
console.log(fruits);
//convertimng arrays to string
console.log(fruits.toString());//returns the array as a comma separated  string
//join() is same as toString() but in join() I can use separator also
console.log(fruits.join("-->"));
//pushing and popping an element to and from  first space
console.log(fruits.shift());
console.log(fruits);
//unshift = adding an element in first place
console.log(fruits.unshift("Strawberries"));
console.log(fruits);
//use pop or shift to remove items donot use delete as it will left undefined value
//adding element anywhere or remove from anywhere
fruits.splice(2,0,"Lichi","Watermelon");
console.log(fruits);
//remove
console.log(fruits.splice(3,2));
console.log(fruits);
//merging arrays
console.log(fruits.concat(fruits.splice(3,0,"mango","papaya")));
console.log(fruits.concat("pomegrante"));
//dividing an array
console.log(fruits.slice(0,3));
console.log(fruits.sort());//ascii value onujai
console.log(fruits.reverse());
//sorting numbered items
console.log(points.sort(function(a,b){return a - b}));//ascending
console.log(points.sort(function(a,b){return b - a}));//descending
//random ->math.Random() only generates number between 0(included) and 1(excluded)
console.log(Math.random());
//to produce any integer
console.log(Math.floor(Math.random()*10));//will give number from 0 to 9
for(let i=0;i<10;i++)
{
    console.log(Math.floor(Math.random()*100))+1;//will give result from 1 to 100
}
//barbar erm number debar theke min max use kore korle jkonon number range newa jai
function getRandomfunc(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;//random()*(100-1+1)+1
}
for(let i=0;i<10;i++)
{
    console.log(getRandomfunc(1,100));
}
//finding minimum and maximum
function arraymax(arr)
{
    return Math.max.apply(null,arr);
}
console.log(arraymax(points));
//min
console.log(Math.min.apply(null,points));
//rather than using functions it is better to use custom functions
function maxarray(arr)
{
    var len = arr.length;
    var max=-Infinity;
    for(let i=0;i<len;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;
}
console.log("Custom function "+ maxarray(points));
//min
function minarray(arr)
{
    var len = arr.length;
    var min=arr[0];
    for(let i=0;i<len;i++)
    {
        if(arr[i]<min)
        {
            min=arr[i];
        }
    }
    return min;
}
console.log("Custom function "+ minarray(points));
//sort ascending
function sortarray(arr)
{
    var len = arr.length;
    var min;
    for(let i=0;i<len;i++)
    {
       for(let j=0;j<len;j++)
       {
        if(arr[i]<arr[j])
        {
            min=arr[i];
            arr[i]=arr[j];
            arr[j] = min;

        }
       } 
    }
    console.log("array sort ascending: "+arr);
}
sortarray(points);
//sort descending
function descsortarray(arr)
{
    var len = arr.length;
    var min;
    for(let i=0;i<len;i++)
    {
       for(let j=0;j<len;j++)
       {
        if(arr[i]>arr[j])
        {
            min=arr[i];
            arr[i]=arr[j];
            arr[j] = min;

        }
       } 
    }
    console.log("array sort descending: "+arr);
}
descsortarray(points);
//objects
let car={
    type:"toyota",
    model:"Vellfire",
    seats:4,
    doors:5,
    cardescription : function(){
        console.log(num1+num2);
        return this.type + " " + this.model;
    }
};//these are properties
console.log("your car type is: " + car.type);//accessing objects
console.log("and model is " + car.model);
//changing objects
car.seats = 6;
console.log("your " +car.model+" car seat has upgraded to " + car.seats);
console.log(car["doors"]);//another way of accessing
//console.log("Your car description is "+car.cardescription);//if calling without parenthesis it will return the function definitions
console.log("Your car description is "+car.cardescription());//calling the object method

points.forEach(looping);
function looping(value){
    return console.log(value + "\n");
}
//mapping
//map() creates a new array by performing a function on each array element ;The map() method does not change the original array.
points.map(mapping);
function mapping(value){
     console.log(value*value + "\n");
}
//for passing conditions or filtering
//array.filter()  creates a new array with array elements that passes a test.
points.filter(filtering);
function filtering(value){
     value % 2 == 0 ? console.log(value + " is even") : console.log(value + " is odd");
}
//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
var sum = points.reduce(reducing,27);
console.log(sum);
function reducing(total,value){
    return (total + value);
}
//same can be done with reduceRight() right to left
//The every() method check if all array values pass a test. gives result in boolean
points.every(checkAllAreOdds);
function checkAllAreOdds(value){
    console.log("all are odds is " + (value % 2 != 0));
}
//The some() method checks if some array values pass a test.
points.some(someTest);
function someTest(value)
{
    console.log("some are odds is " + (value % 2 != 0));
}
//Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
//The find() method returns the value of the first array element that passes a test function.
// console.log(points.find(finding));
// function finding(value)
// {
//     if(value % 2 != 0)
//     console.log(value);
// }