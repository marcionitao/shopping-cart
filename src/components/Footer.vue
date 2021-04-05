<template>
  <th scope="row" colspan="2">Total productos</th>
    <td>{{ totalAmount }}</td>
    <td>
        <button class="btn btn-danger btn-sm" id="vaciar-carrito">
            vaciar todo
        </button>
    </td>
    <td class="font-weight-bold">$ <span>5000</span></td>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
// 1:38:00
export default {
  setup () {
    const store = useStore();
    const totalAmount = computed(() => store.getters.totalAmount);

    return { totalAmount };
  }
};
</script>

<style lang="scss" scoped>

</style>