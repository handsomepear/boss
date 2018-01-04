<style scoped>
.button-con {
  margin-right: 200px;
}
</style>
<template>
  <div class="staff-acount">
    <div class="staff-top">
      <Card>
        <Form inline :label-width="100" ref="formStaff" v-model="formItem">
          <FormItem label="员工姓名：">
            <Input  placeholder="请直接输入员工实名" v-model="formItem.staffName" size="small" />
          </FormItem>
          <FormItem label="员工手机：">
            <Input  v-model="formItem.staffPhone" size="small" />
          </FormItem>
          <FormItem label="角色名称：">
            <Input v-model="formItem.roleName" size="small" />
          </FormItem>
          <FormItem label="直属领导姓名：">
            <Input  placeholder="请直接输入员工实名" v-model="formItem.leaderName" size="small" />
          </FormItem>
          <FormItem label="登录名：">
            <Input  placeholder="请直接输入员工登录名" v-model="formItem.username" size="small" />
          </FormItem>
          <FormItem label="账号状态：">
            <Select placeholder="请选择" v-model="formItem.acountState" size="small">
              <Option value="active">生效中</Option>
              <Option value="blocked">已冻结</Option>
            </Select>
          </FormItem>
          <FormItem style="display: block">
            <div class="button-con" style="text-align:right">
              <Button type="primary" @click="submit">提交</Button>
              <Button type="primary" style="margin-left: 20px" @click="handleReset('formStaff')">重置</Button>
            </div>
          </FormItem>
        </Form>
      </Card>
    </div>
    <div class="data-con">
      <Card>
        <!-- 添加新账号 -->
        <AddAcount></AddAcount>
        <div class="table-con" style="text-align: right">
          <!-- 分页插件和表格内容显示 -->
          <Page :total="table.totalPage" show-sizer :page-size="table.pageSize" :page-size-opts="table.pageSizeOpts"></Page>
          <Table border :columns="table.staffAcounts" :data="table.staffData" style="margin: 20px 0"></Table>
          <Page :total="table.totalPage" show-sizer :page-size="table.pageSize" :page-size-opts="table.pageSizeOpts"></Page>
          <!-- 如何把两个page组件关联起来？ -->
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import AddAcount from "./AddAcount";
export default {
  components: {
    AddAcount
  },
  data() {
    return {
      accountState: false,
      formItem: {
        staffName: "", // 员工姓名
        staffPhone: "", // 员工手机
        roleName: "", // 角色名称
        leaderName: "", // 直属领导姓名
        username: "", // 登录名
        acountState: "" // 账号状态
      },
      table: {
        totalPage: 200,
        pageSize: 15,
        pageSizeOpts: [15, 50, 100],
        staffAcounts: [
          // columns设置
          {
            title: "登录名",
            key: "username"
          },
          {
            title: "员工姓名",
            key: "fullname"
          },
          {
            title: "员工手机",
            key: "phone"
          },
          {
            title: "邮箱地址",
            key: "email"
          },
          {
            title: "角色名称",
            key: "rolename"
          },
          {
            title: "直属领导",
            key: "leader"
          },
          {
            title: "账号创建日期",
            key: "createDate"
          },
          {
            title: "创建人",
            key: "creater"
          },
          {
            title: "账号状态",
            key: "state",
            render: (h, params) => {
              return h("span", params.row.state ? "已冻结" : "正常");
            }
          },
          {
            title: "操作",
            key: "action",
            width: 220,
            align: "center",
            // 创建row上面的按钮
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
                      "margin-right": "5px"
                    },
                    on: {
                      click() {
                        this.revise(params);
                      }
                    }
                  },
                  "修改"
                ),
                h(
                  "Button",
                  {
                    props: {
                      type: "warning",
                      size: "small"
                    },
                    style: {
                      "margin-right": "5px"
                    },
                    on: {
                      click: () => {
                        this.block(params);
                      }
                    }
                  },
                  params.row.state ? "恢复" : "冻结"
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
                        this.resetPwd(params.row.fullname);
                      }
                    }
                  },
                  "重置密码"
                )
              ]);
            }
          }
        ],
        staffData: [
          // 表格数据
          {
            username: "handsonzps",
            fullname: "zhaipeishen",
            phone: "134****1514",
            email: "zps@youyanlife.com",
            rolename: "FE",
            leader: "joiila",
            createDate: "2017-12-25",
            creater: "joiila",
            state: true
          },
          {
            username: "handsonzps",
            fullname: "zhaipeishen",
            phone: "134****1514",
            email: "zps@youyanlife.com",
            rolename: "FE",
            leader: "joiila",
            createDate: "2017-12-25",
            creater: "joiila",
            state: true
          },
          {
            username: "handsonzps",
            fullname: "zhaipeishen",
            phone: "134****1514",
            email: "zps@youyanlife.com",
            rolename: "FE",
            leader: "joiila",
            createDate: "2017-12-25",
            creater: "joiila",
            state: false
          },
          {
            username: "handsonzps",
            fullname: "zhaipeishen",
            phone: "134****1514",
            email: "zps@youyanlife.com",
            rolename: "FE",
            leader: "joiila",
            createDate: "2017-12-25",
            creater: "joiila",
            state: false
          },
          {
            username: "handsonzps",
            fullname: "zps",
            phone: "134****1514",
            email: "zps@youyanlife.com",
            rolename: "FE",
            leader: "joiila",
            createDate: "2017-12-25",
            creater: "joiila",
            state: true
          }
        ]
      }
    };
  },
  methods: {
    /* 重置密码 */
    resetPwd(fullname) {
      /* 重置密码 发送请求 请求成功之后 弹窗显示 */

      this.$Modal.success({
        content: `员工${fullname}已经重置为初始密码`
      });

      /* 重置密码 发送请求 请求出错之后 弹窗显示 */

      // this.$Modal.error({
      //   content: '重置密码出错，请稍候再试'
      // })
    },
    /* 提交查询 */
    submit() {
      const filterObj = {
        staffName: this.formItem.staffName || "",
        staffPhone: this.formItem.staffPhone || "",
        roleName: this.formItem.roleName || "",
        leaderName: this.formItem.leaderName || "",
        username: this.formItem.username || "",
        acountState: this.formItem.acountState || ""
      };
      // 发送个请求 把查询的传递过去 然后拉过来渲染一下
      console.log(JSON.stringify(filterObj));
    },
    /* 表单重置 */
    handleReset(name) {
      console.log(this.$refs[name]);
      // this.$refs[name].resetFields();
    },
    /* 修改信息 */
    revise(revise){
      // 弹窗 + 表单回填
    },
    /* 冻结账号 */
    block(params) {
      params.row.state = !params.row.state;
    }
  }
};
</script>

