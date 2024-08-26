//Imports
import { labelInputTextName } from "./components/InputsText.js";
import { inputNumber } from "./components/inputNumber.js";
import { createImageCheckbox } from "./components/checkImage.js";
import { createRadioButton } from "./components/checkBoxRadio.js";
import { titleNameConteiner } from "./components/title.js";
import { titleConteiner } from "./components/title.js";
import { buttonNext } from "./components/buttons.js";
import { buttonPrevious } from "./components/buttons.js";
import { imageBackground } from "./components/image.js";

// variaveis
let blockInputs2 = document.querySelector(".conteiner02 .blockInputs");
let blockInputs8 = document.querySelector(".conteiner08 .blockInputs");
let blockInputs10 = document.querySelector(".conteiner10 .blockInputs");
let blockInputs12 = document.querySelector(".conteiner12 .blockInputs");


let imagesBackground = document.querySelector(".conteiner08 .imagesBackground");
let imagesBackground2 = document.querySelector(".conteiner11 .imagesBackground");
let imagesBackground3 = document.querySelector(".conteiner12 .imagesBackground");
let imagesBackground4 = document.querySelector(".conteiner13 .imagesBackground");


let Button_Next = document.querySelector(".buttonNext");
let back_button = document.querySelector(".back-button");

let imageGirl = document.querySelector(".imageGirl");
let imageMen = document.querySelector(".imageMen");

let girl = 0;
let men = 0;

let pMen = document.querySelector(".men");
let pGirl = document.querySelector(".girl");

// conteiner08
let title8 = document.querySelector("p.titleName");
let name = localStorage.getItem("nome");
let textTitle8 = "você irá precisar de quantas bagagens nessa viagem?"

titleNameConteiner(title8, textTitle8, name);

//função botão Next
buttonNext();

imageBackground(imagesBackground, "mala.png");

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


// adicionando inputs + label
const labelInputName01 = labelInputTextName("Digite seu nome:", "idTextNome", "nome", "seu nome");
const labelInputName02 = labelInputTextName("Digite seu sobrenome:", "idTextSobrenome", "sobrenome", "seu sobrenome");
const labelInputName03 = labelInputTextName("Digite seu telefone:", "idTextTelefone", "telefone", "99 99999 9999");



const labelInputNumber01 = inputNumber("Bagagem de mão (10kg):", "idbag10", "bg10");
const labelInputNumber02 = inputNumber("Bagagem despachada (23kg):", "idbag23", "bg23");


blockInputs2.appendChild(labelInputName01);
blockInputs2.appendChild(labelInputName02);
blockInputs2.appendChild(labelInputName03);

blockInputs8.appendChild(labelInputNumber01);
blockInputs8.appendChild(labelInputNumber02);


// conteiner09
let title9 = document.querySelector(".conteiner09 p");
let textTitle9 = "nessa viagem, selecione o que você procura?"
let name9 = localStorage.getItem("nome");

titleNameConteiner(title9, textTitle9, name9);

let containerImagesCheck = document.querySelector('.conteiner09 .image-grid');

// createImageCheckbox(labelText, imgSrc, id, value)
let item1 = createImageCheckbox('Pontos turísticos', '../assets/images/Pontos.png', 'pontos-turisticos', 'pontos-turisticos');

let item2 = createImageCheckbox('Gastronomia', '../assets/images/Gastronomia.png', 'Gastronomia', 'Gastronomia');

let item3 = createImageCheckbox('Natureza e aventura', '../assets/images/Natureza.png', 'Natureza-e-aventura', 'Natureza-e-aventura');

let item4 = createImageCheckbox('Compras e artesanato', '../assets/images/Compras.png', 'Compras-e-artesanato', 'Compras-e-artesanato');

let item5 = createImageCheckbox('Experiências únicas', '../assets/images/Experiencias.png', 'Experiencias-unicas', 'Experiencias-unicas');

let item6 = createImageCheckbox('Lazer', '../assets/images/Lazer.png', 'Lazer', 'Lazer');

let item7 = createImageCheckbox('Trabalho e networking', '../assets/images/Trabalho.png', 'Trabalho-e-networking', 'Trabalho-e-networking');


containerImagesCheck.appendChild(item1);
containerImagesCheck.appendChild(item2);
containerImagesCheck.appendChild(item3);
containerImagesCheck.appendChild(item4);
containerImagesCheck.appendChild(item5);
containerImagesCheck.appendChild(item6);
containerImagesCheck.appendChild(item7);


// conteiner10
let title10 = document.querySelector(".conteiner10 p");
let textTitle10 = "Selecione sua preferência específica de hospedagem?"

titleConteiner(title10, textTitle10);

let containerImagesCheck2 = document.querySelector('.conteiner10 .image-grid');

