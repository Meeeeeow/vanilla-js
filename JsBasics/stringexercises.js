//check if input is string or not

const is_String = (input) =>{
    if(Object.prototype.toString.call(input) ==='[object String]')
    {
        return true;
    }else
    {
        return false;
    }
};
console.log(is_String('stringTest'));
console.log(is_String(1234));

//check whether a string is blank or not

const isBlank = input =>{
    if(input.length === 0)
    return 'blank';
    else
    {
        return `has length and the length of ${input} is ${input.length}`;
    }
};

console.log(isBlank(''));
console.log(isBlank('Length'));

//split a string and convert it to array
const isConvert = input =>{
   console.log(input.split(' '));
};
isConvert('Robiin Singh');

//extract speicified number of characters

const isExtract = (input , len) =>{
    if(input.constructor === String && len >0){
        console.log(input.slice(0,len));
    }
};
isExtract('Robin Singh' , 4);

//5.JavaScript function to convert a string in abbreviated form

const isAbbreveation = (input) =>{
    if(input.constructor === String && input.length >0 && input.includes(' ')){
        let splitChars =input.split(' ');
        if(splitChars[1].length > 0)
        {
            console.log(`${splitChars[0]} ${splitChars[1][0]}.`);
        }

    }else{
        console.log("name is short");
    }
};
isAbbreveation('Robin Singh');

//6.JavaScript function to hide email addresses to protect from unauthorized user

const isAuthorize = input =>{
    if(input.constructor === String && input.length > 0){
        let userName = input.split('@');
        let avg = userName[0].length/2;
        console.log(`${userName[0].substr(0 , avg)}...@${userName[1]}`);
    }
};
isAuthorize('rrrobinsan@gmail.com');

//7.JavaScript function to capitalize the first letter of a string

const isCapital = input =>{
   if(input.constructor === String && input.length > 0){
       //return input.charAt(0).toUpperCase().concat(input.substring(1));
       return input.replace(input.charAt(0) , input.charAt(0).toUpperCase());
   }
};
console.log(isCapital('js string exercise'));

//8. JavaScript function to parameterize a string

const isParameter = input =>{
    if(input.constructor ===String && input.length>0){
        // splitWords = String(input.split(' '));
        // //console.log(splitWords); 
        return input.toLowerCase().replace(/ /g , '-');
    }
};

console.log(isParameter('Robin Singh from USA'));

//9.JavaScript function to capitalize the first letter of each word in a string

const isCapitalize = input =>{
    if(input.constructor === String && input.length > 0){
        let splitWords = input.split(' ');
        // console.log(splitWords.length);
        let text ='';
        for(let i=0;i<splitWords.length;i++){
           text += `${String(splitWords[i]).replace(splitWords[i][0],splitWords[i][0].toUpperCase())} ` ;
        }
       return text;
    }
};
console.log(isCapitalize('js string exercises'));

//10.JavaScript function that takes a string which has lower and upper case lett
// parameter and converts upper case letters 
// to lower case, and lower case letters to upper case
const isUpperLower = input =>{
    if(input.constructor ===String && input.length >0){
        let txt ='';
        for(let i =0 ;i<input.length;i++){
            if(input.charCodeAt(i) >=65 && input.charCodeAt(i)<=90){
                txt += input.charAt(i).toLowerCase();
                
            }
            else if(input.charCodeAt(i) >=97 && input.charCodeAt(i)<=122){
                txt += input.charAt(i).toUpperCase();
            }
        }
        return txt;
    }
}
console.log(isUpperLower('PyThon'));
