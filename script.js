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
   // let the edit board is closed
   let IsEditBoardActive = false;

editbutton.addEventListener('click', function () {
    // Check if the edit board is already active
    if (IsEditBoardActive) {
        alert("Another task is currently being edited. Please finish editing first.");
        return;
    }

    // Mark the edit board as active
    IsEditBoardActive = true;

    // Display the edit board
    aside.style.display = "flex";

    // Create editing elements
    var textarea = document.createElement('input');
    textarea.type = "text";
    aside.appendChild(textarea);
    textarea.value = task.textContent;
    
    var savebutton = document.createElement('button');
    savebutton.textContent = "Save";
    aside.appendChild(savebutton);

    var cancelbutton = document.createElement('button');
    cancelbutton.textContent = "Cancel";
    aside.appendChild(cancelbutton);

    // Save button functionality
    savebutton.addEventListener("click", function () {
        task.textContent = textarea.value;
        resetEditBoard(textarea, savebutton, cancelbutton);
    });

    // Cancel button functionality
    cancelbutton.addEventListener("click", function () {
        resetEditBoard(textarea, savebutton, cancelbutton);
    });

    // Function to reset the edit board state
    function resetEditBoard(textarea, savebutton, cancelbutton) {
        aside.removeChild(textarea);
        aside.removeChild(savebutton);
        aside.removeChild(cancelbutton);
        aside.style.display = "none";
        IsEditBoardActive = false; // Reset the active state
    }
});

   
   //styling the edit button 
   editbutton.style.marginLeft = "5%"
}