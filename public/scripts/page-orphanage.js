const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Create map
const map = L.map('mapid', options).setView([-27.220083,-49.6430311], 15);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [199, 68],
    popupAnchoer: [170,2]
})

//Create and add marker
L
.marker([-27.220083,-49.6430311], { icon })
.addTo(map)

/*Image gallery*/

function selectImage(event){
    const button = event.currentTarget

    //Remove todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //Selecionar imagem clicada

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //Atualizar o container da image

    imageContainer.src = image.src

    //adicionar a classe .active para este botão
    button.classList.add("active")

}