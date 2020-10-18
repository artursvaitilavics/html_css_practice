let myName = "arturs";
console.log(myName);

let todos = ["this is some random task to do after pizza", "and another task , possably last today"];

let htmlTodos = [];

let ol = document.getElementById("tolist");

todos.forEach(element => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(element));

    ol.appendChild(li);
});