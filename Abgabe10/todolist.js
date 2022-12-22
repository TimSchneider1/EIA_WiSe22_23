var A10;
(function (A10) {
    const input = document.getElementById('textinput');
    const textinput = input.value;
    function newTask(input) {
        return {
            name: input.name,
            done: input.done,
            delete: input.delete,
        };
    }
    let counter = 0;
    const adder = document.getElementById("taskAddBtn");
    adder.addEventListener('click', function () {
        let taskNew = newTask({ name: input.value, done: false, delete: false });
        console.log(taskNew);
        const trashCan = document.createElement('div');
        trashCan.className = "fas fa-trash-alt";
        const checkBox = document.createElement('div');
        checkBox.className = "far fa-circle";
        const checked = document.createElement('div');
        checked.className = "far fa-times-circle";
        counter++;
        const counting = document.getElementById('currentTasks');
        counting.textContent = String(counter);
        let element = document.createElement('div');
        element.appendChild(new Text(input.value));
        element.appendChild(trashCan);
        element.appendChild(checkBox);
        let body = document.getElementById("newTaskAdded");
        body.appendChild(element);
        trashCan.addEventListener('click', function () {
            element.remove();
        });
        checkBox.addEventListener('click', function () {
            if (checkBox.classList.contains("fa-circle"))
                checkBox.classList.replace("fa-circle", "fa-times-circle");
            else
                checkBox.classList.replace("fa-times-circle", "fa-circle");
        });
        const clearLine = document.getElementById("takAddBtn");
        input.value = '';
    });
})(A10 || (A10 = {}));
//# sourceMappingURL=todolist.js.map