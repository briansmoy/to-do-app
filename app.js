window.onload = function(){
  const toDoInputButton = document.getElementById("input");
  const textInput = document.getElementById("text");

  toDoInputButton.addEventListener('click', eventHandle);
  textInput.addEventListener('keydown', function(e){
    if (e.keyCode === 13) {
      eventHandle();     
    }
  })
}

function eventHandle() {
  let text = window.localStorage.setItem('text', document.getElementById('text').value);
  let clearInput = document.getElementById("text");

  if (document.getElementById("text").value == 0 || document.getElementById("text").value == null) {
    alert("Please enter a item for the list");
  } else {
    clearInput.value = '';
    addToList();
  }
}

//function for adding/remove string to list
function addToList(){
  let inputFromText = window.localStorage.getItem('text');
  let myList = document.getElementById('items');
  let newListItem = document.createElement('li');
  let addSpanList = document.createElement('span');
  let newCheckBox = document.createElement('button');
 
  newListItem.id = "undone";
  newCheckBox.type = "checkbox";
  newCheckBox.className = "box-click";
  newCheckBox.innerText = "X";

//strike through item
  addSpanList.addEventListener('click', function (e) {
    if (addSpanList.style.textDecoration !== 'line-through') {
      addSpanList.style.textDecoration = 'line-through';
    } else if (addSpanList.style.textDecoration == 'line-through') {
      addSpanList.removeAttribute('style');
    }
  });

//removal of item
  newCheckBox.addEventListener('click', function(){
    newListItem.remove();
  });
  
  addSpanList.textContent = inputFromText;
  myList.appendChild(newListItem);
  newListItem.appendChild(addSpanList);
  newListItem.appendChild(newCheckBox);
};