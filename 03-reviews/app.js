// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    name: "Claire Thompson",
    job: "back-end developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
]

// selecting items
const image = document.querySelector("img")

const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// setting starting item
let currentItem = 0

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  showReview(currentItem)
})

function showReview(person) {
  image.src = reviews[person].img
  author.textContent = reviews[person].name
  job.textContent = reviews[person].job
  info.textContent = reviews[person].text
}

// Event listener for the "Next" button
nextBtn.addEventListener("click", () => {
  currentItem++
  if (currentItem >= reviews.length) {
    currentItem = 0
  }
  showReview(currentItem)
})

prevBtn.addEventListener("click", () => {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showReview(currentItem)
})

// randomBtn.addEventListener("click", () => {

//   currentItem = Math.floor(Math.random() * reviews.length)
//   showReview(currentItem)
//   console.log(currentItem)
// })

// Add a variable to store the previously displayed index
let previousIndex = -1

randomBtn.addEventListener("click", () => {
  let newIndex
  do {
    newIndex = Math.floor(Math.random() * reviews.length)
  } while (newIndex === previousIndex)

  currentItem = newIndex
  previousIndex = newIndex

  showReview(currentItem)
  console.log(currentItem)
})

function getRandom() {
  return Math.random()
}
