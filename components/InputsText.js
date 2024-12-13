//component LABEL + INPUT TEXT
//labelText <- texto do label
//id <- id do label e input text
export function labelInputTextName(labelText, id, key, placeholder) {
    const label = document.createElement("label");
    const inputText = document.createElement("input");
    const divLabelInput = document.createElement("div");

    divLabelInput.classList.add("divLabelInput");

    label.setAttribute("for", id);
    inputText.setAttribute("type", "text");
    inputText.setAttribute("id", id);
    inputText.setAttribute("placeholder", placeholder);
     


    inputText.required = true;

    label.innerHTML = labelText;

    divLabelInput.appendChild(label);
    divLabelInput.appendChild(inputText);

    // Verifica se o botão existe
    let btn = document.querySelector(".btn");

    if (btn){
        btn.addEventListener("click", () => {
            if (inputText) {
                localStorage.setItem(key, inputText.value);
            }
        });
    }

    return divLabelInput;
}



// export function labelInputTextName(labelText, id) {
//     label = document.createElement("label");
//     inputText = document.createElement("input");

//     label.setAttribute("for", `${id}`);
//     inputText.setAttribute("type", "text");
//     inputText.setAttribute("id", `${id}`);

//     label.innerHTML = labelText;

//     return [label, inputText];
// }





// function labelTextName(labelText, id) {
//     label = document.createElement("label");
//     label.setAttribute("for", `${id}`);
//     label.innerHTML = labelText;
//     return label;
// }