<style lang="less" scoped>

</style>

<template>
  <Menu theme="dark" :active-name="$route.name" @on-select="change" width="200px" style="overflow: auto;" >
    <slot name="top"></slot>
    <template v-for="item in menuList">
      <MenuItem v-if="item.children.length <= 1 && !item.isShrink" :name="item.children[0].name" :key="'menuitem' + item.name">
      <Icon :type="item.icon" :size="iconSize" :key="'menuicon' + item.name"></Icon>
      <span class="layout-text" :key="'title' + item.name">{{ item.title }}</span>
      </MenuItem>
      <Submenu v-if="(item.children.length > 1) || item.isShrink" :name="item.name" :key="item.name">
        <template slot="title">
          <Icon :type="item.icon" :size="iconSize"></Icon>
          <span class="layout-text">{{ item.title }}</span>
        </template>
        <template v-for="child in item.children" v-if="child.title !== 'empty'">
          <MenuItem :name="child.name" :key="'menuitem' + child.name">
          <Icon :type="child.icon" :size="iconSize" :key="'icon' + child.name"></Icon>
          <span class="layout-text" :key="'title' + child.name">{{ child.title }}</span>
          </MenuItem>
        </template>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
export default {
  data() {
    return {
      openNames: [],
      theme2: "dark"
    };
  },
  props: {
    iconSize: Number,
    menuList: Array
  },
  
  methods: {
    change(active) {
      this.$router.push({ name: active });
    }
  }
};
</script>




