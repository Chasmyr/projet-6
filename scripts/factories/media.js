function mediaFactory(media) {
    let {title, image, video, likes} = media

    function getUserMediaCollection() {
        const article = document.createElement("article")

        //faire la description
        const mediaDescription = document.createElement("div")
        mediaDescription.classList.add("media-collection-item-description")

        const mediaTitle = document.createElement("p")
        mediaTitle.textContent = title
        mediaTitle.classList.add("media-title")

        const like = document.createElement("p")
        like.textContent = likes
        like.classList.add("media-item-like")

        const likeIcon = document.createElement("i")
        likeIcon.classList.add("bi")
        likeIcon.classList.add("bi-heart-fill")

        const likeAction = document.createElement("a")
        likeAction.href="#"

        likeAction.appendChild(likeIcon)

        const likeContainer = document.createElement("div")
        likeContainer.classList.add("like-container")
        likeContainer.appendChild(like)
        likeContainer.appendChild(likeAction)

        mediaDescription.appendChild(mediaTitle)
        mediaDescription.appendChild(likeContainer)

        //gérer le type puis générer l'image ou la vidéo
        const imageLink = document.createElement("a")
        imageLink.href = "#"
        imageLink.ariaLabel = "Lilac breasted roller, closeup view"
        
        if(video != undefined) {

            let url = `/assets/images/${video}`
            let type = video.substr(video.length - 3)
            const mediaToDisplay = document.createElement("video")
            mediaToDisplay.setAttribute("src", url)
            mediaToDisplay.setAttribute("type", `type/${type}`)
            mediaToDisplay.classList.add("media-collection-item")

            imageLink.appendChild(mediaToDisplay)
            article.appendChild(imageLink)

        } else {

            let url = `/assets/images/${image}`
            const mediaToDisplay = document.createElement("img")
            mediaToDisplay.setAttribute("src", url)
            mediaToDisplay.classList.add("media-collection-item")
            
            imageLink.appendChild(mediaToDisplay)
            article.appendChild(imageLink)
        }

        article.appendChild(mediaDescription)
        return (article)
    }

    return {title, image, video, likes, getUserMediaCollection}
}