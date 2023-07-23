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

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

let actualYear = new Date().getFullYear()
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 12, 30, 0)
// let futureDate = new Date(actualYear, 11, 28, 23, 30, 0)

const year = futureDate.getFullYear()
let month = futureDate.getMonth()
month = months[month]
const day = futureDate.getDay()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

const weekday = weekdays[futureDate.getDay()]
const date = futureDate.getDate()

function hoursFormatation(hours) {
  if (hours >= 12) {
    return `PM`
  }
  if (hours < 12) {
    return "AM"
  } else {
    return ""
  }
}

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}${hoursFormatation(hours)}`
const futureTime = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime()
  const t = futureTime - today

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  let days = t / oneDay
  days = Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let secs = Math.floor((t % oneMinute) / 1000)

  // set values array
  const values = [days, hours, minutes, secs]

  const format = (item) => {
    return item < 10 ? `0${item}` : item
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })
  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h1>`
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()
