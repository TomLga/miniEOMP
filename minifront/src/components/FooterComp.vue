<template>
    <div class="container-fluid">
        <div class="row">
          <p class="lead">Copyright &copy;{{ cyear }}</p>
        </div>
      </div>
</template>

<script>
  export default {
    data() {
      return {
        cyear: new Date().getFullYear()
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>