<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
      placeholder
      z-index="1000"
      safe-area-inset-top
    >
      <div slot="title">
       <div class="a" style="display: flex">
         <div>4444</div>
         <div>4444</div>
         <div>4444</div>
         <div>4444</div>
       </div>
      </div>

      <template #right>
        <van-icon name="share" size="18" />
      </template>
    </van-nav-bar>


    <div>{{iid}}</div>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      active:0
    }
  },
  created() {
    this.iid=this.$route.params.iid
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },

}
</script>

<style scoped>
:deep(.van-sticky--fixed){
  z-index: 0;
}

:deep(.van-nav-bar__left){
z-index: 200;
}

.a div{
  width: 20px;
}
</style>
