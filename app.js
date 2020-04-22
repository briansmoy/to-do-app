/*
Notes - add function and add button to allow onlick option for each element.
*/




window.onload = function(){

const toDoInputButton = document.getElementById("input");
const elementOnClick = document.getElementById("li");
//gets input after submit button pressed
toDoInputButton.addEventListener('click', function(){ //callfunction?
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
  //  onclick: function() {
  //    alert('Clicked')
  //  }
  })
  myList.appendChild(newListItem);
}

//create function for strikethrough change
function itemComplete(){
  //if button is clicked add strikethrough task
  var elementOnClick = document.getElementById('li');

  if (elementOnClick.click == true){
    document.write(elementOnClick.strike);
  }

}

//create function for deleting