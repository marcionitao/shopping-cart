<template>
  <th scope="row" colspan="2">Total productos</th>
    <td>{{ totalAmount }}</td>
    <td>
        <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="clear">
            vaciar todo
        </button>
    </td>
    <td class="font-weight-bold">$ <span> {{ totalPrice }}</span></td>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup () {
    const store = useStore();
    const totalAmount = computed(() => store.getters.totalAmount);
    const totalPrice = computed(() => store.getters.totalPrice);

    // run methods from Store
    const clear = () => {store.commit('clearCarting');};

    return { totalAmount, totalPrice, clear };
  }
};
</script>

<style lang="scss" scoped>

</style>