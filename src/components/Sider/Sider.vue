<template>
  <Menu ref="sideMenu" :active-name="$route.name" :open-names="openNames" :theme="menuTheme" width="auto" @on-select="changeMenu">
    <template v-for="item in menuList">
      <MenuItem v-if="item.children.length<=1" :name="item.children[0].name" :key="'menuitem' + item.name">
      <Icon :type="item.icon" :size="iconSize" :key="'menuicon' + item.name"></Icon>
      <span class="layout-text" :key="'title' + item.name">{{ item.name }}</span>
      </MenuItem>
      <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.name">
        <template slot="title">
          <Icon :type="item.icon" :size="iconSize"></Icon>
          <span class="layout-text">{{ item.name }}</span>
        </template>
        <template v-for="child in item.children">
          <MenuItem :name="child.name" :key="'menuitem' + child.name">
          <Icon :type="child.icon" :size="iconSize" :key="'icon' + child.name"></Icon>
          <span class="layout-text" :key="'title' + child.name">{{ child.name }}</span>
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
      menuList: [
        {
          name: "权限管理",
          children: [
            {
              name: "角色管理"
            },
            {
              name: "员工账号"
            }
          ]
        },
        {
          name: "合同管理",
          children: [
            {
              name: "入驻审核"
            },
            {
              name: "合同列表"
            },
            {
              name: "合同模板"
            }
          ]
        },
        {
          name: "商户管理",
          children: [
            {
              name: "游乐商户管理"
            },
            {
              name: "教育商户管理"
            }
          ]
        },
        {
          name: "商品管理",
          children: [
            {
              name: "游乐商品管理"
            },
            {
              name: "教育商品管理"
            }
          ]
        },
        {
          name: "订单管理",
          children: [
            {
              name: "游乐订单管理"
            },
            {
              name: "教育订单管理"
            }
          ]
        },
        {
          name: "用户管理"
        },
        {
          name: "营销中心",
          children: [
            {
              name: "Banner管理"
            },
            {
              name: "名人堂推荐"
            },
            {
              name: "同龄妈妈推荐"
            }
          ]
        },
        {
          name: "运营管理",
          children: [
            {
              name: "导出文件"
            }
          ]
        },
        {
          name: "客服管理",
          children: [
            {
              name: "游乐评价"
            },
            {
              name: "教育评价"
            },
            {
              name: "游乐问询"
            },
            {
              name: "教育问询"
            }
          ]
        },
        {
          name: "设备管理",
          children: [
            {
              name: "POS管理"
            }
          ]
        },
        {
          name: "结算管理",
          children: [
            {
              name: "游乐结算"
            },
            {
              name: "教育结算"
            }
          ]
        }, 
        {
          name: "退款管理",
          children: [
            {
              name: "游乐退款"
            },
            {
              name: "教育退款"
            }
          ]
        }
      ],
      openNames: [],
      menuTheme: "dark"
    };
  },
  methods: {
    changeMenu(){

    }
  }
};
</script>

<style>

</style>


