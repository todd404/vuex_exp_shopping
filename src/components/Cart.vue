<template>
  <div class="cart">
    <ul>
        <li v-for="g in cartList" :key="g.id">
            {{`${g.name} X${g.count}`}}
        </li>
    </ul>
    <button @click='$emit("order-click")'>确定下单</button>
  </div>
</template>

<script>
export default {
    props:{
        cartList: Array,
    }
}
</script>

<style>
.cart{
    border: 1px gray dashed;
    position: absolute;
    right: 0;
    padding: 2%;
    top: 10%;
    width: 30%;
}
</style>