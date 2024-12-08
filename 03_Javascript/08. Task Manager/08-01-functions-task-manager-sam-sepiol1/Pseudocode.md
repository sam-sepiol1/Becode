### The Task Manager

## Steps.

    1. How to store the data ?
    2. Create the terminal CLI.
    3. Create a function to Add task.
    4. A function to remove task.
    5. Mark task as done
    6. Display task.
    7. User interface ( using readline module ).

---
#### Store the data. 

Store it in an JS Object. ( Bonus : JSON file )

```js

let data = {
  1: 'task one',
  2: 'task two',
  3: 'task three'
}

```

### Create the CLI.

Create a user interface that display the options for the user. 

    1. Display Tasks
    2. Add Task
    3. Remove Task
    4. Mark task as done.
    5. Exit

#### Display task.

    1. Ask the user which task he wants to display.
    2. Display that task. 

#### Add a task.

    1. Ask the user what task he wants to create with the readline module.
    2. Add that task inside the JS Object with a new key. 
   
#### Remove a task.

    1. Ask the user which task he want to remove.
    2. Delete that task. 
    3. Update the order.

#### Mark a task as done. 

    1. Ask the user which task is done
    2. Add 'Done' in front of the task.

#### Save the data 

    1. Create a JSON file.
    2. Use the fs module to save the data to the JSON file with the method writeFileSync().

