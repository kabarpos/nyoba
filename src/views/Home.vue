<script setup lang="ts">
import { books } from '../data/books'
import BookCard from '../components/BookCard.vue'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <BookCard v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>