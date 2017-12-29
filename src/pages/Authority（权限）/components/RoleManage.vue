<template>
  <div class="role-manage">
    <div class="manage-top">
      <Card>
        <Form :label-width="80">
          <FormItem label="角色名称：" style="width: 300px">
            <Input v-model="roleName" placeholder="请输入角色名称" />
          </FormItem>
          <FormItem style="text-align: right">
            <div class="button-con" style="margin-right: 100px">
              <Button type="primary" style="margin-right: 20px">查询</Button>
              <Button type="primary">重置</Button>
            </div>
          </FormItem>
        </Form>
      </Card>
    </div>
    <div class="table-con">
      <Card>
        <div class="add-role">
          <Button type="primary" @click="modal1=true">新增角色</Button>
          <!-- 添加角色 -->
          <AddRole v-if="modal1"></AddRole>
        </div>
        <div class="table-con" style="text-align: right">
          <Page :total="totalPage" show-sizer :page-size="pageSize" :page-size-opts="pageSizeOpts"></Page>
          <Table border :columns="columns1" :data="data1"></Table>
          <Page :total="totalPage" show-sizer :page-size="pageSize" :page-size-opts="pageSizeOpts"></Page>
        </div>
      </Card>
    </div>
  </div>

</template>

<script>
import AddRole from '../AddRole'
export default {
  components: {
    AddRole
  },
  data() {
    return {
      modal1: false,
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
          key: "currentPeople"
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
                      this.show(params.index);
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
                      this.showInfo(params.index);
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
          createTime: "New York No. 1 Lake Park"
        },
        {
          roleName: "Jim Green",
          creater: 24,
          createTime: "London No. 1 Lake Park"
        },
        {
          roleName: "Joe Black",
          creater: 30,
          createTime: "Sydney No. 1 Lake Park"
        },
        {
          roleName: "Jon Snow",
          creater: 26,
          createTime: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },

  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `角色名称：${this.data1[index].roleName}<br>创建人：${this.data1[index]
          .creater}<br>Address：${this.data1[index].createTime}`
      });
    },
    showInfo(index){
      this.$Modal.info({
        title: 'Info',
        content: `角色名称：${this.data1[index].roleName}<br>创建人：${this.data1[index]
          .creater}<br>Address：${this.data1[index].createTime}`
      })
    },
    remove(index) {
      this.data1.splice(index, 1);
    }
  }
};
</script>

<style>

</style>

