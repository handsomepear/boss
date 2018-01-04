<style scoped>

</style>
<template>
  <div class="enter-check">
    <div class="enter-top">
      <Card>
        <Form :label-width="90" ref="formStaff" v-model="formItem" label-position="left">
          <Row>
            <Col span="5">
            <FormItem label="入驻人：">
              <Input type="text" placeholder="请输入入驻人姓名" v-model="formItem.staffName" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="入驻人手机：">
              <Input type="text" v-model="formItem.staffPhone" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="合同编号：">
              <Input type="text" v-model="formItem.roleName" placeholder="可输入部分编号数字" size="small" />
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="6">
            <FormItem label="店铺名称：">
              <Input type="text" placeholder="该商户成功入驻后，名下任一店铺名称" v-model="formItem.leaderName" size="small" />
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="4">
            <FormItem label="行政区域：">
              <Select placeholder="请选择" v-model="formItem.acountState"  size="small">
                <Option value="active">海淀区</Option>
                <Option value="blocked">朝阳区</Option>
                <Option value="blocked">西城区</Option>
                <Option value="blocked">东城区</Option>
                <Option value="blocked">昌平区</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="账号状态：">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="active">全部状态</Option>
                <Option value="blocked">通过</Option>
                <Option value="blocked">驳回</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="12" offset="1" style="text-align: right">
            <FormItem>
              <div class="button-con">
                <Button type="primary" @click="submit">查询</Button>
                <Button type="primary" style="margin-left: 20px">重置</Button>
              </div>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
    <div class="data-con">
      <Card>
        <!-- 添加新账号 -->
        <AddEnter></AddEnter>
        <!-- 详情/审核 -->
        <EnterDetails :detailsShow="detailsShow" :isCheck="isCheck" v-if="detailsShow" @hideEnterDetailsModal="hideEnterDetailsModal"></EnterDetails>
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
import AddEnter from "./AddEnter";
import EnterDetails from "./EnterDetails";
export default {
  components: {
    AddEnter,
    EnterDetails
  },
  data() {
    return {
      detailsShow: false,
      accountState: false,
      isCheck: false,
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
            title: "入驻人",
            key: "entername"
          },
          {
            title: "入驻人手机",
            key: "phone"
          },
          {
            title: "店铺名称",
            key: "shopname"
          },
          {
            title: "行政区域",
            key: "area"
          },
          {
            title: "申请日期",
            key: "applydate"
          },
          {
            title: "审核通过日期",
            width: 110,
            key: "checkdate"
          },
          {
            title: "入驻状态",
            key: "enterstate"
          },
          {
            title: "合同编号",
            key: "contractNO"
          },
          {
            title: "操作",
            key: "action",
            width: 300,
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
                      click: () => {
                        console.log(this);
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
                      type: "info",
                      size: "small"
                    },
                    style: {
                      "margin-right": "5px"
                    },
                    on: {
                      click: () => {
                        this.showEnterDetailsModal();
                      }
                    }
                  },
                  "详情"
                ),
                h(
                  "Button",
                  {
                    props: {
                      type: "info",
                      size: "small"
                    },
                    style: {
                      "margin-right": "5px"
                    },
                    on: {
                      click: () => {
                        this.showEnterCheckModal();
                      }
                    }
                  },
                  "审核"
                ),
                h(
                  "Button",

                  {
                    props: {
                      type: "info",
                      size: "small"
                    },
                    on: {
                      click() {}
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
            entername: "handsonzps",
            phone: "135****1234",
            shopname: "链家",
            area: "昌平区",
            applydate: "2017-12-25",
            checkdate: "2017-12-25",
            createdate: "2017-12-25",
            enterstate: "joiila",
            contractNO: 1020303119031
          },
          {
            entername: "handsonzps",
            phone: "135****1234",
            shopname: "链家",
            area: "昌平区",
            applydate: "2017-12-25",
            checkdate: "2017-12-25",
            createdate: "2017-12-25",
            enterstate: "joiila",
            contractNO: 1020303119031
          },
          {
            entername: "handsonzps",
            phone: "135****1234",
            shopname: "链家",
            area: "昌平区",
            applydate: "2017-12-25",
            checkdate: "2017-12-25",
            createdate: "2017-12-25",
            enterstate: "joiila",
            contractNO: 1020303119031
          },
          {
            entername: "handsonzps",
            phone: "135****1234",
            shopname: "链家",
            area: "昌平区",
            applydate: "2017-12-25",
            checkdate: "2017-12-25",
            createdate: "2017-12-25",
            enterstate: "joiila",
            contractNO: 1020303119031
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
      this.$refs[name].resetFields();
    },
    /* 修改信息 */
    revise(revise) {
      // 弹窗 + 表单回填
    },
    /* 冻结账号 */
    block(params) {
      params.row.state = !params.row.state;
    },
    /* 弹出详情页 */
    showEnterDetailsModal() {
      this.isCheck = false;
      this.detailsShow = true;
    },
    /* 隐藏详情弹窗 */
    hideEnterDetailsModal() {
      this.detailsShow = false;
    },
    /* 显示审核弹窗 */
    showEnterCheckModal() {
      this.isCheck = true;
      this.detailsShow = true;
    }
  }
};
</script>

