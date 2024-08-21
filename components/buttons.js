export function buttonNext(containerQuiz, text = "Proximo"){
    let button = document.createElement("button");
    button.innerHTML = text;
    
    return button;
}