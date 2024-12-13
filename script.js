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
import { InputDate } from "./components/inputDate.js";


let currentStep = 8;
const totalSteps = 15; // Total teórico de passos
const implementedSteps = 3; // Número de passos realmente implementados

// variaveis
let blockInputs2 = document.querySelector(".conteiner02 .blockInputs");
let blockInputs8 = document.querySelector(".conteiner08 .blockInputs");
let blockInputs10 = document.querySelector(".conteiner10 .blockInputs");
let blockInputs12 = document.querySelector(".conteiner12 .blockInputs");


let imagesBackground4 = document.querySelector("#step4 .imagesBackground");
let imagesBackground5 = document.querySelector("#step5 .imagesBackground");
let imagesBackground6 = document.querySelector("#step6 .imagesBackground");
let imagesBackground7 = document.querySelector("#step7 .imagesBackground");
let imagesBackground8 = document.querySelector("#step8 .imagesBackground");
let imagesBackground9 = document.querySelector("#step9 .imagesBackground");
let imagesBackground10 = document.querySelector("#step10 .imagesBackground");
let imagesBackground11 = document.querySelector("#step11 .imagesBackground");
let imagesBackground14 = document.querySelector("#step14 .imagesBackground");
let imagesBackground15 = document.querySelector("#step15 .imagesBackground");
let imagesBackground16 = document.querySelector("#step16 .imagesBackground");
let imagesBackground17 = document.querySelector("#step17 .imagesBackground");



let Button_Next = document.querySelector(".buttonNext");
let back_button = document.querySelector(".back-button");

let imageGirl = document.querySelector(".imageGirl");
let imageMen = document.querySelector(".imageMen");

let girl = 0;
let men = 0;

let pMen = document.querySelector(".men");
let pGirl = document.querySelector(".girl");


//função botão Next
buttonNext();


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


initializeInputs();

