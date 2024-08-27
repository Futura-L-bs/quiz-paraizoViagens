// Importações
import { labelInputTextName } from "./components/InputsText.js";
import { buttonNext } from "./components/buttons.js";
import { buttonPrevious } from "./components/buttons.js";
import { imageBackground } from "./components/image.js";
import { InputDate } from "./componentes/InputDate/InputDate.js"
import { checkboxRadio } from "./componentes/CheckBoxRadio/CheckBoxRadio.js";

// Variáveis globais
let currentStep = 1;
const totalSteps = 15; // Total teórico de passos
const implementedSteps = 6; // Número de passos realmente implementados

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

    // Inicializar inputs para etapas 1 a 5
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

    const step3Options = [
        { value: "amo_viajar", label: "Simm, amo viajar!" },
        { value: "ainda_nao", label: "Ainda não :(" }
    ]; 
    const step3Inputs = document.querySelector("#step3 .blockInputs");
    step3Inputs.appendChild(checkboxRadio("Você gosta de viajar?", "Já viajou esse ano?", step3Options, "viajou_esse_ano?"));

    const step4Inputs = document.querySelector("#step4 .blockInputs");
    step4Inputs.appendChild(labelInputTextName("Digite seu desejo de destino:", "idTextDestino", "destino", ""));
    
    const step5Options = [
        { value: "possuo_data", label: "Sim, ja tenho uma data programada" },
        { value: "decidindo_data", label: "Ainda nao, estou decidindo as datas e possuo flexibilidade" }
    ]; 
    const step5Inputs = document.querySelector("#step5 .blockInputs");
    step5Inputs.appendChild(checkboxRadio("", "data programada ou possui flexibilidade?", step5Options, "possuo_data?"));
}

function initializeStep6() {
    const step6Inputs = document.querySelector("#step6 .blockInputs");
    step6Inputs.innerHTML = ''; 

    const etapa5Resposta = localStorage.getItem('possuo_data?');

    if (etapa5Resposta === 'possuo_data') {
        const semDataOptions = [
            { value: "ida_sem_data_definida", label: "Ida sem data definida" },
            { value: "volta_sem_data_definida", label: "Volta sem data definida" },
        ];

       

        step6Inputs.appendChild(InputDate("Data de ida:", "idTextDataDeIda", "data_de_ida", "dd/mm/aaaa"));
        step6Inputs.appendChild(checkboxRadio("", "", semDataOptions, "sem_data_ida"));

        step6Inputs.appendChild(InputDate("Data de volta:", "idTextDataDeVolta", "data_de_volta", "dd/mm/aaaa"));
        step6Inputs.appendChild(checkboxRadio("", "", semDataOptions, "sem_data_volta"));
    } else {
        
        step6Inputs.appendChild(labelInputTextName("Digite quantos dias você deseja:", "idDiasDeViagem", "dias_de_viagem", ""));
    }
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

        // Se estamos entrando na etapa 6, inicialize-a
        if (currentStep === 6) {
            initializeStep6();
        }

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