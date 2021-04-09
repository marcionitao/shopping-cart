<template>
   <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.title }}</td>
    <td>{{ item.amount }}</td>
    <td>
        <button class="btn btn-info btn-sm" @click="increment(item.id)">
            +
        </button>
        <button class="btn btn-danger btn-sm" @click="decrement(item.id)">
            -
        </button>
    </td>
    <td>$ <span>{{ item.precio * item.amount }}</span></td>
  </tr>
</template>

<script>
import { useStore } from 'vuex';

export default {
  props: ['item'],
  setup () {
    const store = useStore();
    // run methods from Store
    const increment = (id) => {store.commit('increment', id);};
    const decrement = (id) => {store.commit('decrement', id);};

    return { increment, decrement };
  }
};
</script>

<style lang="scss" scoped>

</style>