function initializeInputs() {
    const step1Inputs = document.querySelector("#step2 .blockInputs");
    step1Inputs.appendChild(labelInputTextName("Digite seu nome:", "idTextNome", "nome", "seu nome"));
    step1Inputs.appendChild(labelInputTextName("Digite seu sobrenome:", "idTextSobrenome", "sobrenome", "seu sobrenome"));
    step1Inputs.appendChild(labelInputTextName("Digite seu telefone:", "idTextTelefone", "telefone", "99 99999 9999"));
// -------------------
    const step3Inputs = document.querySelector("#step3 .blockInputs");
    step3Inputs.appendChild(labelInputTextName("Digite seu e-mail:", "idTextEmail", "email", "seu@email.com"));
    step3Inputs.appendChild(InputDate("Data de nascimento:", "idTextDataNascimento", "dataNascimento", "dd/mm/aaaa"));

    const step3Title = document.querySelector("#step3 h1");
    let name3 = localStorage.getItem("nome");
    step3Title.innerHTML = `Olá ${name3}, seja bem vindo(a)!`
// -------------------

    const step4Inputs = document.querySelector("#step4 .radio-container");
    step4Inputs.appendChild(createRadioButton('Simm, amo viajar!', 'travel1', 'travel', 'travel1', true));

    step4Inputs.appendChild(createRadioButton('Ainda não :(', 'travel2', 'travel', 'travel2'));

    imageBackground(imagesBackground4, "car1.png");

    let title4 = document.querySelector("#step4 p");
    let textTitle4 = "Você já viajou esse ano?"

    titleConteiner(title4, textTitle4);
// -------------------

    const step5InputsText = document.querySelector("#step5 .blockInputs");

    let title5 = document.querySelector("#step5 p");
    let textTitle5 = "Para qual destino você deseja viajar?"

    titleConteiner(title5, textTitle5);

    step5InputsText.appendChild(labelInputTextName("Digite seu desejo de destino:", "idDestination", "destino", "Qual o destino"));

    imageBackground(imagesBackground5, "italia.png");
// -------------------

    const step6Inputs = document.querySelector("#step6 .radio-container");
    step6Inputs.appendChild(createRadioButton('Sim, já tenho uma data programada.', 'flexibility1', 'flexibility', 'flexibility1', true));

    step6Inputs.appendChild(createRadioButton('Ainda não, estou decidindo as datas e possuo flexibilidade.', 'flexibility2', 'flexibility', 'flexibility2'));

    imageBackground(imagesBackground6, "deserto.png");

    let title6 = document.querySelector("#step6 p");
    let textTitle6 = "Você já tem a data programada para sua viagem ou possui flexibilidade?"

    titleConteiner(title6, textTitle6);
// -------------------

    const step7Inputs = document.querySelector("#step7 .radio-container");
    let dataIda = document.createElement("div");

    let inputIda = InputDate("Data de ida:", "idTextDataDeIda", "data_de_ida", "dd/mm/aaaa");
    let radioIda = createRadioButton('Sem data definida', 'noDate1', 'noDate', 'noDate1');

    dataIda.classList.add("dataIda")
    dataIda.appendChild(inputIda);
    dataIda.appendChild(radioIda);
    step7Inputs.appendChild(dataIda);

    let dataVolta = document.createElement("div");

    let inputVolta = InputDate("Data de volta:", "idTextDataDeVolta", "data_de_volta", "dd/mm/aaaa");
    let radioVolta = createRadioButton('Sem data definida', 'noDate2', 'noDate', 'noDate2');

    dataVolta.classList.add("dataVolta")
    dataVolta.appendChild(inputVolta);
    dataVolta.appendChild(radioVolta);
    step7Inputs.appendChild(dataVolta);

    imageBackground(imagesBackground7, "escadaria.png");

    let title7 = document.querySelector("#step7 p");
    let textTitle7 = "Quais são as datas de ida e volta da sua viagem?"

    titleConteiner(title7, textTitle7);
// -------------------

    const step8InputsText = document.querySelector("#step8 .blockInputs");

    let title8 = document.querySelector("#step8 p");
    let textTitle8 = "Você gostaria de passar em média quantos dias no destino escolhido?"

    titleConteiner(title8, textTitle8);

    step8InputsText.appendChild(labelInputTextName("Digite quantos dias você deseja:", "idDay", "diasDesejado", "Quantos dias"));

    imageBackground(imagesBackground8, "bonde.png");
// -------------------

    const step9Inputs = document.querySelector("#step9 .radio-container");
    step9Inputs.appendChild(inputNumber("Quantas pessoas vão te acompanhar:", "idPeople", "People"));
    step9Inputs.appendChild(createRadioButton('Somente eu', 'idOnly', 'Only', 'idOnly'));

    imageBackground(imagesBackground9, "pessoas1.png");

    let title9 = document.querySelector("#step9 p");
    let textTitle9 = "Essa reserva é para quantas pessoas?"

    titleConteiner(title9, textTitle9);
// -------------------

    const step10Inputs = document.querySelector("#step10 .blockInputs");
    step10Inputs.appendChild(inputNumber("Crianças (0-12 anos):", "idC0_12", "C0_12"));
    step10Inputs.appendChild(inputNumber("Adolescentes (12-18 anos):", "idA12_18", "A12_18"));  
    step10Inputs.appendChild(inputNumber("Adultos (18-64 anos):", "idA18_64", "A18_64"));  
    step10Inputs.appendChild(inputNumber("Idosos (65+ anos):", "idI65", "I65"));  

    // 8
    imageBackground(imagesBackground10, "pessoas2.png");

    let title10 = document.querySelector("#step10 p");
    let textTitle10 = "Qual é a faixa etária das pessoas que irão viajar com você?"

    titleConteiner(title10, textTitle10);
// -------------------

    const step11Inputs = document.querySelector("#step11 .blockInputs");
    step11Inputs.appendChild(inputNumber("Bagagem de mão (10kg):", "idbag10", "bg10"));
    step11Inputs.appendChild(inputNumber("Bagagem despachada (23kg):", "idbag23", "bg23"));  
    // 8
    imageBackground(imagesBackground11, "mala.png");

    // conteiner08
    let title11 = document.querySelector("#step11 p.titleName");
    let name11 = localStorage.getItem("nome");
    let textTitle11 = "Qual é a faixa etária das pessoas que irão viajar com você?"

    titleNameConteiner(title11, textTitle11, name11);
// -------------------

    const step12Inputs = document.querySelector("#step12 .image-grid");
    step12Inputs.appendChild(createImageCheckbox('Pontos turísticos', '../assets/images/Pontos.png', 'pontos-turisticos', 'pontos-turisticos'));

    step12Inputs.appendChild(createImageCheckbox('Gastronomia', '../assets/images/Gastronomia.png', 'Gastronomia', 'Gastronomia'));

    step12Inputs.appendChild(createImageCheckbox('Natureza e aventura', '../assets/images/Natureza.png', 'Natureza-e-aventura', 'Natureza-e-aventura'));

    step12Inputs.appendChild(createImageCheckbox('Compras e artesanato', '../assets/images/Compras.png', 'Compras-e-artesanato', 'Compras-e-artesanato'));

    step12Inputs.appendChild(createImageCheckbox('Experiências únicas', '../assets/images/Experiencias.png', 'Experiencias-unicas', 'Experiencias-unicas'));

    step12Inputs.appendChild(createImageCheckbox('Lazer', '../assets/images/Lazer.png', 'Lazer', 'Lazer'));

    step12Inputs.appendChild(createImageCheckbox('Trabalho e networking', '../assets/images/Trabalho.png', 'Trabalho-e-networking', 'Trabalho-e-networking'));

    let title12 = document.querySelector("#step12 p");
    let textTitle12 = "nessa viagem, selecione o que você procura?"
    let name12 = localStorage.getItem("nome");

    titleNameConteiner(title12, textTitle12, name12);
// -------------------

    const step13Inputs = document.querySelector("#step13 .image-grid");
    step13Inputs.appendChild(createImageCheckbox('Hotéis', '../assets/images/Hoteis.png', 'idHoteis', 'Hoteis'));

    step13Inputs.appendChild(createImageCheckbox('Hostels', '../assets/images/Hostels.png', 'idHostels', 'Hostels'));

    step13Inputs.appendChild(createImageCheckbox('Airbnb', '../assets/images/Airbnb.png', 'idAirbnb', 'Airbnb'));

    step13Inputs.appendChild(createImageCheckbox('Camping', '../assets/images/Camping.png', 'idCamping', 'Camping'));

    let title13 = document.querySelector("#step13 p");
    let textTitle13 = "Selecione sua preferência específica de hospedagem?"

    titleConteiner(title13, textTitle13);

    const step13InputsText = document.querySelector("#step13 .blockInputs");

    step13InputsText.appendChild(labelInputTextName("Outros:", "idOtherPlace", "outroLugar", "Digite sua hospedagem"));
// -------------------

    const step14Inputs = document.querySelector("#step14 .radio-container");
    step14Inputs.appendChild(createRadioButton('Sim', 'carOption1', 'carOption', 'carOption1', true));

    step14Inputs.appendChild(createRadioButton('não', 'carOption2', 'carOption', 'carOption2'));

    imageBackground(imagesBackground14, "car2.png");

    let title14 = document.querySelector("#step14 p");
    let textTitle14 = "Você vai precisar alugar um carro para esta viagem?"

    titleConteiner(title14, textTitle14);
// -------------------

    const step15Inputs = document.querySelector("#step15 .radio-container");
    step15Inputs.appendChild(createRadioButton('Sim', 'idYes', 'Option', 'idYes'));
    step15Inputs.appendChild(createRadioButton('Não', 'idNo', 'Option', 'idNo', true));

    imageBackground(imagesBackground15, "Estetoscopio.png");

    let title15 = document.querySelector("#step15 p");
    let textTitle15 = "Há alguma consideração especial relacionada à segurança e saúde que devemos saber?"

    titleConteiner(title15, textTitle15);

    const step15InputsText = document.querySelector("#step15 .blockInputs");
    step15InputsText.appendChild(labelInputTextName("Digite os cuidados necessarios:", "idCaution", "cuidados", "Quais são os cuidados"));
// -------------------

    const step16Inputs = document.querySelector("#step16 .radio-container");
    step16Inputs.appendChild(createRadioButton('SIM, quero me garantir!', 'SegYes', 'Seg', 'SegYes'));
    step16Inputs.appendChild(createRadioButton('NÃO, tenho fé!', 'SegNo', 'Seg', 'SegNo', true));

    imageBackground(imagesBackground16, "mala2.png");

    let title16 = document.querySelector("#step16 p");
    let textTitle16 = "O seguro viagem é algo importantíssimo para evitar gastos não previstos em nossas viagens! <br><br> Você gostaria de uma cotação de seguro para esta viagem especifica?"

    titleConteiner(title16, textTitle16);
// -------------------

    const step17Inputs = document.querySelector("#step17 .radio-container");
    step17Inputs.appendChild(createRadioButton('Estou apenas pesquisando as opções e valores, mas ainda não tenho certeza se quero viajar!😥', 'idBest1', 'Best', 'idBest1'));
    step17Inputs.appendChild(createRadioButton('Quero conhecer a Paraizo Viagens e suas vantagens!😊', 'idBest2', 'Best', 'idBest2'));
    step17Inputs.appendChild(createRadioButton('Não tenho dúvidas e já estou pronto (a) para comprar minha passagem e ter uma experiência incrivel!🥰', 'idBest3', 'Best', 'idBest3', true));


    imageBackground(imagesBackground17, "amigos.png");

    let title17 = document.querySelector("#step17 p");
    let textTitle17 = `Agora que já temos noção da viagem dos seus sonhos, estamos prontos para realizá-la! 🤩 <br><br> Gabriel, neste momento qual das opções abaixo se encaixa melhor na sua realidade?`

    titleConteiner(title17, textTitle17);

}

