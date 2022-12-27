<template>
  <div id="app">
    <CountBar :count="cartCount"></CountBar>
    <div class="box">
      <GoodsList :goods="goods" @buy-click="addGood"></GoodsList>
      <Cart :cartList="cartList" @order-click="clearCart"></Cart>
    </div>
  </div>
</template>

<script>
import CountBar from "./components/CountBar.vue";
import GoodsList from "./components/GoodsList.vue";
import Cart from "./components/Cart.vue";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    CountBar,
    GoodsList,
    Cart,
  },
  data: function () {
    return {};
  },
  methods: {
    ...mapMutations(["addGood", "clearCart"]),
  },
  computed: {
    ...mapState(["goods"]),
    ...mapGetters(["cartCount", "cartList"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: fixed;
  width: 50%;
  height: 30%;
  top: calc(50% - 15%);
  left: calc(50% - 25%);
  border: 2px solid gray;
  border-radius: 2%;
  padding: 2%;
}

.box {
  display: flex;
  width: 100%;
  position: relative;
}
</style>
