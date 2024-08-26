export function createImageCheckbox(labelText, imgSrc, id, value) {
    const divImageCheckbox = document.createElement("div");
    const inputCheckbox = document.createElement("input");
    const divImageWrapper = document.createElement("div");
    const img = document.createElement("img");
    const label = document.createElement("label");

    divImageCheckbox.classList.add("image-checkbox");
    divImageCheckbox.addEventListener("click", () => {
        toggleSelection(divImageCheckbox)
    });

    inputCheckbox.setAttribute("type", "checkbox");
    inputCheckbox.setAttribute("id", id);
    inputCheckbox.setAttribute("name", "interesse");
    inputCheckbox.setAttribute("value", value);

    divImageWrapper.classList.add("image-wrapper");

    img.setAttribute("src", imgSrc);
    img.setAttribute("alt", labelText);

    label.setAttribute("for", id);
    label.textContent = labelText;

    divImageWrapper.appendChild(img);
    divImageCheckbox.appendChild(inputCheckbox);
    divImageCheckbox.appendChild(divImageWrapper);
    divImageCheckbox.appendChild(label);

    return divImageCheckbox;
}

function toggleSelection(element) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    element.classList.toggle('selected', checkbox.checked);
    console.log(checkbox.value + ' foi ' + (checkbox.checked ? 'selecionado' : 'desmarcado'));
}