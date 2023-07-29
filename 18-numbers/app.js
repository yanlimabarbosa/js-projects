const numbers = [...document.querySelectorAll(".number")]
// numbers.forEach((number)=>console.log(number))

const updateCount = (el) =>{
  const value = parseInt(el.dataset.value)
  const increment = Math.ceil(value/850)
  // const increment = 1
  let initialValue = 0

  const increaseCount = setInterval(() => {
    initialValue += increment
    el.textContent = `${initialValue}+`

    if(initialValue > value) {
      el.textContent = value
      clearInterval(increaseCount)
      return
    }
  }, 1);
  // console.log(increaseCount);
}

numbers.forEach((number)=>{
  console.log(number);
  updateCount(number)
})
