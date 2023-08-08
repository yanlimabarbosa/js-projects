// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js"
import { openCart } from "./toggleCart.js"
import { findProduct } from "../store.js"
import addToCartDOM from "./addToCartDOM.js"
// set items

const cartItemDOM = getElement(".cart-item-count")
const cartItemsDOM = getElement(".cart-items")
const cartTotalDOM = getElement(".cart-total")

let cart = getStorageItem("cart")

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id)
  if (!item) {
    let product = findProduct(id)
    // add item to the cart
    product = { ...product, amount: 1 }
    cart = [...cart, product]
    // add item to the DOM
    addToCartDOM(product)
  } else {
  }
  console.log(id)
  // more stuff coming up
  openCart()
}

const init = () => {
  console.log(cart)
}
init()
