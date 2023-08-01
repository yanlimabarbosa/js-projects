import get from "./getElement.js"

const img = get(".user-img")
const title = get(".user-title")
const value = get(".user-value")
const btns = [...document.querySelectorAll(".icon")]

const displayUser = (user) => {
  console.log(user)
  btns.forEach((btn) => {
    btn.classList.remove("active")
  })
  
  const imageLoader = new Image()
  imageLoader.src = user.image

  imageLoader.onload = () => {
    img.src = imageLoader.src
    value.textContent = user.name
    title.textContent = `My name is`
    btns[0].classList.add("active")
    btns.forEach((btn) => {
      const label = btn.dataset.label
      btn.addEventListener("click", () => {
        title.textContent = `My ${label} is`
        value.textContent = user[label]
        btns.forEach((btn) => {
          btn.classList.remove("active")
        })
        btn.classList.add("active")
      })
    })
  }
}

export default displayUser
