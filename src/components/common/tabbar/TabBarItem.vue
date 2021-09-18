<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  //接收APP.vue传过来的路径
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    //点击跳转路由，动态获取路径
    itemClick(){
      console.log("itemClick")
      this.$router.replace(this.path)
    },
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  /*tab-bar常用高度 49px*/
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 26px;
  height: 26px;
  vertical-align: middle; /*去除图片本身就有的3像素*/
  margin-top: 2px;
  margin-bottom: 2px;
}
</style>
