//componente LABEL + INPUT TEXT
//labelText <- texto do label
//id <- id do label e input text
export function labelInputTextName(labelText, id) {
    const label = document.createElement("label");
    const inputText = document.createElement("input");

    label.setAttribute("for", id);
    inputText.setAttribute("type", "text");
    inputText.setAttribute("id", id);

    label.innerHTML = labelText;

    return [label, inputText];
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