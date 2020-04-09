
window.onload = function(){
//let toDoInput = document.getElementById("text").value;
const toDoInputButton = document.getElementById("input");

toDoInputButton.addEventListener('click', function(){ //callfunction?
  let text = window.localStorage.setItem('text', document.getElementById("text").value);
  if (text === ""){
    alert("please enter a item for the list");
  } else {
    addToList();
  }
  console.log(text);
})

}

//function for adding string to list
function addToList(){
  let inputText = window.localStorage.getItem('text');
  if (inputText === True){
     
  }else{
  }

}



var toDoInput = 0;//inputted string

//create function for font change
var toDoStrikethrough = 0;//strickthough font when task completed.

//create function for deleting