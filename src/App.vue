<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tabBar/>
  </div>
</template>

<script>
import tabBar from "@/components/content/tabBar";

export default {
  name: "App",
  components: {
    tabBar
  }
}
</script>

<style lang="less">
@import "./assets/css/base.css";
</style>
