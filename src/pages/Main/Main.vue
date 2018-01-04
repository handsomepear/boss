<style lang="less">
@import "./main.less";
</style>

<template>
  <div class="main" style="height: 100%">
    <div class="sidebar-menu-con" style="">
      <Sider></Sider>
    </div>
    <div class="main-header-con">
      <mainHeader></mainHeader>
    </div>
    <div class="single-page-con">
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
    return {};
  },
  components: {
    Sider,
    mainHeader
  }
};
</script>

