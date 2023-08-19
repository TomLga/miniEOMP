<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Products</h2>
      </div>
      <div class="row justify-content-center gap-3" v-if="products">
        <div
          v-for="product in products"
          class="card"
          style="width: 18rem;"
          :key="product.productID">
          <img :src="product.productUrl" class="card-img-top" :alt="product.name" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5> 
            <p class="card-text">{{ product.price }}</p>
            <p class="card-text">{{ product.sale_price }}</p>
            <p class="card-text">{{ product.description }}</p>
          </div>
        </div>
      </div>
      <div v-else class="row">
        <spinnerComp />
      </div>
    </div>
  </template>
  
  <script>
  import SpinnerComp from '@/components/SpinnerComp.vue'
  export default {
    components: {
      spinnerComp
    },
    computed: {
      products() {
        return this.$store.state.products 
      }
    },
    mounted() {
      this.$store.dispatch('fetchProducts')
    }
  }
  </script>
  
  <style lang="scss" scoped>
 
  </style>
  