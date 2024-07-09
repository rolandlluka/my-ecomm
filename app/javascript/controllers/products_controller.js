import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static values = { size: String, product: Object }

    addToCart() {
        const cartArray = this.getCart()
        const foundIndex = this.findProductInCart(cartArray)

        if (foundIndex >= 0) {
            this.incrementQuantity(cartArray, foundIndex)
        } else {
            this.addNewItemToCart(cartArray)
        }

        this.saveCart(cartArray)
    }

    getCart() {
        const cart = localStorage.getItem("cart")
        return cart ? JSON.parse(cart) : []
    }

    findProductInCart(cartArray) {
        return cartArray.findIndex(item => item.id === this.productValue.id && item.size === this.sizeValue)
    }

    incrementQuantity(cartArray, index) {
        cartArray[index].quantity = parseInt(cartArray[index].quantity) + 1
    }

    addNewItemToCart(cartArray) {
        cartArray.push({
            id: this.productValue.id,
            name: this.productValue.name,
            price: this.productValue.price,
            size: this.sizeValue,
            quantity: 1
        })
    }

    saveCart(cartArray) {
        localStorage.setItem("cart", JSON.stringify(cartArray))
    }

    selectSize(e) {
        this.sizeValue = e.target.value
        this.updateSelectedSizeDisplay()
    }

    updateSelectedSizeDisplay() {
        const selectedSizeEl = document.getElementById("selected-size")
        selectedSizeEl.innerText = `Selected Size: ${this.sizeValue}`
    }
}
