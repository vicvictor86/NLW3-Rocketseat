//Create map
const map = L.map('mapid').setView([-27.220083,-49.6430311], 15);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [199, 68],
    popupAnchoer: [170,2]
})

function addMarker({id, name, lat, lng}){

    //Create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-poup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href= "/orphanage?id=${id}"><img src ="/images/arrow-white.svg"> </a>`)

    //Create and add marker
    L
    .marker([lat,lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
console.log(orphanagesSpan)

orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})