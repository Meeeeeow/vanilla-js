// //Strings

// let tests = 'Appappppaaappipipupepo';
// console.log(tests.length);

// //search

// console.log(tests.indexOf('a'));
// console.log(tests.indexOf('p',3));

// console.log(tests.lastIndexOf('p'));
// console.log(tests.lastIndexOf('p',3));

// console.log(tests.search('pipi'));

// //extract

// console.log('extracting characters');
// console.log(tests.slice(3,6));
// console.log(tests.slice(-10,-6));
// console.log(tests.slice(-1));

// console.log(tests.substring(3,6));
// console.log(tests.substring(-1));

// console.log(tests.substr(3,3));

// console.log(tests.charAt('i'));
// console.log(tests.charCodeAt('i'));

// //replace

// console.log(tests.replace('p' , 'n'));
// console.log(tests.replace(/P/ig , 'n'));


// //concat
// console.log(tests.concat('apppa'));

// console.log('it\'s sunny');
// console.log(typeof null);

// //Numbers

// anythingToDec(11);
// function anythingToDec(any){
//     //parseint only any bast to 10 or vice versa
//     console.log(Number(parseInt(any , 10).toString(2)));
//     console.log(Number(parseInt(any , 2).toString(10)));
//     console.log(Number(parseInt(any , 10).toString(8)));
//     console.log(Number(parseInt(any , 8).toString(10)));
//     console.log(parseInt(any,10));
// }
// let num = 11;
// console.log(num.toString(2));
// console.log(num.toString(8));


// num1 = num+0.233434555;
// console.log(num1);

// console.log(num1.toFixed(2));

// console.log(num1.toPrecision(4));

// console.log(-1/0);

// console.log(num1.constructor);

// //custom prototype function

// Number.prototype.myMethod = (value) =>{
//      return value**3;
// };

// console.log(num.myMethod(num));

// //Arrays
// placesinJapan=[]
// places= Number(prompt('enter how many places :'));

// for (i=0;i<places;i++){
//     placesinJapan[i] = prompt();
// }

// const placestoVisit = () =>{
//     let text='<ul>';
//     placesinJapan.forEach(values =>{
//         text+='<li>' + values + '</li>'
        
//       });
//       text+='</ul>';
//       document.querySelector('#demo1').innerHTML = text;
// }
// placestoVisit();

// console.log(placesinJapan.length);

// //adding

// //push
// placesinJapan.push('Hakono');
// console.log(placesinJapan);
// placestoVisit();

// //unshift
// placesinJapan.unshift('Akihabara');
// console.log(placesinJapan);
// placestoVisit();


// //push ver 1.01
// placesinJapan[placesinJapan.length] = 'Shinjuku';
// console.log(placesinJapan);
// placestoVisit();

// placesinJapan.splice(5,0,'Mount Fuji' , 'Arashiyama','doki');
// console.log(placesinJapan);
// placestoVisit();

// //remove 
// placesinJapan.splice(placesinJapan.length-1,1);
// console.log(placesinJapan);
// placestoVisit();

// //search

// console.log(placesinJapan.includes("Akihabara"));

// console.log(placesinJapan.indexOf('Mount Fuji'));

// console.log(placesinJapan.lastIndexOf("Mount Fuji" , 4));


// let newArray = placesinJapan.slice(1,5);
// console.log(newArray);
// console.log(newArray instanceof Array);

const numberList = [3,1,65,132,45];

numberList.sort((a,b) => a-b);
console.log(numberList);

numberList.sort((a,b) => b - a);
console.log(numberList);

const customSortDesc = ( arr) => {
   for(let i=0;i<numberList.length;i++)
   {
       for(let j = 0;j<numberList.length;j++){
            if(arr[i] < arr[j]){
                let min = arr[i];
                arr[i] = arr[j];
                arr[j] = min;
            } 
       }
   }
   console.log(arr);
   return arr;
};
document.querySelector('#demo1').innerHTML = customSortDesc(numberList);

const customSortAsc = ( arr) => {
    for(let i=0;i<numberList.length;i++)
    {
        for(let j = 0;j<numberList.length;j++){
             if(arr[i] > arr[j]){
                 let min = arr[i];
                 arr[i] = arr[j];
                 arr[j] = min;
             } 
        }
    }
    console.log(arr);
    return arr;
 };
 document.querySelector('#demo').innerHTML = customSortAsc(numberList);