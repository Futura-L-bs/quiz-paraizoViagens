export function inputNumber(labelText, id, key) {
    let label = document.createElement("label")
    let input = document.createElement("input")

    label.setAttribute("for", id);
    input.setAttribute("id", id);
    input.setAttribute("value", "0");
    input.setAttribute("type", "number");

    label.innerHTML = labelText;

    let buttonPos = document.createElement("button");
    let buttonNeg = document.createElement("button");

    input.classList.add("numeric-input-field");
    
    buttonPos.classList.add("numeric-input-button");
    buttonPos.innerHTML = "+";

    buttonNeg.classList.add("numeric-input-button");
    buttonNeg.innerHTML = "-";

    
    buttonPos.addEventListener("click", () =>{
        changeValue(1);
    })

    buttonNeg.addEventListener("click", () =>{
        changeValue(-1);
    })

    let divInputNumber = document.createElement("div");
    let blockNumber = document.createElement("div");

    blockNumber.classList.add("divLabelInput")
    divInputNumber.classList.add("numeric-input-container")


    divInputNumber.appendChild(buttonNeg);
    divInputNumber.appendChild(input);
    divInputNumber.appendChild(buttonPos);

    blockNumber.appendChild(label);
    blockNumber.appendChild(divInputNumber);

    function changeValue(amount){
        let currentValue = parseInt(input.value);
        let newValue = currentValue + amount;
        input.value = Math.max(0, newValue);
    }

    // Verifica se o botão existe
    let btn = document.querySelector(".btn");

    if (btn){
        btn.addEventListener("click", () => {
            if (inputText) {
                localStorage.setItem(key, input.value);
            }
        });
    }

    return blockNumber;
}