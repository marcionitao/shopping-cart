<template>
    <div class="my-5">
      <h4>Shopping Cart</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody id="items">
        <!--Component Son 'item'-->
          <Item v-for="item in items" v-bind:key="item.id" v-bind:item="item"></Item>
        </tbody>
        <tfoot>
          <tr id="footer-carrito">
            <!--if Object Items data is empty, write 'Carrito vacío - Buy'-->
            <!--Component Son 'Footer'-->
            <th scope="row" colspan="5" v-if="Object.keys(items).length === 0">Carrito vacío - Buy</th>
            <Footer v-else></Footer>
          </tr>
        </tfoot>
      </table>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Footer from './Footer';
import Item from './Item';

export default {
  components: {
    Item,
    Footer 
  },
  setup () {
    const store = useStore();
    const items = computed(() => store.state.carting);

    return { items };
  }
};
</script>

<style coped>

</style>