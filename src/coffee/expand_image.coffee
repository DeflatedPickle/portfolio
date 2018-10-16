images = document.querySelectorAll(".projectImage")

isShown = false
currentModal = null

deleteImage = ->
  document.body.removeChild(currentModal)
  isShown = false

showImage =(image, description) ->
  currentModal = document.createElement("modal")
  currentModal.classList.add("imageModal")
  document.body.appendChild(currentModal)

  currentModal.onclick = -> deleteImage()

  contentDiv = document.createElement("div")

  imageElement = document.createElement("img")
  imageElement.src = image
  contentDiv.appendChild(imageElement)

  descriptionElement = document.createElement("p")
  descriptionElement.textContent = description
  contentDiv.appendChild(descriptionElement)

  currentModal.appendChild(contentDiv)

  isShown = true

images.forEach((value, key, parent) ->
  value.onclick = -> showImage(value.src, value.alt))