"use strict";
//styles
document.querySelector('body').style.backgroundImage="url('../background pics/background pic 12.jpg')";
document.querySelector('body').style.backgroundSize="cover"
document.querySelector('body').style.color="white"
document.querySelector('h1').style.textAlign="center";
document.querySelector('h1').style.textDecoration="underline";
//p section
document.querySelector('p').style.position="absolute";
document.querySelector('p').style.top="30%";
document.querySelector('p').style.left="50%";
//input section styles
document.querySelector('#input').style.position="absolute";
document.querySelector('#input').style.top="40%";
document.querySelector('#input').style.left="50%";
//btn styles 
document.querySelector('button').style.position="absolute";
document.querySelector('button').style.top="60%";
document.querySelector('button').style.left="50%";
document.querySelector('button').style.width="60px";
document.querySelector('button').style.height="60px";
document.querySelector('button').style.borderRadius="30px";
document.querySelector('button').style.border="2px solid blue";

//functionality
document.addEventListener('DOMContentLoaded', allFunction);
function allFunction(){
document.querySelector('button').addEventListener('click',count);
function count(){
const inputValue=document.querySelector('#input').value;
const currentYear =new Date().getFullYear();
let countValue=currentYear-inputValue;
alert(countValue);
}
}
allFunction();