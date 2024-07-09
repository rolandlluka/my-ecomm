import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="cart"
export default class extends Controller {
  initialize() {
    const cart = this.getCart()
    if (!cart) return

    this.displayCartItems(cart)
    this.displayTotal(cart)
  }

  getCart() {
    return JSON.parse(localStorage.getItem("cart")) || []
  }

  displayCartItems(cart) {
    cart.forEach(item => {
      const div = this.createCartItemElement(item)
      this.element.prepend(div)
    })
  }

  createCartItemElement(item) {
    const div = document.createElement("div")
    div.classList.add("mt-2")
    div.innerText = `Item: ${item.name} - $${(item.price / 100.0).toFixed(2)} - Size: ${item.size} - Quantity: ${item.quantity}`

    const deleteButton = this.createDeleteButton(item)
    div.appendChild(deleteButton)

    return div
  }

  createDeleteButton(item) {
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Remove"
    deleteButton.value = JSON.stringify({ id: item.id, size: item.size })
    deleteButton.classList.add("bg-gray-500", "rounded", "text-white", "px-2", "py-1", "ml-2")
    deleteButton.addEventListener("click", this.removeFromCart.bind(this))

    return deleteButton
  }

  displayTotal(cart) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const totalEl = document.createElement("div")
    totalEl.innerText = `Total: $${(total / 100.0).toFixed(2)}`

    const totalContainer = document.getElementById("total")
    if (totalContainer) {
      totalContainer.appendChild(totalEl)
    }
  }

  clear() {
    localStorage.removeItem("cart")
    window.location.reload()
  }

  removeFromCart(event) {
    const cart = this.getCart()
    const { id, size } = JSON.parse(event.target.value)
    const updatedCart = cart.filter(item => item.id !== id || item.size !== size)

    localStorage.setItem("cart", JSON.stringify(updatedCart))
    window.location.reload()
  }
}
