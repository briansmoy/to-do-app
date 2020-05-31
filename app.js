window.onload = function(){
  let savedToDoItems = localStorage.getItem('todo-items');
  if (savedToDoItems === null) {
    savedToDoItems = [];
  } else {
    savedToDoItems = JSON.parse(savedToDoItems);
  }
  for (let i = 0; i < savedToDoItems.length; i++) {
    const toDoItem = savedToDoItems[i];
    renderToDoItem(toDoItem); 
  }
  
  //click event
  const toDoInputButton = document.getElementById("input");
  toDoInputButton.addEventListener('click', function(e) {
      addNewItemToList();
  });

  //keystroke
  const textInput = document.getElementById("text");
  textInput.addEventListener('keydown', function(e){
    if (e.keyCode === 13) {
      addNewItemToList();
    }
  });
};

function addNewItemToList() {
  if (inputTextIsInvalid()) {
    showInvalidAlertText();
  } else {
    const toDoItem = {
      id: new Date().getTime() * Math.random(),
      text: document.getElementById('text').value,
      isComplete: false
    };
    
    //save item in  array in local storage
    let savedToDoItems = localStorage.getItem('todo-items');
    if (savedToDoItems === null) {
      savedToDoItems = [];
    } else {
      savedToDoItems = JSON.parse(savedToDoItems);
    }
    savedToDoItems.push(toDoItem);
    localStorage.setItem('todo-items', JSON.stringify(savedToDoItems));

    renderToDoItem(toDoItem);
    document.getElementById("text").value = '';
  }
}

function inputTextIsInvalid() {
  return document.getElementById("text").value == 0 || document.getElementById("text").value == null
}

function showInvalidAlertText(){
  alert("Please enter a item for the list");
}

//function for adding/remove string to list
function renderToDoItem(toDoItemObject){
  let unorderedListElement = document.getElementById('items');
  
  let listItemElement = document.createElement('li');
  listItemElement.id = "undone";

  unorderedListElement.appendChild(listItemElement); 

  let addSpanList = document.createElement('span');
  addSpanList.textContent = toDoItemObject.text;
  if(toDoItemObject.isComplete === true){
    addSpanList.style.textDecoration = 'line-through';
  }
  //strike through item
  addSpanList.addEventListener('click', function (e) {
    //get items from local storage
    let savedToDoItems = localStorage.getItem('todo-items');
    if (savedToDoItems === null) {
      savedToDoItems = [];
    } else {
      savedToDoItems = JSON.parse(savedToDoItems);
    }
    //find the item to change the iscomplete prop
    const updatedSavedItems = savedToDoItems.map(function(savedToDoItemObject){
      if(savedToDoItemObject.id === toDoItemObject.id) {
        savedToDoItemObject.isComplete = !savedToDoItemObject.isComplete;
      }
      return savedToDoItemObject;
    })
    //resave items back into list
    localStorage.setItem('todo-items', JSON.stringify(updatedSavedItems));

    if (addSpanList.style.textDecoration !== 'line-through') {
      addSpanList.style.textDecoration = 'line-through';
    } else if (addSpanList.style.textDecoration == 'line-through') {
      addSpanList.removeAttribute('style');
    }
  });
  listItemElement.appendChild(addSpanList);

  let checkBoxElement = document.createElement('button');
  checkBoxElement.type = "checkbox";
  checkBoxElement.className = "box-click";
  checkBoxElement.innerText = "X"; 
  listItemElement.appendChild(checkBoxElement);
  //removal of item
  checkBoxElement.addEventListener('click', function () {
    //get the items back from localstorage
    let savedToDoItems = localStorage.getItem('todo-items');
    if (savedToDoItems === null) {
      savedToDoItems = [];
    } else {
      savedToDoItems = JSON.parse(savedToDoItems);
    }
    //remove the item from the array
    const removeSavedItem = savedToDoItems.filter(function (removeSavedItemObject) {
      if (toDoItemObject.id !== removeSavedItemObject.id) {
        return removeSavedItemObject;
      };
    });
    //re-save the items back into local storage
    localStorage.setItem('todo-items', JSON.stringify(removeSavedItem));
    //remove element associated with item
    listItemElement.remove(savedToDoItems);
  });
};