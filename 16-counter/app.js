function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  )
}

function Counter(element, value) {
  this.counter = element
  this.value = value
  this.starterValue = value
  this.resetBtn = element.querySelector(".reset")
  this.increaseBtn = element.querySelector(".increase")
  this.decreaseBtn = element.querySelector(".decrease")
  this.valueDOM = element.querySelector(".value")
  this.valueDOM.textContent = this.value

  this.decreaseBtn.addEventListener("click", this.decrease.bind(this))
  this.resetBtn.addEventListener("click", this.reset.bind(this))
  this.increaseBtn.addEventListener("click", this.increase.bind(this))
}

Counter.prototype.increase = function () {
  console.log(this)
  this.value++
  this.valueDOM.textContent = this.value
}
Counter.prototype.decrease = function () {
  console.log(this)
  this.value--
  this.valueDOM.textContent = this.value
}
Counter.prototype.reset = function () {
  console.log(this)
  this.value = this.starterValue
  this.valueDOM.textContent = this.value
}

const firstCounter = new Counter(getElement(".first-counter"), 100)
const secondCounter = new Counter(getElement(".second-counter"), 200)
