const btn = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")

btn.addEventListener("click", () => {
  btn.classList.toggle("slide")
  video.paused ? video.play() : video.pause()
})

const preloader = document.querySelector(".preloader")

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader")
})
