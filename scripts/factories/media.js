function mediaFactory(media) {
    let {title, image, video, likes} = media

    function getUserMediaCollection() {
        const article = document.createElement("article")

        //faire la description
        const mediaDescription = document.createElement("div")
        mediaDescription.classList.add("media-collection-item-description")

        const mediaTitle = document.createElement("p")
        mediaTitle.textContent = title

        const like = document.createElement("p")
        like.textContent = likes
        
        //gérer le type puis générer l'image ou la vidéo
        if(video != undefined) {
            let url = `/assets/images/${video}`
            let type = video.substr(video.length - 3)
            const mediaToDisplay = document.createElement("video")
            mediaToDisplay.setAttribute("src", url)
            mediaToDisplay.setAttribute("controls", 'controls')
            mediaToDisplay.setAttribute("type", `type/${type}`)
            mediaToDisplay.classList.add("media-collection-item")
            article.appendChild(mediaToDisplay)
        } else {
            let url = `/assets/images/${image}`
            const mediaToDisplay = document.createElement("img")
            mediaToDisplay.setAttribute("src", url)
            mediaToDisplay.classList.add("media-collection-item")
            article.appendChild(mediaToDisplay)
        }

        mediaDescription.appendChild(mediaTitle)
        mediaDescription.appendChild(like)
        article.appendChild(mediaDescription)
        return (article)
    }

    return {title, image, video, likes, getUserMediaCollection}
}