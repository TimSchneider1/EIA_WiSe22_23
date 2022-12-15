namespace A10{

    interface list {
        name: string;
        done: boolean;
        delete: boolean;
    }

    let aufgabe1:list = {
        name: "test",
        done: false,
        delete: false,
    }
    
    
    const input = document.querySelector("#textinput").ariaValueText;

    const adder: HTMLButtonElement = document.getElementById("taskAddBtn") as HTMLButtonElement;
    adder.addEventListener('click', function(){
        const input = document.querySelector("#textinput").ariaValueText;
        console.log('')
    })
}