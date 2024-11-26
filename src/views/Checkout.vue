<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCart } from '../store/cart'
import type { Order } from '../types'

const router = useRouter()
const { cart, total } = useCart()

const order = ref<Partial<Order>>({
  name: '',
  email: '',
  address: '',
  phone: ''
})

const submitOrder = () => {
  // In a real app, you would send this to a backend
  console.log('Order submitted:', {
    ...order.value,
    items: cart.value,
    total: total.value
  })
  router.push('/confirmation')
}
</script>

<template>
  <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold mb-6">Checkout</h2>
    
    <form @submit.prevent="submitOrder" class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          id="name"
          type="text"
          v-model="order.name"
          required
          class="input"
        >
      </div>
      
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          id="email"
          type="email"
          v-model="order.email"
          required
          class="input"
        >
      </div>
      
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input
          id="phone"
          type="tel"
          v-model="order.phone"
          required
          class="input"
        >
      </div>
      
      <div>
        <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
        <textarea
          id="address"
          v-model="order.address"
          required
          rows="3"
          class="input"
        ></textarea>
      </div>

      <div class="border-t pt-4">
        <div class="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>Rp {{ total.toLocaleString() }}</span>
        </div>
      </div>

      <div class="flex justify-end">
        <button type="submit" class="btn btn-primary">
          Place Order
        </button>
      </div>
    </form>
  </div>
</template>