<template>
  <div id="app">
    <yySider></yySider>
    <router-view></router-view>
  </div>
</template>

<script>
import yySider from '@/components/Sider.vue'
export default {
  name: 'app',
  methods: {
  },
  components: {
    yySider
  }
}
</script>

<style>

</style>
