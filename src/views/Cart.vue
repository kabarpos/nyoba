<script setup lang="ts">
import { useCart } from '../store/cart'

const { cart, removeFromCart, updateQuantity, subtotal, discount, total, discountCode } = useCart()
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold mb-6">Shopping Cart</h2>
    
    <div v-if="cart.length === 0" class="text-center py-8">
      <p class="text-gray-600">Your cart is empty</p>
      <router-link to="/" class="btn btn-primary mt-4">Continue Shopping</router-link>
    </div>
    
    <template v-else>
      <div class="space-y-4">
        <div v-for="item in cart" :key="item.book.id" class="flex items-center gap-4 p-4 border rounded-lg">
          <img :src="item.book.cover" :alt="item.book.title" class="w-20 h-20 object-cover rounded">
          <div class="flex-1">
            <h3 class="font-semibold">{{ item.book.title }}</h3>
            <p class="text-gray-600">{{ item.book.author }}</p>
            <p class="font-bold">Rp {{ item.book.price.toLocaleString() }}</p>
          </div>
          <div class="flex items-center gap-2">
            <input
              type="number"
              min="1"
              v-model="item.quantity"
              @change="updateQuantity(item.book.id, item.quantity)"
              class="w-16 input"
            >
            <button @click="removeFromCart(item.book.id)" class="text-red-500">
              <span class="sr-only">Remove</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-8 space-y-4">
        <div class="flex items-center gap-4">
          <input
            type="text"
            v-model="discountCode"
            placeholder="Discount code"
            class="input flex-1"
          >
        </div>
        
        <div class="border-t pt-4">
          <div class="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rp {{ subtotal.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Discount</span>
            <span>- Rp {{ discount.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>Rp {{ total.toLocaleString() }}</span>
          </div>
        </div>

        <div class="flex justify-end">
          <router-link to="/checkout" class="btn btn-primary">
            Proceed to Checkout
          </router-link>
        </div>
      </div>
    </template>
  </div>
</template>