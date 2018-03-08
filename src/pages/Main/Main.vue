<style lang="less">
@import "./main.less";
</style>

<template>
  <div class="main" style="height: 100%">
    <div class="sidebar-menu-con" :style="{'width': shrink ? '60px' : '200px',overflow: shrink ? 'visible' : 'auto'}">
      <Sider :shrink="shrink">
        <div slot="top" class="logo-con" v-show="!shrink">
          <a href="javascript:;" class="logo">有盐生活</a>
        </div>
        <div slot="top" class="logo-con" v-show="shrink">
          <a href="javascript:;" class="logo">盐</a>
        </div>
      </Sider>
    </div>
    <div class="main-header-con" :style="{paddingLeft: shrink?'60px':'200px'}">
      <div class="navicon-con">
        <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleClick">
          <Icon type="navicon" size="32"></Icon>
        </Button>
      </div>
      <mainHeader></mainHeader>
    </div>
    <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
      <div class="single-page">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import mainHeader from "@/components/Header/Header.vue";
import Sider from "@/components/Sider/Sider.vue";
export default {
  data() {
    return {
      shrink: false
    };
  },
  components: {
    Sider,
    mainHeader
  },
  methods: {
    toggleClick() {
      this.shrink = !this.shrink;
    }
  }
};
</script>

