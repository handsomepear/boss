<style lang="less" scoped>
.tips {
  padding-left: 18px;
  margin-bottom: 24px;
}
</style>


<template>
  <div class="add-role">
    <Button type="primary" @click="showAddRoleModal">新增角色</Button>
    <!-- 添加角色 -->
    <Modal v-model="showAddRole" title="新增角色" width="60%">
      <Form :label-width="100" style="width:300px">
        <FormItem label="※角色名称：">
          <Input v-model="roleName" size="small"/>
        </FormItem>
      </Form>
      <span class="tips">※权限设定：勾选页面标签，该页面可见；页面可见时，勾选按钮标签，该按钮可见可操作。</span>
      <!-- 权限设定表格 -->
      <Table border :columns="authorityColums" :data="authorityData"></Table>
    </Modal>
  </div>

</template>


<script>
export default {
  props: {},
  data() {
    return {
      showAddRole: false,
      roleName: "handsonzps",
      single: true,
      authorityColums: [
        {
          title: "页面标签",
          key: "pageTag",
          align: "center",
          width: 150,
          render(h, params) {
            // h 就是 createElement
            // params 存放了表格的一些信息 row 还有 column
            return h("Checkbox", {}, [h("span", [params.row.pageTag])]);
          }
        },
        {
          title: "按钮标签",
          key: "buttonTag",
          align: "center",
          render(h, params) {
            var checkboxArr = [];
            // params.row.buttonTag 拿到的是row的数据
            params.row.buttonTag.forEach(item => {
              checkboxArr.push(
                h("Checkbox", { label: item.label }, [h("span", [item.text])])
              );
            });
            return h("CheckboxGroup", {}, checkboxArr);
          }
        }
      ],
      authorityData: [
        {
          pageTag: "页面管理",
          buttonTag: [
            {
              label: "twitter",
              text: "新增角色"
            },
            {
              label: "facebook",
              text: "修改"
            },
            {
              label: "Google",
              text: "删除"
            },
            {
              label: "Google",
              text: "详情"
            }
          ]
        },
        {
          pageTag: "员工账号",
          buttonTag: [
            {
              label: "twitter",
              text: "新增角色"
            },
            {
              label: "facebook",
              text: "修改"
            },
            {
              label: "Google",
              text: "冻结"
            },
            {
              label: "Google",
              text: "详情"
            },
            {
              label: "Google",
              text: "恢复"
            }
          ]
        },
        {
          pageTag: "入驻审核",
          buttonTag: [
            {
              label: "twitter",
              text: "新增申请"
            },
            {
              label: "facebook",
              text: "修改"
            },
            {
              label: "Google",
              text: "审核"
            },
            {
              label: "Google",
              text: "详情"
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {
    showAddRoleModal(){
      this.showAddRole = true;
    }
  }
};
</script>

