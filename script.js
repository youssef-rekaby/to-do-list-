const tasks = document.getElementById('tasks');
const todos = document.getElementsByClassName('todos')[0];
const aside = document.getElementById('editboard');
const blured = document.getElementsByClassName('blured')[0];
const writingg = document.getElementsByClassName('writing')[0];
const completed = document.getElementsByClassName('completed')[0];
function print() {
   event.preventDefault(); // Prevent the form's default submission behavior
   // create the task and the submit button
   var task = document.createElement('p');
   var deletebutton = document.createElement('button');
   var div = document.createElement('div');//creating a container to the elements
   div.setAttribute('id', 'div');//setting a attribute to it
   var editbutton = document.createElement('button')
   const hrr = document.createElement('hr')

   // preventing the blacked tasks

   if (tasks.value.trim() === '') {
      alert('Please enter a task.');
      return; // Prevent further execution if the input is empty
   }
   // making the check box to check the task is completed ?

   const checkbox = document.createElement('input');
   checkbox.type = 'checkbox';
   checkbox.id = 'checkbox';
   div.appendChild(checkbox)
   checkbox.addEventListener('change',() => {
      if(checkbox.checked){
         div.removeChild(deletebutton)
         div.removeChild(editbutton)
         task.style.textDecoration = 'line-through'
         div.removeChild(task)
         completed.appendChild(task)
         div.removeChild(checkbox)
         completed.appendChild(deletebutton)
         deletebutton.addEventListener('click',function(){
            completed.removeChild(task)
            completed.removeChild(deletebutton)
            completed.removeChild(hrr)
         })
         deletebutton.style.marginBottom = "10px"
         deletebutton.style.marginLeft = "5px"
         completed.appendChild(hrr)
         hrr.setAttribute('class','hrr')
      }
   })


   //append it on the div
   todos.appendChild(div)
   div.appendChild(task)
   div.appendChild(deletebutton)
   div.appendChild(editbutton)

   //make the task value
   task.textContent = tasks.value;
   tasks.value = ""

   //make the button's value AND IT'S property
   deletebutton.textContent = "Delete";
   deletebutton.addEventListener('click', function () {
      todos.removeChild(div)
   });
   task.style.marginRight = "10px"

   // edit button stuff
   editbutton.textContent = "Edit"
   editbutton.addEventListener('click', function () {
      // task.textContent = prompt("Enter new task")
      aside.style.display = "flex"
      // editing area scrpit
      var textarea = document.createElement('input')
      textarea.type = "text"
      aside.appendChild(textarea)
      var savebutton = document.createElement('button')
      savebutton.textContent = "Save"
      aside.appendChild(savebutton)
      var cancelbutton = document.createElement('button')
      cancelbutton.textContent = "Cancel"
      aside.appendChild(cancelbutton)
      // making the functionality of the save button 
      savebutton.addEventListener("click", function () {
         task.textContent = textarea.value
         aside.style.display = "none"
         aside.removeChild(textarea)
         aside.removeChild(savebutton)
         aside.removeChild(cancelbutton)
         document.querySelector('h1').setAttribute('id','non-blured')
      });
      // making the functionalty of the cancel button
      cancelbutton.addEventListener("click", function(){
         aside.removeChild(textarea)
         aside.removeChild(savebutton)
         aside.removeChild(cancelbutton)
         aside.style.display = "none"
         document.querySelector('h1').setAttribute('id','non-blured')
      })
      aside.style.filter = "none"
      document.querySelector('h1').setAttribute('id','blured')
      document.querySelectorAll('div').setAttribute('id','blured')
      
      
      
   });
   
   //styling the edit button 
   editbutton.style.marginLeft = "5%"
}