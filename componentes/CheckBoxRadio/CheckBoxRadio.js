export function checkboxRadio(labelText, name, options, key) {
    const containerDiv = document.createElement('div');
    containerDiv.className = 'radio-container';

    options.forEach((option, index) => {
        const radioButton = document.createElement('div');
        radioButton.className = 'radio-button';

        const input = document.createElement('input');
        input.type = 'radio';
        input.id = `${name}_${index}`;
        input.name = name;
        input.value = option.value;

        const label = document.createElement('label');
        label.htmlFor = `${name}_${index}`;

        const span = document.createElement('span');
        span.textContent = option.label;

        const checkmark = document.createElement('span');
        checkmark.className = 'checkmark';

        label.appendChild(span);
        label.appendChild(checkmark);

        radioButton.appendChild(input);
        radioButton.appendChild(label);

        containerDiv.appendChild(radioButton);

        input.addEventListener('change', function() {
            if (this.checked) {
                localStorage.setItem(key, this.value);
            }
        });
    });

    // Carregar valor salvo do localStorage
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
        const savedInput = containerDiv.querySelector(`input[value="${savedValue}"]`);
        if (savedInput) {
            savedInput.checked = true;
        }
    }

    return containerDiv;
}