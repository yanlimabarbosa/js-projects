let productsData = [...products]

const productsContainer = document.querySelector(".products-container")
const FormDom = document.querySelector(".input-form")
const inputDom = document.querySelector(".search-input")

function displayProducts() {
  if (productsData.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`
    return
  }

  productsContainer.innerHTML = productsData
    .map(({ id, title, image, price }) => {
      return `<article class="product" data-id="${id}">
          <img src=${image} alt="" class="product-img img">
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`
    })
    .join("")
}

displayProducts()

FormDom.addEventListener("keyup", () => {
  const inputValue = inputDom.value
  productsData = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue)
  })
  displayProducts()
})

// Filter Buttons

const companiesDom = document.querySelector(".companies")

const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ]
  console.log(buttons)
  companiesDom.innerHTML = buttons
    .map((company) => {
      return `<button class="company-btn" data-id="${company}">${company}</button>`
    })
    .join("")
}

displayButtons()

companiesDom.addEventListener("click", (e) => {
  const el = e.target
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      productsData = [...products]
    } else {
      productsData = products.filter((product) => {
        return product.company === el.dataset.id
      })
    }
    inputDom.value = ""
    displayProducts()
  }
})
