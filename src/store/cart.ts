import { ref, computed } from 'vue'
import type { Book, CartItem } from '../types'

export const useCart = () => {
  const cart = ref<CartItem[]>([])
  const discountCode = ref('')

  const addToCart = (book: Book) => {
    const existingItem = cart.value.find(item => item.book.id === book.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cart.value.push({ book, quantity: 1 })
    }
  }

  const removeFromCart = (bookId: number) => {
    cart.value = cart.value.filter(item => item.book.id !== bookId)
  }

  const updateQuantity = (bookId: number, quantity: number) => {
    const item = cart.value.find(item => item.book.id === bookId)
    if (item) {
      item.quantity = quantity
    }
  }

  const subtotal = computed(() => {
    return cart.value.reduce((total, item) => {
      return total + (item.book.price * item.quantity)
    }, 0)
  })

  const discount = computed(() => {
    if (discountCode.value === 'BOOK20') {
      return subtotal.value * 0.2
    }
    return 0
  })

  const total = computed(() => {
    return subtotal.value - discount.value
  })

  return {
    cart,
    discountCode,
    addToCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    total
  }
}