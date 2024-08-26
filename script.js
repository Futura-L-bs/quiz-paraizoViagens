// Importações
import { labelInputTextName } from "./components/InputsText.js";
import { buttonNext } from "./components/buttons.js";
import { buttonPrevious } from "./components/buttons.js";
import { imageBackground } from "./components/image.js";
import {InputDate} from "./componentes/InputDate/InputDate.js"

// Variáveis globais
let currentStep = 1;
const totalSteps = 15; // Total teórico de passos
const implementedSteps = 3; // Número de passos realmente implementados

// Função de inicialização
function init() {
    // Inicializar elementos
    const nextButton = document.querySelector(".buttonNext");
    const imageGirl = document.querySelector(".imageGirl");
    const imageMen = document.querySelector(".imageMen");

    // Substituir o botão de voltar existente pelo importado
    const backButtonContainer = document.querySelector(".back-button").parentNode;
    const oldBackButton = document.querySelector(".back-button");
    const newBackButton = buttonPrevious();
    
    // Criar um contêiner para o novo botão e o ícone
    const backButtonWrapper = document.createElement('div');
    backButtonWrapper.className = 'back-button-wrapper';
    
    // Criar o ícone usando imageBackground
    const backIcon = document.createElement('span');
    imageBackground(backIcon, 'previous-icon.svg');
    backIcon.className = 'back-icon';
    
    // Adicionar o ícone e o novo botão ao wrapper
    backButtonWrapper.appendChild(backIcon);
    backButtonWrapper.appendChild(newBackButton);
    
    // Substituir o antigo botão pelo novo wrapper
    backButtonContainer.replaceChild(backButtonWrapper, oldBackButton);

    // Adicionar event listeners
    nextButton.addEventListener("click", nextStep);
    newBackButton.addEventListener("click", previousStep);
    imageGirl.addEventListener("click", () => selectGender('girl'));
    imageMen.addEventListener("click", () => selectGender('men'));

    // Inicializar inputs para etapas 2 e 3
    initializeInputs();

    // Atualizar indicador de etapa
    updateStepIndicator();
}

function initializeInputs() {
    const step1Inputs = document.querySelector("#step1 .blockInputs");
    step1Inputs.appendChild(labelInputTextName("Digite seu nome:", "idTextNome", "nome", "seu nome"));
    step1Inputs.appendChild(labelInputTextName("Digite seu sobrenome:", "idTextSobrenome", "sobrenome", "seu sobrenome"));
    step1Inputs.appendChild(labelInputTextName("Digite seu telefone:", "idTextTelefone", "telefone", "99 99999 9999"));

    const step2Inputs = document.querySelector("#step2 .blockInputs");
    step2Inputs.appendChild(labelInputTextName("Digite seu e-mail:", "idTextEmail", "email", "seu@email.com"));
    step2Inputs.appendChild(InputDate("Data de nascimento:", "idTextDataNascimento", "dataNascimento", "dd/mm/aaaa"));

}

function selectGender(gender) {
    const pGirl = document.querySelector(".girl");
    const pMen = document.querySelector(".men");
    
    if (gender === 'girl') {
        pGirl.classList.add("activeGirl");
        pMen.classList.remove("activeMen");
    } else {
        pMen.classList.add("activeMen");
        pGirl.classList.remove("activeGirl");
    }
}

function nextStep() {
    if (currentStep < implementedSteps) {
        document.getElementById(`step${currentStep}`).style.display = 'none';
        currentStep++;
        document.getElementById(`step${currentStep}`).style.display = 'block';
        updateStepIndicator();
        updateProgressBar();
    } else {
        console.log("Último passo implementado atingido.");
        // Aqui você pode adicionar uma lógica para finalizar o formulário
    }
}

function previousStep(event) {
    event.preventDefault(); 
    if (currentStep > 1) {
        document.getElementById(`step${currentStep}`).style.display = 'none';
        currentStep--;
        document.getElementById(`step${currentStep}`).style.display = 'block';
        updateStepIndicator();
        updateProgressBar();
    }
}

function updateStepIndicator() {
    document.getElementById('currentStep').textContent = currentStep;
    document.getElementById('totalSteps').textContent = totalSteps;
}

function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progress = (currentStep / totalSteps) * 100;
    progressBar.style.width = `${progress}%`;
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);