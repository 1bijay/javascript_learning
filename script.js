// let a=2;
// let b=3
// document.write(a)
// console.log(b)
// console.log("Hello world");
// variable declaration
// let, var and const
// data type => int,flaot,double,char,void, boolean, string,char,array,object
// in js there is 2 type of data 
// 1st one is primitive data type and 2nd one is non-primitive data type
// //what are the difference between let var and const?(interview question)

// var c=10;

// console.log(c);
// var c=20;
// console.log(c);

// const d=10;
// console.log(d);
// //primitive=> number,string,boolean,undefined,null,symbol
// //Non-primitive=> array,object;

// let j=20;
// console.log(typeof j);
// document.write(typeof j);
// document.write()
// let first_name="BIJAY"
// document.write(typeof first_name)

// variabels naming  rules
// The first character must be a letter, an underscore(_),or a dollar sign($) 
//write varible name in camel case
//variables name should not start with num
// let i="Bijay"
// let isAbsent = false;
// console.log(typeof(i))

// let a=2015
// let b=10;

// if (a>b) {
//     console.log("a is greater than b");
// }
// else{
//     console.log("b is greater than a");
// }
// let c=a+b;
// console.log(a%b)
// console.log(c);
// console.log(a-b);

let a=Number(prompt("Enter the value of a"));
let b=Number(prompt("Enter the value of b "));
let op=prompt("Enter the operator (eg. +,-,*,/,%) ");
if (op=="+"){
    console.log(a+b);
    document.write(a+b);
}
else if(op=="-"){
    console.log(a-b);
    document.write(a-b);
}
else if(op=="*"){
    console.log(a*b);
    document.write(a*b);
}
else if(op=="/"){
    console.log(a/b);
    document.write(a/b);
}
else if(op=="%"){
    console.log(a%b);
    document.write(a%b);
}
else{
    console.log("Invalid operator")
}

// let username=prompt("Enter your  Name:  ");
// console.log(username);



