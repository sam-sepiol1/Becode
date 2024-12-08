const readline = require("readline");
const fs = require("fs");
const { log } = require("console");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const welcome_message = `
-------------------------------
Welcome to your task manager, Press:
1. to see all your tasks,
2. to add a task,
3. to delete a task,
4. to mark a task as done,
5. to show tasks left to do,
6. to Exit the task manager
-------------------------------`;

let data = require("./data.json") || [];

// main function
function main() {
  console.log(welcome_message);

  rl.question("Your choice: ", (answer) => {
    switch (answer) {
      case "1":
        // Call display function
        display_tasks();
        main();
        break;

      case "2":
        // Call add function
        add_task();
        break;

      case "3":
        // Call delete function
        delete_task();
        break;

      case "4":
        // Call done function
        task_done();
        break;

      case "5":
        filter_task();
        main();
        break;

      case "6":
        rl.close();
        break;

      default:
        invalid_answer();
        break;
    }
  });
}

// Display tasks
function display_tasks() {
  if (Object.keys(data).length != 0) {
    for (const task in data) {
      console.log(`${parseInt(task)+1} :  ${data[task].task}`);
    }
  } else {
    console.log("No task to do, you're free");
  }
}

// Add a task
function add_task() {
  rl.question("Enter your task: ", (answer) => {
	
    const new_task = {
      id: data.length + 1,
      task: answer,
      status: false,
    };
    data.push(new_task);

    console.log("Task added successfully!");
    save_data();
    main();
  });
}

// Mark a task as done
function task_done() {
  if (Object.keys(data).length != 0) {
    rl.question("Enter the number of the task : ", (answer) => {
      data[answer - 1].status = !data[answer - 1].status;

      rl.question("Do you want to delete the task(y/n)", (decision) => {
        if (decision === "y") {
          data.splice(answer - 1, 1);
          
          save_data();
          main();
        } else {
          save_data();
          main();
        }
      });
    });
  } else {
    console.log("No task here");
    main();
  }
}

// Delete a task
function delete_task() {
  if (Object.keys(data).length != 0) {
    display_tasks();

    rl.question(`Enter the number of the task to delete : `, (answer) => {
		if (parseInt(answer) > Object.keys(data).length ) {
			invalid_answer();
			
		} else { 
			data.splice(answer - 1, 1);
			save_data();
		}

      
      main();
    });
  } else {
    console.log("Nothing to delete");
    main();
  }
  main();
}

// Filter tasks
function filter_task() {
  data.forEach((task) => {
    if (task.status === false) {
      console.log(`${task.id} : ${task.task}`);
    }
  });
  main();
}
// save data to json file.
function save_data() {
  fs.writeFileSync("./data.json", JSON.stringify(data,null,2));
}

// Invalid answer
function invalid_answer() {
  console.log("Not a valid answer");
}

main();
