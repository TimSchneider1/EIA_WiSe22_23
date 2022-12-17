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
        const taskNew = newTask({ name: input.value, done: false, delete: false });
        console.log(taskNew);
        const clearLine = document.getElementById("taslAddBtn");
        input.value = '';
        counter++;
        const counting = document.getElementById('currentTasks');
        counting.textContent = String(counter);
    });
})(A10 || (A10 = {}));
//# sourceMappingURL=todolist.js.map