window.onload = function(){

const toDoInputButton = document.getElementById("input");

//gets input after submit button pressed
toDoInputButton.addEventListener('click', function(){
  let text = window.localStorage.setItem('text', document.getElementById("text").value);  

  if ('text' === ""){
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
  let listItemTest = document.getElementById('undone');
  let newCheckBox = document.createElement('input');


  newListItem.id = "undone";
  newCheckBox.type = "checkbox";
  newCheckBox.innerText = "X";
  
  //listItemTest.insertAdjacentHTML("afterend",
  //'<button type="checkbox">x</button>');
 

  newListItem.addEventListener('click', function(e) {
    newListItem.style.textDecoration = 'line-through';
    console.log('click event hit');
    })
  

  newListItem.textContent = inputFromText;
  myList.appendChild(newListItem);
  newListItem.appendChild(newCheckBox);
  //newCheckBox.insertAfter(newListItem);


  
  
}

/*
//create function for deleting
function removeFromList(){
let removeListItem = window.localStorage.removeItem()
document.getElementsByClassName("undone").addEventListener('click') = function() {
  if (checkbox.check) {
    //removeListItem;
  }
  else{
  }
}
}
//add html for box or checkbox
//if checkbox if checked do
*/