// var button = document.getElementById("button").addEventListener("click", function() {
//     console.log("button clickeed with attached function");
// });

// var button = document.getElementById("button").
// addEventListener("click", buttonClicked);


// function buttonClicked() {
//     document.getElementById("h1_name").textContent = "New Title";
//     document.querySelector("body").style.backgroundColor = "rgba(205,210,215)";
// }

// function buttonClicked(e) {
// document.getElementById("h1_name").textContent = "New Title";
// document.querySelector("body").style.backgroundColor = "rgba(205,210,215)";
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);

// var output = document.getElementById("output");
// output.innerHTML = "<h3>" + e.target.id + "</h3>";

// console.log(e.type);

// console.log(e.clientX);
// console.log(e.clientY);
// console.log(e.offsetX);
// console.log(e.altKey);


// }

// var button = document.getElementById("button");
// var box = document.getElementById("box");
// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseover", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);
// box.addEventListener("mouseover", runEvent); //for any child element too
// box.addEventListener("mouseout", runEvent); //for any child element too

// box.addEventListener("mousemove", runEvent);


// function runEvent(event) {
//     console.log("Event Type: " + event.type);
//     // output.innerHTML = "<h3>MouseX: " + event.offsetX + " </h3>" +
//     //     "<h3>MouseY: " + event.offsetY + " </h3>";

//     box.style.backgroundColor = "rgb(" + event.offsetX + ", " + event.offsetY + ",40)";
//     document.body.style.backgroundColor = "rgb(" +
//         event.offsetX +
//         "," +
//         event.offsetY +
//         "," +
//         event.offsetX +
//         ")";
// }
var itemInput = document.querySelector('input[type = "text"]');
var form = document.querySelector('form');
var select = document.querySelector("select");
// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);
// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);

// itemInput.addEventListener("cut", runEvent);
//itemInput.addEventListener("paste", runEvent);


// itemInput.addEventListener("input", runEvent);


// select.addEventListener("change", runEvent);

form.addEventListener("submit", runEvent);

function runEvent(event) {
    event.preventDefault();
    console.log("Event type: " + event.type);

    console.log(event.target.value);

    // document.getElementById("output").innerHTML = "<h3>" + event.target.value + " </h3>";
}