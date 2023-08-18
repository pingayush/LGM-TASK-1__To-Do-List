document.addEventListener('DOMContentLoaded', function() {
  var taskInput = document.getElementById('task-input');
  var taskTime = document.getElementById('task-time');
  var taskPriority = document.getElementById('task-priority');
  var addTaskBtn = document.getElementById('add-task-btn');
  var taskList = document.getElementById('task-list');

  addTaskBtn.addEventListener('click', function() {
    var taskText = taskInput.value;
    var taskTiming = taskTime.value;
    var taskPriorityValue = taskPriority.value;

    if (taskText.trim() !== '') {
      var taskItem = createTaskItem(taskText, taskTiming, taskPriorityValue);
      taskList.appendChild(taskItem);
      taskInput.value = '';
      taskTime.value = '';
      taskPriority.value = 'low';
      setTaskAlarm(taskTiming, taskText);
    }
  });

  function createTaskItem(taskText, taskTiming, taskPriority) {
    var taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.classList.add(taskPriority + '-priority');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      taskItem.classList.toggle('completed');
    });

    var taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;

    var taskTimeLabel = document.createElement('span');
    taskTimeLabel.textContent = taskTiming;

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
      taskItem.remove();
    });

    var addToCalendarBtn = document.createElement('button');
    addToCalendarBtn.textContent = 'Add to Calendar';
    addToCalendarBtn.classList.add('delete-btn');
    addToCalendarBtn.addEventListener('click', function() {
      addToCalendar(taskText, taskTiming);
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(taskTimeLabel);
    taskItem.appendChild(deleteBtn);
    taskItem.appendChild(addToCalendarBtn);

    return taskItem;
  }

  function addToCalendar(taskText, taskTiming) {
    // Add code here to integrate with Google Calendar API
    // and add the task to the user's calendar
    console.log('Adding task to Google Calendar:');
    console.log('Task: ' + taskText);
    console.log('Timing: ' + taskTiming);
  }

function setTaskAlarm(taskTiming, taskText) {
  var alarmTime = new Date(taskTiming).getTime();
  var currentTime = new Date().getTime();
  var timeDifference = alarmTime - currentTime;

  playSound();

  if (timeDifference > 0) {
     // Play the sound
    setTimeout(function() {
      alert('Task: ' + taskText + '\nTime: ' + taskTiming);
    }, timeDifference);
  }
}

function playSound() {
  var audio = new Audio('to-do.mp3'); // Replace with the local file path to your sound file
  audio.play();
}

});
