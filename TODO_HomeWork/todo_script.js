// let myName = "arturs";
// console.log(myName);

// let todos = ["this is some random task to do after pizza", "and another task , possably last today"];

// let htmlTodos = [];

// let ol = document.getElementById("tolist");

// todos.forEach(element => {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(element));

//     ol.appendChild(li);
// });


//Examine the document object:

// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// document.title = "this is new title!";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links);

//Get elements:
// console.log(document.getElementById("h1_name"));
// var headerTitle = document.getElementById("h1_name");

// console.log(headerTitle);
// headerTitle.textContent = "new TODO!"; //doesn't take in account styling
// headerTitle.innerText = "Hello There!";
// headerTitle.innerHTML = "<h3>Hello</h3>";
// headerTitle.style.borderBottom = "solid 3px black";

//Get elements by class name:
// var listItems = document.getElementsByClassName("list_item");
// console.log(listItems);
// listItems[1].textContent = "Hello 2";
// listItems[1].style.fontWeight = "bold";
// listItems[1].style.backgroundColor = "grey";
// for (var i = 0; i < listItems.length; i++) {
//     listItems[i].style.backgroundColor = "red";
// }

//Get elements by tag name:
// var liElement = document.getElementsByTagName("li");
// console.log(liElement);
// liElement[1].textContent = "Hello 2";
// liElement[1].style.fontWeight = "bold";
// liElement[1].style.backgroundColor = "grey";
// for (var i = 0; i < liElement.length; i++) {
//     liElement[i].style.backgroundColor = "blue";
// }


//Queryselector:

// var header = document.querySelector(".main_header");
// header.style.display = "none";

// var inputs = document.querySelector("input");
// inputs.value = "Hello World, Hello Hallo!";

// var submit = document.querySelector(inputs[type = "submit"]);
// submit.value = "Send";

// var item = document.querySelector(".list_item");
// item.style.color = "blue";
// var item = document.querySelector(".list_item:nth-child(2)");
// item.style.color = "yellow";

// QuerrySelectorAll:

// var titles = document.querySelectorAll(".list_item");
// console.log(titles.values);
// titles[0].textContent = "Helloallo";
// var odd = document.querySelectorAll("li:nth-child(odd");
// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "blue";
// }

//Traversing the dom
var itemList = document.querySelector("#tolist");
//parentNode property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "black";
// console.log(itemList.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "black";
// console.log(itemList.parentElement.parentElement);


// childNodes

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "blue";

//firstChild

// console.log(itemList.firstChild);

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello world";
// itemList.lastElementChild.textContent = "Hello last element";

// console.log(itemList.nextElementSibling);
// console.log(itemList.nextSibling);

// console.log(itemList.previousElementSibling);
// console.log(itemList.previousSibling);

// itemList.previousElementSibling.style.backgroundColor = "green";




///////////////////////////////////////////////////////////////////////////////////
//createElement

var newDiv = document.createElement("div");

newDiv.className = "hello";
newDiv.id = "hello_01";
newDiv.setAttribute("title", "hello div");

//create text node

var newDivText = document.createTextNode("hello world");

newDiv.appendChild(newDivText);

var containter = document.querySelector("body");
var list = document.querySelector("div .todo_list");

console.log(list);

containter.insertBefore(newDiv, list);

newDiv.style.fontSize = "12px";