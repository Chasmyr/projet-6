const slide = document.querySelector('.lightbox-slide')
const lightboxContainer = document.getElementById('lightbox_bg')


function openLightBox(media){
    console.log(media)
    const imageToShow = document.createElement("img")
    imageToShow.classList.add("slide-image")
    imageToShow.setAttribute('src', `/assets/images/${media.image}`)
    imageToShow.ariaLabel = "Lilac breasted roller"
    slide.appendChild(imageToShow)
    lightboxContainer.style.display = 'flex'
    console.log(mediasData)

}

function nextSlide(currentId, medias){

}

function prevSlide(currentId, medias){

}