
window.onload = function(){
//let toDoInput = document.getElementById("text").value;
const toDoInputButton = document.getElementById("input");

toDoInputButton.addEventListener('click', function(){ //callfunction?
  let text = window.localStorage.setItem('text', document.getElementById("text").value);  

  if (text === " "){
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
  myList.appendChild(newListItem);
}



var toDoInput = 0;//inputted string

//create function for font change
var toDoStrikethrough = 0;//strickthough font when task completed.

//create function for deleting