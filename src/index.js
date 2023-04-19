document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {e.preventDefault()
    taskLister(e.target["new-task-description"].value)})  
});

// e.target["new-task-description"].value
// input field - add event listener
function collectTask(){

}

function taskLister(task){
  let item = document.createElement('li')
  document.querySelector('#tasks').appendChild(item)
  item.textContent = `${task}`
  console.log(`${task}`)
  e.target["new-task-description"].value
}

 //Create a delete function
 function deleteTask(event){
  let deleteTask = document.createElement('button').textContent = 'Delete'
  console.log(deleteTask)}

  // event.target.parentElement.remove()}

// Create Priority input box and due date input box
// <label for="new-task-description">Task description:</label>
  // <input
  //   type="text"
  //   id="new-task-description"
  //   name="new-task-description"
  //   placeholder="description"
  // />
  // <input type="submit" value="Create New Task" /> */}

// function createNewInputBox(type, id, name, placeholder){
//   let newInput = document.createElement('input')
//   let newLabel = document.createElement('label')
//   let nextSibling = document.querySelector('#new-task-description')
  
//   const label = document.querySelector('label')
//   label.textContent
//   const input = document.querySelector('input')
//   console.log(input)
//   input.setAttribute('type', `${type}`)
//   input.setAttribute('id', `${id}`)
//   input.setAttribute('name', `${name}`)
//   input.setAttribute('placeholder', `${placeholder}`)
//   input.appendChild()
  
  
//   console.log(input)
// }
// //Create input box for priority
// createNewInputBox('text', 'priority', 'priority-level', 'High, Medium, or Low Priority')

//Create input box for date


// function createNewField(attribute, nameOfAttribute){
// new.Input.setAttribut('${param1')

// Add a delete todo list item function

// Ability to assign priority value to tasks

// additional field - due dat