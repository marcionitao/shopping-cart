<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
    <div class="card">
      <img :src="product.thumbnailUrl" :alt="`image-${product.title}`" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">$ <span>{{ product.precio }}</span></p>
        <button class="btn btn-dark">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  // we using 'props' here and App component
  props: [ 'product' ],

  setup(props) {
    console.log(props.product.title);
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
