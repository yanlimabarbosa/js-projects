const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

let futureDate = new Date(2023, 4, 24, 17, 30, 0)

const year = futureDate.getFullYear()

let month = futureDate.getMonth()
month = months[month]

const day = futureDate.getDay()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

const weekday = weekdays[futureDate.getDay()]
const date = futureDate.getDate()

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`
