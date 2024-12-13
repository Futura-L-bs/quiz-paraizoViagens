//component IMAGES
//conteiner <- é onde o background vai estar
//image <- imagem do background
export function imageBackground(conteiner, image){
    conteiner.style.backgroundImage = `url(assets/images/${image})`;
}