export function createRadioButton(labelText, id, name, value, checked = false) {
    const divRadioButton = document.createElement("div");
    const inputRadio = document.createElement("input");
    const label = document.createElement("label");
    const spanText = document.createElement("span");
    const spanCheckmark = document.createElement("span");

    divRadioButton.classList.add("radio-button");

    inputRadio.setAttribute("type", "radio");
    inputRadio.setAttribute("id", id);
    inputRadio.setAttribute("name", name);
    inputRadio.setAttribute("value", value);

    if (checked) {
        inputRadio.setAttribute("checked", "checked");
    }

    // Adiciona lógica de seleção
    inputRadio.addEventListener("change", () => {
        const allRadios = document.querySelectorAll(`input[name="${name}"]`);
        allRadios.forEach(radio => radio.removeAttribute("checked"));
        if (inputRadio.checked) {
            inputRadio.setAttribute("checked", "checked");
        }
    });

    label.setAttribute("for", id);
    
    spanText.textContent = labelText;
    spanCheckmark.classList.add("checkmark");

    label.appendChild(spanText);
    label.appendChild(spanCheckmark);

    divRadioButton.appendChild(inputRadio);
    divRadioButton.appendChild(label);

    return divRadioButton;
}