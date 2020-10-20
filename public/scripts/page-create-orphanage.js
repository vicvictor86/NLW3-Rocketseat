//Create map
const map = L.map('mapid').setView([-27.220083,-49.6430311], 15);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //Add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})


//adicionar o campo de fotos

function addPhotoField(){
    //Pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //Realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    //Verificar se o campo está vazio
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    //Limpar o campo 
    input.value = ""
    //Adicionar o clone ao container de #imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value = ""
        return
    }
    //Deletar o campo
    span.parentNode.remove();

}

//selecionar sim e não

function toggleSelect(event){
     
    //Retirar a class .active nos dois botões
    document.querySelectorAll('.button-select button')
    .forEach( function(button){
        button.classList.remove('active')
    })

    //Colocar a cass .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //Atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    //Verificar se sim ou não
    input.value = button.dataset.value

}