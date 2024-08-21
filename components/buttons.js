//component BUTTONS
//containerQuiz <- vai mostrar o proximo conteiner ao clicar no "Proximo"
export function buttonNext(containerQuiz, text = "Proximo"){
    let a = document.createElement("a");
    a.innerHTML = text;

    a.addEventListener("click", (e) =>{
        e.preventDefault();
        showConteiner(a);
    });

    function showConteiner(link){
        console.log("Botão Proximo");
        //espaço para mostrar os containeres com o auxilio do "containerQuiz"
    }
    
    return a;
}

//containerQuizPrevious <- vai mostrar o conteiner anterior ao clicar no "voltar"
export function buttonPrevious(containerQuizPrevious, text = "Voltar"){
    let a = document.createElement("a");
    a.innerHTML = text;

    a.addEventListener("click", (e) =>{
        e.preventDefault();
        showConteinerPrevious(a);
    });

    function showConteinerPrevious(link){
        console.log("Botão voltar");
        //espaço para mostrar os containeres com o auxilio do "containerQuizPrevious"
    }
    
    return a;
}