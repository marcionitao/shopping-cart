<template>
  <div class="container">
    <h1>Carrinho</h1>
    {{ carting }}
    <hr>
    <div class="row">
      <!--Component Son than send 'props' product -->
      <Card v-for="product of products" v-bind:key="product.id" v-bind:product="product"></Card>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Card from '@/components/Card';

export default {
  name: 'App',
  components: {
    Card
  },
  setup() {
    // to can use all datas from Store
    const store = useStore();
    // using onMonted for call and acess our store API before of create Template
    onMounted(() => {
      // to activate a action using 'dispatch()', that call the function 'fetchData' in 'Actions'
      store.dispatch('fetchData');
    });
    // In the Documentation to call an element Store we have user 'Computed' for render in Father Component
    const products = computed(() => store.state.products);
    const carting = computed(() => store.state.carting);

    return { products, carting };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
