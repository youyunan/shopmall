<template>
  <!--  <div class="goods-item" @click="itemClick">-->
  <!--    &lt;!&ndash; @load 事件会在页面或图像加载完成后立即发生 &ndash;&gt;-->
  <!--    <img v-lazy="showImage" alt=""  @load="imageLoad">-->
  <!--    <div class="goods-info">-->
  <!--      <p>{{goodsItem.title}}</p>-->
  <!--      <span>{{goodsItem.price}}</span>-->
  <!--      <span>{{goodsItem.cfav}}</span>-->
  <!--    </div>-->
  <!--  </div>-->

  <div class="goods-item"  @click="itemClick">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span>{{ goodsItem.price }}</span>
      <span>{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default: () => {
      }
    }
  },
  // computed: {
  //   showImage() {
  //     return this.goodsItem.image || this.goodsItem.show.img
  //   }
  // },
  // methods: {
  //   imageLoad() {
  //     this.$bus.$emit('itemImageLoad')
  //   },
  //   itemClick() {
  //     this.$router.push('/detail/' + this.goodsItem.iid)
  //   }
  // },
  methods:{
    itemClick(){
      console.log('跳转详情页')
      this.$router.push('/detail/'+this.goodsItem.iid)
    },
  }
}
</script>

<style lang='css' scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  margin-top: 5px;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
