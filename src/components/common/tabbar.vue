<template>
  <div>
    <van-tabbar route active-color="#ff8198" placeholder >

      <van-tabbar-item replace :to="item.path" v-for="(item,index) in tabBarItem" :key="index">
        <span>{{ item.name }}</span>
        <template #icon="props">
          <img :src="props.active ? item.active : item.inactive"/>
        </template>
      </van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {
    tabBarItem: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {};
  },
}
</script>

<style scoped>

</style>
