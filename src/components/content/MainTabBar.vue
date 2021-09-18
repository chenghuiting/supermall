<template>
    <tab-bar>
      <!--向 TabBarItem 页面动态传入路径-->
      <tab-bar-item path="/home" activeColor="deepPink">
        <img slot="item-icon" src="@/assets/img/tabbar/cc-home.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/cc-home-active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src="../assets/img/tabbar/category.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/category-active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <img slot="item-icon" src="../assets/img/tabbar/shop-cart.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/shop-cart-active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="../assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/profile-active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
