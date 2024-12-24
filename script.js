const tasks = document.getElementById('task');
const todos = document.getElementsByClassName('todos')[0];
function print(){
   event.preventDefault(); // Prevent the form's default submission behavior
   // create the task and the submit button
   var task = document.createElement('p');
   var deletebutton = document.createElement('button');
   var div = document.createElement('div');//creating a container to the elements
   div.setAttribute('id', 'div');//setting a attribute to it

   //append it on the div
   todos.appendChild(div)
   div.appendChild(task)
   div.appendChild(deletebutton)

   //make the task value
   task.textContent = tasks.value;
   tasks.value = ""

   //make the button's value AND IT'S property
   deletebutton.textContent = "Delete";
   deletebutton.addEventListener('click', function () {
      todos.removeChild(div)
   // creating the styles for each element

   // putting the div in flex propert

  });
}

