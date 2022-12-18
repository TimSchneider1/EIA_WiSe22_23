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
    adder.addEventListener("click", function () {
        let taskNew = newTask({ name: input.value, done: false, delete: false });
        console.log(taskNew);
        counter++;
        const counting = document.getElementById('currentTasks');
        counting.textContent = String(counter);
        let element = document.createElement('div');
        element.appendChild(new Text(input.value));
        let body = document.getElementById("newTaskAdded");
        body.appendChild(element);
        const clearLine = document.getElementById("takAddBtn");
        input.value = '';
    });
})(A10 || (A10 = {}));
//# sourceMappingURL=todolist.js.map