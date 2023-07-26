function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  )
}

function Gallery(element) {
  this.container = element
  this.list = [...element.querySelectorAll(".img")]
  // target
  this.modal = getElement(".modal")
  this.modalImg = getElement(".main-img")
  this.imageName = getElement(".image-name")
  this.modalImages = getElement(".modal-images")
  this.closeBtn = getElement(".close-btn")
  this.nextBtn = getElement(".next-btn")
  this.prevBtn = getElement(".prev-btn")
  const selfThis = this
  // bind functions
  // this.openModal = this.openModal.bind(this) // not needed but is one option

  // container event
  this.container.addEventListener(
    "click",
    function (e) {
      if (e.target.classList.contains("img")) {
        selfThis.openModal(e.target, selfThis.list) //     this.openModal()    /is the
      }
    } //}.bind(this)             /main option
  )
}

Gallery.prototype.openModal = function (selectedImage, list) {
  this.setMainImage(selectedImage)
  this.modalImages.innerHTML = list
    .map(function (image) {
      console.log(image)
      return `<img src="${
        image.src
      }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}"/>`
    })
    .join("")
  this.modal.classList.add("open")
}

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src
  this.imageName.textContent = selectedImage.title
}

const nature = new Gallery(getElement(".nature"))
const city = new Gallery(getElement(".city"))
