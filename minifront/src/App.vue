<template>
  <div>
  <main>
  <items ref="myProducts" :items="products" v-slot="{ item }">
    <input placeholder="id" size="1" type="text" v-model="item.data.id" />
    <input placeholder="title" size="5" type="text" v-model="item.data.title" />
    <input placeholder="image" type="text" v-model="item.data.image" /> 
    <input placeholder="price" type="text" v-model="item.data.price" /> 
    <input placeholder="description" type="text" v-model="item.data.description" /> 
    <button @click="save(item)">save</button>
    <button @click="savePut(item)">save(PUT)</button>
    <button @click="del(item)">delete</button>
  </items>
  <button @click="$refs.myProducts.addNew({})">+Add New</button>
</main>
<FooterComp />
</div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavbarComp from './components/NavbarComp.vue';

export default {
  name: 'App',
  components: {
    NavbarComp,
    FooterComp,
    items,
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

utton,
input {
  margin: 0.1rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
