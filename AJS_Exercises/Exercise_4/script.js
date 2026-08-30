// Sample tasks array
const tasks = [
  { title: "Buy groceries", priority: "High" },
  { title: "Read a book", priority: "Medium" },
  { title: "Go for a run", priority: "Low" },
];

// TODO: Implement the getFormattedTasks function
function getFormattedTasks(tasks) {
  const formattedTasks = [];

  // TODO: Convert the existing for loop to a forEach loop

  tasks.forEach(getTask);

  function getTask(task) {
    const formattedTask = `Task: ${task.title}, Priority: ${task.priority}`;
    formattedTasks.push(formattedTask);
  }

  return formattedTasks;
}

// Test the getFormattedTasks function and print the tasks
const formattedTasks = getFormattedTasks(tasks);
console.log(formattedTasks);

// output should be:
// [ 'Task: Buy groceries, Priority: High',
//   'Task: Read a book, Priority: Medium',
//   'Task: Go for a run, Priority: Low' ]
