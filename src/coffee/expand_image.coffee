images = document.getElementsByClassName("projectImage")

isShown = false
currentModal = null

for img in images
  deleteImage = ->
    document.body.removeChild(currentModal)
    isShown = false

  # FIXME: The new image is always a clone of the last image created
  showImage = ->
    currentModal = document.createElement("modal")
    currentModal.classList.add("imageModal")
    document.body.appendChild(currentModal)

    currentModal.onclick = -> deleteImage()

    new_image = img.cloneNode()
    new_image.classList.remove("projectImage")
    currentModal.appendChild(new_image)

    isShown = true

  img.onclick = -> showImage()