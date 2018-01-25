<style scoped>
.table-top {
  display: flex;
  justify-content: space-between;
}
</style>
<template>
  <div class="contract-list">
    <div class="contract-top">
      <Card>
        <Form :label-width="90" ref="contractForm" v-model="formItem" label-position="left">
          <Row>
            <Col span="5">
            <FormItem label="合同编号：">
              <Input type="text" placeholder="可输入部分编号数字" v-model="formItem.staffName" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="甲方名称：">
              <Input type="text" v-model="formItem.staffPhone" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="代表人：">
              <Input type="text" v-model="formItem.roleName" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="代表人手机号：" :label-width="100">
              <Input type="text" v-model="formItem.staffName" size="small" />
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="5">
            <FormItem label="店铺名称：">
              <Input type="text" placeholder="该合同下任一店铺名称" v-model="formItem.shopName" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="销售人员：">
              <Input type="text" placeholder="请输入销售人员姓名" v-model="formItem.leaderName" size="small" />
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="4">
            <FormItem label="合作模式：">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small" :transfer="true">
                <Option value="active">个人合作</Option>
                <Option value="blocked">机构合作</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="合同状态：">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="active">待审查</Option>
                <Option value="blocked">通过</Option>
                <Option value="blocked">驳回</Option>
                <Option value="blocked">终止</Option>
                <Option value="blocked">已到期</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="合同变更来源：" :label-width="100">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="active">BOSS</Option>
                <Option value="blocked">商户端</Option>
              </Select>
            </FormItem>
            </Col>
          </Row>
          <Row>
            <!-- TODO: 后面的选择器要禁用前面选择器日期之前的日期 或者直接使用组件提供的dateRange -->
            <Col span="6">
            <FormItem label="合同结束时间（始）：" :label-width="132">
              <DatePicker type="date" v-model="formItem.startDate" :options="optionsTest" size="small"></DatePicker>
            </FormItem>
            </Col>
            <Col span="6" offset="1">
            <FormItem label="合同结束时间（止）：" :label-width="132">
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

        <!-- 审查/详情弹窗 -->
        <ContractDetails :detailsShow="detailsShow" :isCheck="isCheck" v-if="detailsShow" @hideContractDetailsModal="hideContractDetailsModal"></ContractDetails>
        <!-- 销售人员变更 -->
        <ChangeSaler :modalsShow="modalsShow" v-if="modalsShow" @hideChangeSalerModal="hideChangeSalerModal"></ChangeSaler>
        <div class="table-con" style="text-align: right">
          <div class="table-top">
            <!-- 添加新账号 -->
            <AddContract></AddContract>
            <!-- 分页插件和表格内容显示 -->
            <Page :total="table.totalPage" show-sizer :page-size="table.pageSize" :page-size-opts="table.pageSizeOpts"></Page>
          </div>
          <Table border :columns="table.staffAcounts" :data="table.staffData" style="margin: 20px 0"></Table>
          <!-- 如何把两个page组件关联起来？ -->
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import AddContract from "./components/AddContract";
import ContractDetails from "./components/ContractDetails";
import ChangeSaler from "./components/ChangeSaler";
export default {
  components: {
    AddContract,
    ContractDetails,
    ChangeSaler
  },
  data() {
    return {
      isCheck: false, // 点击审查为true 点击详情为false
      detailsShow: false,
      modalsShow: false,
      optionsTest: {},
      optionsTest1: {},
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
            title: "甲方民称",
            key: "ownerName"
          },
          {
            title: "代表人",
            key: "representative"
          },
          {
            title: "代表人手机号",
            key: "representativePhone"
          },
          {
            title: "合作模式",
            key: "collaborateModel"
          },
          {
            title: "店铺名称",
            key: "shopName"
          },
          {
            title: "合同开始日期",
            key: "startDate"
          },
          {
            title: "合同结束日期",
            key: "endDate"
          },
          {
            title: "合同创建时间",
            key: "contractNO"
          },
          {
            title: "销售人员",
            key: "saler"
          },
          {
            title: "合同状态",
            key: "contractState"
          },
          {
            title: "合同变更来源",
            key: "constractSrc"
          },
          {
            title: "操作",
            key: "action",
            width: 200,
            align: "center",
            // 创建row上面的按钮
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
                          this.showContractCheckModal();
                        }
                      }
                    },
                    "审查"
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
                    "中止合同"
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
                          // 变更销售
                          this.showChangeSalerModal();
                        }
                      }
                    },
                    "销售人员变更"
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
                          this.showContractDetailsModal();
                        }
                      }
                    },
                    "详情"
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
    showContractDetailsModal() {
      this.detailsShow = true;
    },
    hideContractDetailsModal() {
      this.isCheck = false;
      this.detailsShow = false;
    },
    /* 审查弹窗 */
    showContractCheckModal() {
      this.isCheck = true;
      this.detailsShow = true;
    },
    showChangeSalerModal() {
      this.modalsShow = true;
    },
    hideChangeSalerModal() {
      this.modalsShow = false;
    }
  }
};
</script>

