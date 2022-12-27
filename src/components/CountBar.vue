<template>
    <div class="count-bar">
        购物车中的数量：{{count}}
    </div>
</template>

<script>
export default {
  name: 'CountBar',
  props: {
    count: Number
  }
}
</script>

<style scoped>
.count-bar{
    text-align: right;
    border-bottom: 1px solid gray;
}

</style>