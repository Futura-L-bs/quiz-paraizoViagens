import { labelInputTextName } from "./components/InputsText.js";
import { buttonNext } from "./components/buttons.js";


let conteiner = document.querySelector(".conteiner");

let text = "Digite no label:";

const [labelElement, inputElement] = labelInputTextName(text, "idText");

conteiner.appendChild(labelElement);
conteiner.appendChild(inputElement); 
conteiner.appendChild(buttonNext()); 