// updateStepIndicator();

document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step-container');
    const totalSteps = steps.length;
    let currentStep = 0;

    const nextButton = document.querySelector(".buttonNext");
    const backButton = document.querySelector(".back-button");
    const progressBar = document.querySelector('.progress-bar');
    const currentStepElement = document.getElementById('currentStep');
    const totalStepsElement = document.getElementById('totalSteps');

    totalStepsElement.textContent = totalSteps;

    function updateUI() {
        steps.forEach((step, index) => {
            step.classList.toggle('hidden', index !== currentStep);
        });

        currentStepElement.textContent = currentStep + 1;
        const progress = ((currentStep + 1) / totalSteps) * 100;
        progressBar.style.width = `${progress}%`;

        backButton.style.display = currentStep === 0 ? 'none' : 'flex';
        nextButton.textContent = currentStep === totalSteps - 1 ? 'Finalizar' : 'Próximo';
    }

    function nextStep() {
        if (currentStep < totalSteps - 1) {
            currentStep++;
            updateUI();
        } else {
            console.log("Formulário concluído.");
            // Adicionar lógica de finalização aqui
        }
    }

    function previousStep(event) {
        event.preventDefault();
        if (currentStep > 0) {
            currentStep--;
            updateUI();
        }
    }

    nextButton.addEventListener("click", nextStep);
    backButton.addEventListener("click", previousStep);

    updateUI();
});
