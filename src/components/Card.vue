<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
    <div class="card">
      <img :src="product.thumbnailUrl" :alt="`image-${product.title}`" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">$ <span>{{ product.precio }}</span></p>
        <button class="btn btn-dark" v-on:click="agregar(product)">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default { 
  name: 'Card',
  // we using 'props' here and App component
  props: [ 'product' ],

  setup() {
    const store = useStore();
    const agregar = product => {
      // to activate a action using 'dispatch()', that call the function 'addKarting' in 'Actions'
      store.dispatch('addCarting', product);
    };

    return { agregar };
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
