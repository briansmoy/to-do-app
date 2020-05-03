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
  let newCheckBox = document.createElement('input');

  newListItem.className = "undone";
  newCheckBox.type = "checkbox"
  newCheckBox.value = 1;

  newListItem.addEventListener('click', function(e) {
    newListItem.style.textDecoration = 'line-through';
    //newListItem.innerHTML =  inputFromText.strike();
    console.log('ifstatement hit');
    })

    /* newListItem.click && newListItem.innerHTML == inputFromText.strike()){
    
    newListItem.addEventListener('click', function(e) {
      newListItem.innerHTML = inputFromText.big();
      console.log("elseif HIT");
      })
    */
 
  
  
  
  
//if checkbox is checked
//go to remove list function
  newListItem.textContent = inputFromText;
  myList.appendChild(newListItem);
  newListItem.appendChild(newCheckBox);
  //myList.appendChild(inputListItem);
}

//create function for deleting
function removeFromList(){
let removeListItem = window.localStorage.removeItem()
document.getElementsByClassName("undone").addEventListener('click') = function() {
  if (checkbox.check) {
    removeListItem;
  }
  else{
  }
}
}
//add html for box or checkbox
//if checkbox if checked do
