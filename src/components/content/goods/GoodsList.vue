<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.id" :goods-item="item"></goods-list-item>
<!--    {{ goods }}-->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';
export default {
  name: '',
  props: {
    goods: {
      type: Array,
      default: () => []
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style lang='css' scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>
