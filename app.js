window.onload = function(){

const toDoInputButton = document.getElementById("input");
const toDoEnterButton = document.getElementById("input");
//testing section
toDoInputButton.addEventListener('click', eventHandle);
toDoEnterButton.addEventListener('click', eventHandle);

}

function eventHandle(e){
  let text = window.localStorage.setItem('text', document.getElementById('text').value);
/*
  if (e.keyCode === 13){
    console.log("if statement hit")
  }
*/
  if (document.getElementById("text").value == 0 || document.getElementById("text").value == null){
    console.log(e.keyCode);
    alert("Please enter a item for the list");
  } else {
    addToList();
  }
}
/*
//gets input after click event -  does works
toDoInputButton.addEventListener('click', function(){
  let onClick = window.localStorage.setItem('text', document.getElementById("text").value);  

  if (document.getElementById("text").value == 0 || document.getElementById("text").value == null){
    alert("Please enter a item for the list");
  } else {
    addToList();
  }
})
*/



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
  addSpanList.addEventListener('click', function(e) {
    addSpanList.style.textDecoration = 'line-through';
    newListItem.id = "done";
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



//Questions
//Could I have used insertAdjacentHTML instead of using createElement?
//Variable list is quite long, anyway that I could have shortened it?


//Learned
//InnerHTML overwrote my checkbox - had to convert to another
//way of getting strike through. 