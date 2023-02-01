const photographerSection = document.querySelector(".photograph-header")

function detailPhotographerFactory(data) {
    const { name, portrait, price, country, city, id, tagline } = data

    const picture = `assets/photographers/${portrait}`;

    function getUserHeader() {
        const imgContainer = document.createElement('div')
        imgContainer.classList.add("image-container")

        const div = document.createElement('div')
        div.ariaLabel = "Photographer name and description"
        div.classList.add("detail-photogrpaher-text")

        const tilte = document.createElement('h1')
        tilte.textContent = name
        tilte.ariaLabel = name 
        tilte.classList.add("detail-photographer-name")

        const location = document.createElement('p')
        location.textContent = `${city}, ${country}`
        location.classList.add("detail-photographer-location")

        const description = document.createElement('p')
        description.textContent = tagline
        description.classList.add("detail-photographer-description")

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.ariaLabel = name
        img.alt = `${name} profile picture`
        img.classList.add("photographer-picture")
        img.classList.add("detail-img")

        div.appendChild(tilte)
        div.appendChild(location)
        div.appendChild(description)
        photographerSection.appendChild(div)
        imgContainer.appendChild(img)
        photographerSection.appendChild(imgContainer)
    }

    return {name, portrait, country, city, tagline, getUserHeader}
}