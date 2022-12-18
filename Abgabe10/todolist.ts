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
        let taskNew = newTask ({name: input.value, done: false, delete: false});
        console.log(taskNew);
        
        counter++;
        const counting = document.getElementById('currentTasks') as HTMLElement;
        counting.textContent = String(counter);
        
        let element = document.createElement('div')
        element.appendChild(new Text(input.value))
        let body = document.getElementById("newTaskAdded");
        body.appendChild(element);

        const clearLine = document.getElementById("takAddBtn") as HTMLInputElement;
        input.value = '';
    }) 
    
    
}