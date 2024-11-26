<template>
  <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 text-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    
    <h2 class="text-2xl font-bold mb-4">Order Confirmed!</h2>
    <p class="text-gray-600 mb-6">Thank you for your purchase. We'll send you an email with your order details shortly.</p>
    
    <router-link to="/" class="btn btn-primary">
      Continue Shopping
    </router-link>
  </div>
</template>