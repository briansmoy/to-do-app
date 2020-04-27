window.onload = function(){

const toDoInputButton = document.getElementById("input");


//gets input after submit button pressed
toDoInputButton.addEventListener('click', function(){
  let text = window.localStorage.setItem('text', document.getElementById("text").value);  

  if ('text' === " "){
    alert("please enter a item for the list");
  } else {
    addToList();
  }
})
}

//function for adding string to list
function addToList(){
  let inputFromText = window.localStorage.getItem('text');
  let myList = document.getElementById('items');
  let newListItem = document.createElement('li');

  newListItem.textContent = inputFromText;
  //add object.assign for additional attributes per element
  Object.assign(newListItem, {
    className: "undone",
    id: "listed-item",
    onclick: function() {
      document.write(inputFromText.strike());
    }
  })
  myList.appendChild(newListItem);
}

//create function for deleting
