//Imports
import { labelInputTextName } from "./components/InputsText.js";
import { buttonNext } from "./components/buttons.js";
import { buttonPrevious } from "./components/buttons.js";
import { imageBackground } from "./components/image.js";

// variaveis
let blockInputs = document.querySelector(".conteiner02 .blockInputs");
let Button_Next = document.querySelector(".buttonNext");
let back_button = document.querySelector(".back-button");

let imageGirl = document.querySelector(".imageGirl");
let imageMen = document.querySelector(".imageMen");

let girl = 0;
let men = 0;

let pMen = document.querySelector(".men");
let pGirl = document.querySelector(".girl");

//escolha de genero:
imageGirl.addEventListener("click", () => {
    girl = 1;
    console.log("Mulher");
    console.log(girl);

    pGirl.classList.add("activeGirl");
    if (men > 0) {
        men = 0;
        pMen.classList.remove("activeMen");
    }
});

imageMen.addEventListener("click", () => {
    men = 1;
    console.log("Homem");
    console.log(men);

    pMen.classList.add("activeMen");
    if (girl > 0) {
        girl = 0;
        pGirl.classList.remove("activeGirl");
    }
});


//função botão Next
buttonNext();

// adicionando inputs + label
const labelInputName01 = labelInputTextName("Digite seu nome:", "idTextNome", "nome", "seu nome");
const labelInputName02 = labelInputTextName("Digite seu sobrenome:", "idTextSobrenome", "sobrenome", "seu sobrenome");
const labelInputName03 = labelInputTextName("Digite seu telefone:", "idTextTelefone", "telefone", "99 99999 9999");


blockInputs.appendChild(labelInputName01);
blockInputs.appendChild(labelInputName02);
blockInputs.appendChild(labelInputName03);

// conteiner02.appendChild(buttonPrevious());

// barra de progresso
class StepProgressBar {
    constructor(element) {
        this.progressBar = element;
        this.totalSteps = parseInt(element.getAttribute('data-steps') || 1);
        this.currentStep = parseInt(element.getAttribute('data-current-step') || 0);
        this.update();
    }

    update() {
        const progress = (this.currentStep / this.totalSteps) * 100;
        this.progressBar.style.width = `${progress}%`;
    }

    setStep(step) {
        this.currentStep = Math.min(this.totalSteps, Math.max(0, step));
        this.update();
    }

    nextStep() {
        this.setStep(this.currentStep + 1);
    }

    previousStep() {
        this.setStep(this.currentStep - 1);
    }
}

let progressBar;

document.addEventListener('DOMContentLoaded', () => {
    const progressElement = document.querySelector('.progress-bar');
    progressBar = new StepProgressBar(progressElement);
});

function updateProgress(change) {
    if (change > 0) {
        progressBar.nextStep();
    } else {
        progressBar.previousStep();
    }
}

Button_Next.addEventListener("click", () =>{
    updateProgress(1);
    nextStep();
})

back_button.addEventListener("click", () =>{
    updateProgress(-1);
    goBack();
})

// --------------------------------------

// indicador numerico
class StepIndicator {
    constructor(totalSteps) {
        this.currentStep = 1; 
        this.totalSteps = totalSteps;
        this.currentStepElement = document.getElementById('currentStep');
        this.totalStepsElement = document.getElementById('totalSteps');
        this.updateDisplay();
    }

    updateDisplay() {
        this.currentStepElement.textContent = this.currentStep;
        this.totalStepsElement.textContent = this.totalSteps;
    }

    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateDisplay();
        }
    }

    previousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateDisplay();
        }
    }

    setStep(step) {
        this.currentStep = Math.max(1, Math.min(step, this.totalSteps));
        this.updateDisplay();
    }
}

// Inicialize o componente com o número total de etapas
const stepIndicator = new StepIndicator(15);

// Função para o botão voltar
function goBack() {
    stepIndicator.previousStep();
    console.log("Voltando para a etapa", stepIndicator.currentStep);
}

// Função para o botão de próxima etapa
function nextStep() {
    stepIndicator.nextStep();
    console.log("Avançando para a etapa", stepIndicator.currentStep);
}