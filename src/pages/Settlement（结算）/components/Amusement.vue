<style scoped>

</style>
<template>
  <div class="contract-list">
    <div class="contract-top">
      <Card>
        <Form :label-width="90" ref="contractForm" v-model="formItem" label-position="left">
          <Row>
            <Col span="4">
            <FormItem label="合同编号：">
              <Input type="text" v-model="formItem.staffName" size="small" />
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="店铺名称：">
              <Input type="text" v-model="formItem.staffPhone" size="small" />
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="结算单编号：">
              <Input type="text" v-model="formItem.roleName" size="small" />
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="销售人员：">
              <Input type="text" v-model="formItem.roleName" size="small" />
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="4" >
            <FormItem label="结算单状态：">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="1">待商户确认</Option>
                <Option value="2">待主管确认</Option>
                <Option value="2">待总监确认</Option>
                <Option value="2">待总管副总确认</Option>
                <Option value="2">待总经理确认</Option>
                <Option value="2">待结算</Option>
                <Option value="2">已结算</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="发票状态：">
              <Select v-model="formItem.acountState" size="small">
                <Option value="11">已开发票</Option>
                <Option value="12">未开发票</Option>
              </Select>
            </FormItem>
            </Col>
          </Row>
          <Row>
            <!-- TODO: 后面的选择器要禁用前面选择器日期之前的日期 或者直接使用组件提供的dateRange -->
            <Col span="6">
            <FormItem label="账期结束时间（始）：" :label-width="150">
              <DatePicker type="date" v-model="formItem.startDate" :options="optionsTest" size="small"></DatePicker>
            </FormItem>
            </Col>
            <Col span="6" offset="1">
            <FormItem label="账期结束时间（止）：" :label-width="150">
              <DatePicker type="date" v-model="formItem.endDate" :options="optionsTest1" size="small"></DatePicker>
            </FormItem>
            </Col>
            <Col span="8" offset="1" style="text-align: right">
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
        <!-- <Button type="primary">新增模板</Button> -->
        <!-- <AddEnter></AddEnter> -->
        <!-- <EnterDetails :detailsShow="detailsShow"  v-if="detailsShow" @hideEnterDetailsModal="hideEnterDetailsModal"></EnterDetails> -->
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
export default {
  components: {
    // AddEnter
  },
  data() {
    return {
      optionsTest: {
        disabledDate(date) {}
      },
      optionsTest1: {
        disabledDate(date) {}
      },
      formItem: {
        contractNo: "", // 合同编号
        ownerName: "", // 甲方民称
        representative: "", // 代表人
        representativePhone: "", // 代表人手机号
        shopName: "", // 店铺名称
        saler: "", // 销售人员
        collaborateModel: "", // 合作模式
        constractState: "", // 合同状态
        constractSrc: "", // 合同变更来源
        startDate: "", // 结束时间（始）
        endDate: "" // 结束时间（止）
      },
      table: {
        totalPage: 200,
        pageSize: 15,
        pageSizeOpts: [15, 50, 100],
        staffAcounts: [
          // columns设置
          {
            title: "合同编号",
            key: "contractNo"
          },
          {
            title: "店铺名称",
            key: "ownerName"
          },
          {
            title: "结束账单编号",
            key: "representative"
          },
          {
            title: "结算账期",
            key: "representativePhone"
          },
          {
            title: "出账时间",
            key: "collaborateModel"
          },
          {
            title: "代收总金额",
            key: "shopName"
          },
          {
            title: "平台信息费",
            key: "startDate"
          },
          {
            title: "商户结算数",
            key: "endDate"
          },
          {
            title: "实际结算数",
            key: "contractNO"
          },
          {
            title: "发票状态",
            key: "contractNO"
          },
          {
            title: "结算单状态",
            key: "contractNO"
          },
          {
            title: "销售人员",
            key: "contractNO"
          },
          {
            title: "上一级审批人",
            key: "contractNO"
          },
          {
            title: "当前审批人",
            key: "contractNO"
          },
          {
            title: "操作",
            key: "action",
            width: 200,
            align: "center",
            // 操作按钮
            render: (h, params) => {
              return h(
                "div",
                {
                  style: {
                    "line-height": "40px"
                  }
                },
                [
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
                    "同意结算"
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
                    "不同意结算"
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
                        click() {}
                      }
                    },
                    "结算完成确认"
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
                        click() {}
                      }
                    },
                    "发票已开"
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
                        click() {}
                      }
                    },
                    "结算单详情"
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
                        click() {}
                      }
                    },
                    "店铺详情"
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
                        click() {}
                      }
                    },
                    "合同详情"
                  )
                ]
              );
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
      // this.detailsShow = true;
    },
    hideEnterDetailsModal() {
      // this.detailsShow = false;
    }
  }
};
</script>

