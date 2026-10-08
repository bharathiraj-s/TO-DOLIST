
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        taskInput.focus();
        return;
    }

    // Create task box
    const listItem = document.createElement("li");

    // Task text
    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    // YES checkbox
    const yesLabel = document.createElement("label");
    yesLabel.className = "yes-label";

    const yesCheckbox = document.createElement("input");
    yesCheckbox.type = "checkbox";

    yesLabel.append(yesCheckbox, " YES");

    // NO checkbox
    const noLabel = document.createElement("label");
    noLabel.className = "no-label";

    const noCheckbox = document.createElement("input");
    noCheckbox.type = "checkbox";

    noLabel.append(noCheckbox, " NO");

    // YES behavior
    yesCheckbox.addEventListener("change", function () {
        if (yesCheckbox.checked) {
            noCheckbox.checked = false;
            taskName.style.textDecoration = "line-through";
            taskName.style.color = "#15803d";
        } else {
            taskName.style.textDecoration = "none";
            taskName.style.color = "#111827";
        }
    });

    // NO behavior
    noCheckbox.addEventListener("change", function () {
        if (noCheckbox.checked) {
            yesCheckbox.checked = false;
            taskName.style.textDecoration = "none";
            taskName.style.color = "#dc2626";
        } else {
            taskName.style.color = "#111827";
        }
    });

    // Put all elements inside the task box
    listItem.append(taskName, yesLabel, noLabel);

    // Display inside the outer container
    taskList.appendChild(listItem);

    // Clear input after adding
    taskInput.value = "";
    taskInput.focus();
}

// Add task on button click
addButton.addEventListener("click", addTask);

// Also allow Enter key to add a task
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});