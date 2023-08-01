import get from "./utils/getElement.js"
import getUser from "./utils/fetchUser.js"
import displayUser from "./utils/displayUser.js"

const btn = get(".btn")

const showUser = () => {
  getUser().then((data) => {
    displayUser(data)
  })
}

window.addEventListener("DOMContentLoaded", showUser)
btn.addEventListener("click", showUser)
