//console.dir(document.domain)
//document.title="moj prvi sajt"
//console.dir(document.all)
//console.log (document.all(6))
/*

let list=document.getElementById("items")
//console.log(listitems)
let items=document.getElementsByClassName("list-items")
items[2].textContent = "paraglajder" 
//for(i = 0; i=listitems.length;i++)



//console.dir(document.getElementById("header title"))
let headerTitle=document.getElementById("header title")

headerTitle.innerHTML="<h3> ASD </h3>"
//console.log(headerTitle.textContent)
//console.log(headerTitle.innerText)

//textContent vs innerText

//console.log(document.getElementsByTagName("li"))
let li=document.getElementsByTagName("li")

li[1].textContent="asd"
li[1].style.fontSize="20px";
li[1].style.fontWeight="bold";

console.log(document.getElementsByClassName("title"))


let title=document.getElementsByClassName("title")
title[1].textContent="Promenio title"
let container=document.getElementById("container")
container.style.backgroundColor="purple"







//query selector

let drugiLink=document.querySelector(".link-item")
//console.log(drugiLink)



//query selecor all
let lista=document.querySelector(".list-item");
//console.log(lista)



Items[3].textContent="cetiri"
.previousElemenSibling.style.color = "brown"

log(listItem.nextElemenSibling);


console.log(listItems.previousElemenSibling);
console.log(listItems.previousElementChild)

let drugiElement = document.getElementsByClassName("list-items")[1];

drugiElement.parentElement.previousElementSibling.style.color = "cyan"
*/
let newDiv = document.createElement("div");
let textNode = document.createTextNode("Napravio sam novi element");

newDiv.appendChild(textNode);

let container = document.getElementById("container");
let h2 = document.querySelector("#container h2");
container.insertBefore(newDiv, h2);

let prviId = document.getElementById("svejedno");
let paragraf = document.querySelector("#svejedno p");

let newP = document.createElement("p");
let pText = document.createTextNode("Napravio sam novi element");

newP.appendChild(pText);
prviId.insertBefore(newP, paragraf);
/*
let newLi=document.createElement("li");
let newText=document.createTextNode("Novi item");

newLi.appendChild(newText)
let items=document.getElementById("items");
console.log("items.childNodes")
items.insertBefore(newLi,items.lastChild.nextSibling);
*/

let button = document.getElementById("button");
let textBox = document.getElementById("textBox");

let addNewItemToList = function () {
    //iscitamo tekst iz forme
  let text = textBox.value;
  //napavim novi Li
  let newLi = document.createElement("li");
  //napravimo textNode sa tekstom kojim smo iscitali iz text forme
  let newText = document.createTextNode(text);
  //spojimo ih
  newLi.appendChild(newText);
  //izaberem ul
  let items = document.getElementById("items");
  items.insertBefore(newLi, items.lastChild.nextSibling);
};

button.addEventListener("click", addNewItemToList);
