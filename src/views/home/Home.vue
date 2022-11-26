<template>
  <div>
    <!-- 头部导航栏-->
    <van-nav-bar title="购物街" fixed placeholder z-index="500"/>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">

      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" indicator-color="#ffffff">
        <van-swipe-item v-for="(item, index) in banners" :key="index">
          <a :href="item.link">
            <img class="aa" v-lazy="item.image"/>
          </a>
        </van-swipe-item>
      </van-swipe>

      <!-- 活动 -->
      <div style="padding: 0 4px;">
        <van-grid :border="false" :icon-size="70">
          <van-grid-item v-for="(value,index) in recommends" :key="index" :icon="value.image"
                         :text="value.title" :url="value.link" :icon-size="40"/>
        </van-grid>
      </div>

      <FeatureView/>

      <van-list v-model="loading" @load="onLoad" :immediate-check="show" offset="700">
          <van-tabs v-model="active" animated sticky swipeable offset-top="44" @click="tabClick">
            <van-tab title="流行">
              <keep-alive>
              <goods-list :goods="goods['pop'].list"/>
              </keep-alive>
            </van-tab>
            <van-tab title="新款">
              <goods-list :goods="goods['new'].list"/>
            </van-tab>
            <van-tab title="精选">
              <goods-list :goods="goods['sell'].list"/>
            </van-tab>
          </van-tabs>
      </van-list>

      <backTop/>

    </van-pull-refresh>
  </div>
</template>

<script>
import FeatureView from "@/views/home/childComps/FeatureView";
import GoodsList from "@/components/content/goods/GoodsList";
import backTop from "@/components/common/backTop";

import {getHomeMultidata, getHomeGoods} from "@/api/home";

export default {
  name: "Home",
  components: {
    FeatureView,
    GoodsList,
    backTop
  },
  data() {
    return {
      loading: false,
      show: false,
      refreshing: false,
      active: 0,
      banners: [],
      recommends: [],
      currentType: 'pop',
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      }
    }
  },

  created() {
    this._getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },

  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break;
      }
    },
    _getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        console.log(this.recommends);
        console.log(this.banners);
      })
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.loading = false;
        this.refreshing = false;
      })
    },

    // 上拉加载更多操作
    onLoad() {
      console.log('滚动到底部')
      this.getHomeGoods(this.currentType);
    },

    // 下拉刷新
    onRefresh() {
      this.goods[this.currentType].page = 1;
      this.goods[this.currentType].list = [];
      this._getHomeMultidata();
      this.getHomeGoods(this.currentType);
    },
  },

}
</script>

<style lang="less" scoped>
:deep(.van-nav-bar__content) {
  height: 44px;

}

:deep(.van-nav-bar) {
  background-color: #ff8198;
}

:deep(.van-nav-bar__title) {
  color: #ffffff;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 200px;
  width: 100%;
  text-align: center;
  background-color: #39a9ed;
}

.my-swipe .van-swipe-item {
  height: 100%;
  width: 100%;
}

.aa {
  height: 100%;
  width: 100%;
}

:deep(.van-swipe) {
  height: 200px;
  width: 100%;
}

:deep(.van-grid-item__content) {
  padding: 12px 8px;
}

</style>
