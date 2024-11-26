<script setup lang="ts">
import { useCart } from '../store/cart'
import { computed } from 'vue'

const { cart } = useCart()
const itemCount = computed(() => cart.value.reduce((total, item) => total + item.quantity, 0))
</script>

<template>
  <nav class="bg-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <router-link to="/" class="text-xl font-bold text-gray-800">
          Toko Buku
        </router-link>
        <router-link to="/cart" class="relative">
          <span class="sr-only">Cart</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span v-if="itemCount > 0" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {{ itemCount }}
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>