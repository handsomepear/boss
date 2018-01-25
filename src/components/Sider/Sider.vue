<style lang="less">
.ivu-shrinkable-menu{
    height: 100%;
    width: 100%;
}
</style>

<template>
  <div  class="ivu-shrinkable-menu">
    <slot name="top"></slot>
    <SiderMenu v-show="!shrink"  :menu-list="menuList" :open-names="openNames" @on-change="handleChange"></SiderMenu>
    <SiderShrink v-show="shrink"  :menu-list="menuList" @on-change="handleChange"></SiderShrink>
  </div>
</template>

<script>
import SiderMenu from "./components/SiderMenu.vue";
import SiderShrink from "./components/SiderShrink.vue";
import {oneOf} from "@/util/util";
export default {
  name: "shrinkableMenu",
  components: {
    SiderMenu,
    SiderShrink
  },
  props: {
    shrink: {
      type: Boolean,
      default: false
    },
    beforePush: {
      type: Function
    },
    openNames: {
      type: Array
    }
  },
  computed: {
    menuList() {
      return this.$store.state.app.menuList;
    }
  },
  methods: {
    handleChange(name) {
      let willpush = true;
      if (this.beforePush !== undefined) {
        if (!this.beforePush(name)) {
          willpush = false;
        }
      }
      if (willpush) {
        this.$router.push({
          name: name
        });
      }
      this.$emit("on-change", name);
    }
  }
};
</script>
