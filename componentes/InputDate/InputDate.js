export function InputDate(labelText, id, key, placeholder) {
    const divLabelInput = document.createElement("div");
    divLabelInput.classList.add("divLabelInput");

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerHTML = labelText;

    const inputText = document.createElement("input");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("id", id);
    inputText.setAttribute("placeholder", placeholder);
    inputText.required = true;

    divLabelInput.appendChild(label);
    divLabelInput.appendChild(inputText);

    function formatDate(input) {
        let value = input.value.replace(/\D/g, '').slice(0, 8);
        let formattedValue = '';

        if (value.length > 0) {
            formattedValue += value.substr(0, 2);
        }
        if (value.length > 2) {
            formattedValue += '/' + value.substr(2, 2);
        }
        if (value.length > 4) {
            formattedValue += '/' + value.substr(4, 4);
        }

        input.value = formattedValue;
    }

    inputText.addEventListener('input', function(e) {
        formatDate(this);
    });

    inputText.addEventListener('keydown', function(e) {
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    // Verifica se o botão existe
    let btn = document.querySelector(".btn");
    if (btn) {
        btn.addEventListener("click", () => {
            if (inputText) {
                localStorage.setItem(key, inputText.value);
            }
        });
    }

    return divLabelInput;
}