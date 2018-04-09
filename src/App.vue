<template>
  <div id="main" class="app-main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import _user from '@/api/user-service.js'
export default {
  name: "app",
  methods: {},
  components: {},
  created() {
    
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  overflow: hidden;
}
.app-main {
  width: 100%;
  height: 100%;
}
</style>
