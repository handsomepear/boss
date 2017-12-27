<template>
  <div class="layout">
    <!-- <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu :name="menuIndex" v-for="(menuItem, menuIndex) in menuData" :key="menuItem.id">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            {{ menuItem.title}}
          </template>
          <MenuItem :name="menuIndex + '-' + subMenuIndex" v-for="(subMenuItem, subMenuIndex) in menuItem.subMenu" :key="subMenuItem.id">
            {{ subMenuItem.title}}
          </MenuItem>
        </Submenu>
      </Menu>
    </Sider> -->
    <router-link to="/user">用户页面</router-link>
    <router-link to="/order">订单页面</router-link>
    <router-link to="/seller">商家页面</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuData: []
    };
  },
  methods: {
    fetchMenuData() {
      var _this = this;
      this.$fetch("../../data/test.json").then(res => {
        console.log(res)
        _this.menuData = res.menu;
      });
    }
  },
  mounted() {
    this.fetchMenuData();
  }
};
</script>