// createImageCheckbox(labelText, imgSrc, id, value)
let placeItem1 = createImageCheckbox('Hotéis', '../assets/images/Hoteis.png', 'pontos-turisticos', 'pontos-turisticos');

let placeItem2 = createImageCheckbox('Hostels', '../assets/images/Hostels.png', 'Gastronomia', 'Gastronomia');

let placeItem3 = createImageCheckbox('Airbnb', '../assets/images/Airbnb.png', 'Natureza-e-aventura', 'Natureza-e-aventura');

let placeItem4 = createImageCheckbox('Camping', '../assets/images/Camping.png', 'Natureza-e-aventura', 'Natureza-e-aventura');

containerImagesCheck2.appendChild(placeItem1);
containerImagesCheck2.appendChild(placeItem2);
containerImagesCheck2.appendChild(placeItem3);
containerImagesCheck2.appendChild(placeItem4);

const labelInputPlace01 = labelInputTextName("Outros:", "idOtherPlace", "outroLugar", "Digite sua hospedagem");
blockInputs10.appendChild(labelInputPlace01);


// conteiner11
imageBackground(imagesBackground2, "car2.png");

let title11 = document.querySelector(".conteiner11 p");
let textTitle11 = "Você vai precisar alugar um carro para esta viagem?"

titleConteiner(title11, textTitle11);

let radioContainer = document.querySelector('.conteiner11 .radio-container');
// createRadioButton(labelText, id, name, value, checked = false)
let carOption1 = createRadioButton('Sim', 'carOption1', 'carOption', 'carOption1', true);
let carOption2 = createRadioButton('não', 'carOption2', 'carOption', 'carOption2');

radioContainer.appendChild(carOption1);
radioContainer.appendChild(carOption2);


// conteiner12
imageBackground(imagesBackground3, "Estetoscopio.png");

let radioContainer2 = document.querySelector('.conteiner12 .radio-container');
// createRadioButton(labelText, id, name, value, checked = false)
let optionYes = createRadioButton('Sim', 'idYes', 'Option', 'idYes');
let optionNo = createRadioButton('Não', 'idNo', 'Option', 'idNo', true);

radioContainer2.appendChild(optionYes);
radioContainer2.appendChild(optionNo);


let title12 = document.querySelector(".conteiner12 p");
let textTitle12 = "Há alguma consideração especial relacionada à segurança e saúde que devemos saber?"

titleConteiner(title12, textTitle12);

const labelInputAtencion01 = labelInputTextName("Digite os cuidados necessarios:", "idCaution", "cuidados", "Quais são os cuidados");
blockInputs12.appendChild(labelInputAtencion01);


// conteiner13
imageBackground(imagesBackground4, "mala2.png");

let title13 = document.querySelector(".conteiner13 p");
let textTitle13 = "O seguro viagem é algo importantíssimo para evitar gastos não previstos em nossas viagens! <br><br> Você gostaria de uma cotação de seguro para esta viagem especifica?"

titleConteiner(title13, textTitle13);

let radioContainer3 = document.querySelector('.conteiner13 .radio-container');
// createRadioButton(labelText, id, name, value, checked = false)
let optionSegYes = createRadioButton('SIM, quero me garantir!', 'SegYes', 'Seg', 'SegYes');
let optionSegNo = createRadioButton('NÃO, tenho fé!', 'SegNo', 'Seg', 'SegNo', true);

radioContainer3.appendChild(optionSegYes);
radioContainer3.appendChild(optionSegNo);

initializeInputs();

function initializeInputs() {
    const step1Inputs = document.querySelector("#step1 .blockInputs");
    step1Inputs.appendChild(labelInputTextName("Digite seu nome:", "idTextNome", "nome", "seu nome"));
    step1Inputs.appendChild(labelInputTextName("Digite seu sobrenome:", "idTextSobrenome", "sobrenome", "seu sobrenome"));
    step1Inputs.appendChild(labelInputTextName("Digite seu telefone:", "idTextTelefone", "telefone", "99 99999 9999"));

    const step2Inputs = document.querySelector("#step2 .blockInputs");
    step2Inputs.appendChild(labelInputTextName("Digite seu e-mail:", "idTextEmail", "email", "seu@email.com"));
    step2Inputs.appendChild(InputDate("Data de nascimento:", "idTextDataNascimento", "dataNascimento", "dd/mm/aaaa"));


    const step8Inputs = document.querySelector("#step8 .blockInputs");
    step2Inputs.appendChild(inputNumber("Bagagem de mão (10kg):", "idbag10", "bg10"));
    step2Inputs.appendChild(inputNumber("Bagagem despachada (23kg):", "idbag23", "bg23"));


}

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