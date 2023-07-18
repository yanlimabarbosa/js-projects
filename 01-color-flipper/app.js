const colors = [
  "red",
  "yellow",
  "blue",
  "orange",
  "green",
  "cyan",
  "violet",
  "pink",
  "gray",
]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber()
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
  console.log(randomNumber)
})

getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length)
}
