<style lang="less">
.role-manage {
  .button-con {
    margin-right: 100px;
  }
  .table-con {
    text-align: right;
  }
  .table-top {
    display: flex;
    justify-content: space-between;
  }
}
</style>

<template>
  <div class="role-manage">
    <div class="manage-top">
      <Card>
        <Form :label-width="80">
          <FormItem label="角色名称：" style="width: 300px">
            <Input v-model="roleName" placeholder="请输入角色名称" size="small" />
          </FormItem>
          <FormItem style="text-align: right">
            <div class="button-con">
              <Button type="primary" style="margin-right: 20px">查询</Button>
              <Button type="primary">重置</Button>
            </div>
          </FormItem>
        </Form>
      </Card>
    </div>
    <div class="data-con">
      <Card>
        <!-- 角色详情 -->
        <RoleDetail :detailShow="detailShow" v-if="detailShow" @hideRoleDetailModal="hideRoleDetailModal"></RoleDetail>
        <!-- 成员管理 -->
        <MemberManage :showMemberModal="showMemberModal" :memberCount="memberCount" v-if="showMemberModal" @hideMember="hideMember"></MemberManage>
        <div class="table-con" style="text-align: right">
          <!-- 分页插件和表格内容显示 -->
          <div class="table-top">
            <!-- 添加角色 -->
            <AddRole></AddRole>
            <Page :total="totalPage" show-sizer :page-size="pageSize" :page-size-opts="pageSizeOpts"></Page>
          </div>
          <Table border :columns="columns1" :data="data1" style="margin: 20px 0"></Table>
        </div>
      </Card>
    </div>
  </div>

</template>

<script>
import AddRole from "./components/AddRole"; // 添加角色
import RoleDetail from "./components/RoleDetail";
import MemberManage from "./components/MemberManage"; // 成员管理
export default {
  components: {
    AddRole,
    RoleDetail,
    MemberManage
  },
  data() {
    return {
      detailShow: false,
      showMemberModal: false,
      memberCount: null,
      roleName: "handsonZPS", // 角色名称
      totalPage: 300,
      pageSize: 15,
      pageSizeOpts: [15, 50, 100],
      columns1: [
        {
          title: "角色名称",
          key: "roleName"
        },
        {
          title: "创建人",
          key: "creater"
        },
        {
          title: "创建日期",
          key: "createTime"
        },
        {
          title: "当天赋予人数",
          key: "currentPeople",
          align: "center",
          render:(h, params) => {
            // 表格的内容及一些属性都在params里面 可以动态渲染表格中的内容
            return h("div", [
              h(
                "span",
                {
                  style: {
                    "cursor": "pointer",
                    "color": "blue"
                  },
                  on: {
                    click: () => {
                      // 显示成员管理
                      this.showMember(params.row.currentPeople)
                    }
                  }
                },
                params.row.currentPeople
              )
            ])
          }
        },
        {
          title: "操作",
          key: "action",
          width: 400,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      // 修改信息
                      
                    }
                  }
                },
                "修改"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      // 删除当前角色
                      this.remove(params.index);
                    }
                  }
                },
                "删除"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "info",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      // 查看详情
                      this.showRoleDetailModal();
                    }
                  }
                },
                "详情"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          roleName: "John Brown",
          creater: 18,
          createTime: "New York No. 1 Lake Park",
          currentPeople: 13
        },
        {
          roleName: "Jim Green",
          creater: 24,
          createTime: "London No. 1 Lake Park",
          currentPeople: 15
        },
        {
          roleName: "Joe Black",
          creater: 30,
          createTime: "Sydney No. 1 Lake Park",
          currentPeople: 11
        },
        {
          roleName: "Jon Snow",
          creater: 26,
          createTime: "Ottawa No. 2 Lake Park",
          currentPeople: 12
        }
      ]
    };
  },

  methods: {
    // show(index) {
    //   this.$Modal.info({
    //     title: "User Info",
    //     content: `角色名称：${this.data1[index].roleName}<br>创建人：${this.data1[index]
    //       .creater}<br>Address：${this.data1[index].createTime}`
    //   });
    // },
    remove(index) {
      this.data1.splice(index, 1);
    },
    showRoleDetailModal() {
      this.detailShow = true;
    },
    hideRoleDetailModal() {
      this.detailShow = false;
    },
    // 显示成员管理
    showMember(currentPeople){
      this.showMemberModal = true;
      this.memberCount = currentPeople
    },
    // 隐藏成员管理
    hideMember(){
      this.showMemberModal = false;
    }
  }
};
</script>
