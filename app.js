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
  let addSpanList = document.createElement('span');
  let newCheckBox = document.createElement('button');
  let removeListItem = window.localStorage.removeItem(inputFromText.lastChild);

  newListItem.id = "undone";
  newCheckBox.type = "checkbox";
  newCheckBox.className = "box-click";
  newCheckBox.innerText = "X";
  
  //listItemTest.insertAdjacentHTML("beforeend",
  //'<li id="undone">${inputFromText}</li>',
  //'<button type="checkbox">x</button>');
 
//strike through item
  addSpanList.addEventListener('click', function(e) {
    addSpanList.style.textDecoration = 'line-through';
    newListItem.id = "done";
    console.log('click event hit', inputFromText);
    });

//removal of item
  newCheckBox.addEventListener('click', function(){
    removeListItem;
    console.log(inputFromText);
  });
  
  addSpanList.textContent = inputFromText;
  myList.appendChild(newListItem);
  newListItem.appendChild(addSpanList);
  newListItem.appendChild(newCheckBox);
  
  //myList.appendChild(newCheckBox);

  //save for later - if I can get string item to just
  //have strike through
  
  //newCheckBox.insertAfter(newListItem);
  //newCheckBox.nextSibling(newListItem)
  
}

/*
//create function for deleting
function removeFromList(){
  let checkBoxClick = document.getElementsByClassName('box-click');
  //let removeListItem = window.localStorage.removeItem();

  checkBoxClick.addEventListener('click', function(){
    console.log('box event hit');

  });
  //document.getElementsByClassName("done").addEventListener('click') = function() {
  //if (checkbox.check) {
    //removeListItem;
  //}
  //else{
  //}
//}
}
//add html for box or checkbox
//if checkbox if checked do
*/