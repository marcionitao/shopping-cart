<template>
   <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.title }}</td>
    <td>{{ item.amount }}</td>
    <td>
        <button class="btn btn-info btn-sm">
            +
        </button>
        <button class="btn btn-danger btn-sm">
            -
        </button>
    </td>
    <td>$ <span>{{ item.precio * item.amount }}</span></td>
  </tr>
</template>

<script>
export default {
  props: ['item'],
  setup () {
    

    return {};
  }
};
</script>

<style lang="scss" scoped>

</style>