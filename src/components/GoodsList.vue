<template>
  <ul>
    <li v-for="g in goods" :key="g.id">
        {{g.name}}
        <button @click="$emit('buy-click', g)">加入购物车</button>
    </li>
  </ul>
</template>

<script>

export default {
    props:{
        goods: Array,
    },
}
</script>

<style>

</style>