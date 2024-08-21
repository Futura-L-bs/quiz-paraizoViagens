//Teste

import { labelInputTextName } from "./components/InputsText.js";
import { buttonNext } from "./components/buttons.js";
import { buttonPrevious } from "./components/buttons.js";
import { imageBackground } from "./components/image.js";



let conteiner = document.querySelector(".conteiner");

let text = "Digite no label:";

const [labelElement, inputElement] = labelInputTextName(text, "idText");

imageBackground(conteiner, "navbar.png");

conteiner.appendChild(labelElement);
conteiner.appendChild(inputElement); 
conteiner.appendChild(buttonNext()); 
conteiner.appendChild(buttonPrevious()); 
