let arr;

// function date
function reverseDate(date) {
  let splitDate = date.split("-");
  let reverseArray = splitDate.reverse();
  let joinArray = reverseArray.join("-");

  return joinArray;
}


function isArr() {
  if (JSON.parse(localStorage.getItem("tasks")) == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("tasks"));
  }
  addTask();
}



function checkValid() {
  let taskInput = document.getElementById("task").value;
  let dateInput = document.getElementById("date").value;


  if (taskInput == "") {
    alert('Please fill in all fields');
    document.getElementById()
    return;
  } else if (dateInput == "") {
    alert('Please enter a date');
    return;
  } else {
    isArr(), cleanForm();
  }
}



// adding notes
function addTask() {
  let taskContainer = document.getElementById("task-container");
  let taskInput = document.getElementById("task").value;
  let dateInput = document.getElementById("date").value;
  let hourInput = document.getElementById("hour").value;
  let newTask = document.createElement("div");
  newTask.className = `col-12 col-md-6 col-xl-3`;


  newTask.innerHTML = `
        <div class="m-2 task fade-in">
            <div>
             <i class="fas fa-xs fa-window-close" id="removeBtn"></i>
             <p class="text-dark text-left m-4 paragraph-task"> ${taskInput}</p>
           </div>
           <footer class="mx-2"> ${reverseDate(dateInput)} </br> ${hourInput}
           
           </footer>
        </div>     
        `;
  taskContainer.appendChild(newTask);
  let task = {
    content: taskInput,
    date: dateInput,
    hour: hourInput,
  };

  arr.push(task);
  localStorage.setItem("tasks", JSON.stringify(arr));

  removeTask(newTask, task);
}


// function removing the notes
function removeTask(newTask, task) {
  let taskContainer = document.getElementById("task-container");
  let removeBtn = document.getElementsByClassName("fas");

  thisRemoveBtn = removeBtn[removeBtn.length - 1];
  thisRemoveBtn.addEventListener("click", function () {
    taskContainer.removeChild(newTask);
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].content == task.content &&
        arr[i].date == task.date &&
        arr[i].hour == task.hour
      ) {
        arr.splice(i, 1);
        i--;
        break;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(arr));
  });
}


// the localStorage
function showTask() {
  let taskContainer = document.getElementById("task-container");

  if (JSON.parse(localStorage.getItem("tasks")) != null) {
    arr = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < arr.length; i++) {
      let newTask = document.createElement("div");
      newTask.className = `col-12 col-md-6 col-xl-3 `;
      newTask.innerHTML = `
       
         <div class="m-2 task fade-in">
             <div>
                  <i class="fas fa-xs fa-window-close" id="removeBtn"></i>
                 <p class="text-dark text-left py-3 m-4 paragraph-task"> ${
                   arr[i].content
                 }</p>
             </div>
             <footer class="mx-2"> ${reverseDate(arr[i].date)} </br> ${
        arr[i].hour
      }
             </footer>
         </div>
     `;

      let task = {
        content: arr[i].content,
        date: arr[i].date,
        hour: arr[i].hour,
      };
      taskContainer.appendChild(newTask);
      removeTask(newTask, task);
    }
  }
}


showTask();


// this function is cleaning the form
function cleanForm() {
  const form = document.getElementById("form");
  form.reset();
}