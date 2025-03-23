let taskStack = [];

function addTask() {
    let taskInput = document.getElementById("task_input");
    let taskName = taskInput.value.trim();

    if (taskName !== "") {
        taskStack.push(taskName);
        taskInput.value = "";
        updatePipeline();
    }
}

function undoTask() {
    if (taskStack.length > 0) {
        taskStack.pop();
        updatePipeline();
    }
}

function updatePipeline() {
    let pipeline = document.getElementById("task_pipeline");

    if (taskStack.length > 0) {
        // Join all tasks with an arrow separator
        pipeline.innerHTML = taskStack.join(" , ");
    } else {
        // Display message when no tasks are present
        pipeline.innerHTML = "No tasks in pipeline";
    }
}