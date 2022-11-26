<template>
  <tabbar :tabBarItem="tabBarItem"/>
</template>

<script>
import tabbar from "@/components/common/tabbar";

export default {
  name: "tabBar",
  components: {
    tabbar,  //自定义tabBar
  },
  data() {
    return {
      tabBarItem: [
        {
          path: '/home',
          name: '首页',
          inactive: [require('@/assets/img/tabbar/home.svg')],
          active: [require('@/assets/img/tabbar/home_active.svg')],
        },
        {
          path: '/cart',
          name: '分类',
          inactive: [require('@/assets/img/tabbar/category.svg')],
          active: [require('@/assets/img/tabbar/category_active.svg')],
        },
        {
          path: '/category',
          name: '购物车',
          inactive: [require('@/assets/img/tabbar/shopcart.svg')],
          active: [require('@/assets/img/tabbar/shopcart_active.svg')],
        },
        {
          path: '/profile',
          name: '我的',
          inactive: [require('@/assets/img/tabbar/profile.svg')],
          active: [require('@/assets/img/tabbar/profile_active.svg')],
        },

      ],
    }
  },
}
</script>

<style scoped>

</style>
