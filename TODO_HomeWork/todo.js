var form = document.getElementById("todo");
var itemList = document.getElementById("items");

//Form submit element

form.addEventListener('submit', addItem);
//Deleete event
itemList.addEventListener('click', removeItem);

//Add item
function addItem(event) {
    event.preventDefault();

    //Get input value
    var newItem = document.getElementById('inputId').value;

    //create new li element:
    var li = document.createElement('li');
    //add class
    li.className = 'list_item';
    console.log(li);

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create close button for list item:
    var closeBtn = document.createElement('button');

    //Add text to button
    closeBtn.appendChild(document.createTextNode('X'));

    li.appendChild(closeBtn);

    //Add classes to close button:
    closeBtn.className = "closeJob";


    //Append li to list
    itemList.appendChild(li);
}

function removeItem(event) {
    if (event.target.classList.contains('closeJob')) {
        console.log("removeItem");
        if (confirm('Are you sure?')) {
            var li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }
}