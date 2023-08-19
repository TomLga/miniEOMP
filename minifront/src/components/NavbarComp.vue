<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <img src="https://i.postimg.cc/QVZHW1rb/Main-Logo.png" alt="logo" loading="lazy"  >
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/" >Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/about" >About</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link active" aria-current="page" to="/users" >Users</router-link>
                  </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/products" >Products</router-link>
                    </li>
                 <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/checkout" >Checkout</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/contact" >Contact</router-link>
                    </li>
                </ul>
            </div>
            <ul class="navbar-nav ml-auto"> 
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/login/Register" >Login/Register</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>