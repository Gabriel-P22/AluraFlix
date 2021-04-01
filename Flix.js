function startCarousel(parentClass) {
    $(`${parentClass} .owl-carousel`).owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
}
startCarousel('.carouselUser');
startCarousel('.carouselFilmes');
startCarousel('.carouselAnimes');
startCarousel('.carouselSeries');


/* more itens*/
function openMenu() {

    let menu = document.querySelector(".itens")
    menu.classList.add('open')

}

function closeMenu() {
    let menu = document.querySelector(".itens")
    menu.classList.remove('open')
}

/* Add Film*/

function openMenuFilm() {

    let menu = document.querySelector("#menuCadastro")
    menu.classList.add('open')

}

function closeMenuFilm() {
    let menu = document.querySelector("#menuCadastro")
    menu.classList.remove('open')
}

/* function para add filmes*/
function addFilm(imagemUrl, descricaoUrl) {
    //let carousel = document.querySelector("#listUser");//
    let carousel = document.querySelector(".owl-stage");
    let film = document.createElement('a');
    let div = document.createElement('div');
    div.classList.add('owl-item');

    film.setAttribute("target", "_blank")
    film.setAttribute("href", descricaoUrl)
    film.innerHTML = `<img class="boxUser" src="${imagemUrl}" />`;
    div.appendChild(film);
    $('.carouselUser .owl-carousel').trigger('add.owl.carousel', [div]);


}

function addFilmClick() {
    let textImg = document.querySelector("#textImg");
    let textMore = document.querySelector("#textMore");
    addFilm(textImg.value, textMore.value);

}

function clearInput(){
    const textImg = document.getElementById('textImg');
    const textMore = document.getElementById('textMore');

    if(textImg.value === "" || textMore.value=== "") return
    else{

        textImg.value = ""
        textMore.value = ""

    }

} 