<script setup lang="ts">
import type { Book } from '../types'
import { useCart } from '../store/cart'

const props = defineProps<{
  book: Book
}>()

const { addToCart } = useCart()
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="book.cover" :alt="book.title" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-semibold">{{ book.title }}</h3>
      <p class="text-gray-600">{{ book.author }}</p>
      <p class="text-gray-800 font-bold mt-2">Rp {{ book.price.toLocaleString() }}</p>
      <p class="text-gray-600 mt-2 text-sm">{{ book.description }}</p>
      <button @click="addToCart(book)" class="btn btn-primary w-full mt-4">
        Add to Cart
      </button>
    </div>
  </div>
</template>