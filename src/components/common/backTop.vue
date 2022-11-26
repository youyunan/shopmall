<template>
  <div>
    <div class="backTop" @click="backTop" v-show="scrollType">
      <img src="@/assets/img/common/top.png" alt="" style="width: 100%">
    </div>
  </div>
</template>

<script>
export default {
  name: 'backTop',
  data() {
    return {
      scrollType: false, // 控制按钮显示和隐藏
      timerId: null,
      scrollTop: 0
    }
  },
  // 组件创建监听scroll此方法
  mounted() {
    window.addEventListener('scroll', this.handleScoll, true)
  },
  // 组件销毁移除监听
  destroyed() {
    window.removeEventListener('scroll', this.handleScoll)
    window.clearInterval(this.timerId)
  },
  methods: {
    backTop() {
      this.timerId = setInterval(() => {
        // 给返回增加动画效果
        const upSpeed = Math.floor(-this.scrollTop / 5)
        document.documentElement.scrollTop = this.scrollTop + upSpeed
        if (this.scrollTop === 0) {
          clearInterval(this.timerId)
        }
      }, 30)
    },
    handleScoll(ev) {
      // 当滚动的距离大于700 时出现该按钮
      this.scrollTop = window.pageYOffset
      if (window.pageYOffset / 100 > 7) {
        this.scrollType = true
      } else {
        this.scrollType = false
      }
    }
  }
}
</script>

<style scoped lang='less'>
.backTop {
  position: fixed;
  bottom: 15%;
  right: 2%;
  z-index: 999;
  width: 45px;
  height: 45px
}
</style>

