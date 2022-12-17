namespace A10{

    interface list {
        name: string;
        done: boolean;
        delete: boolean;
    }
    
    const input = document.getElementById('textinput') as HTMLInputElement;
    const textinput = input.value;

    function newTask (input: list):
    list{
        return {
            name: input.name,
            done: input.done,
            delete: input.delete,
        };
        
    }

    let counter:number = 0;

    const adder: HTMLButtonElement = document.getElementById("taskAddBtn") as HTMLButtonElement;
    adder.addEventListener("click", function (){
        const taskNew = newTask ({name: input.value, done: false, delete: false});
        console.log(taskNew);
        const clearLine = document.getElementById("taslAddBtn") as HTMLInputElement;
        input.value = '';
        counter++;
        const counting = document.getElementById('currentTasks') as HTMLElement;
        counting.textContent = String(counter);
        
    })

    
}