<style scoped>

</style>
<template>
  <div class="contract-list">
    <div class="contract-top">
      <Card>
        <Form :label-width="90" ref="contractForm" v-model="formItem" label-position="left">
          <Row>
            <Col span="5">
            <FormItem label="POS编号：">
              <Input type="text" v-model="formItem.staffName" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="SN串号：">
              <Input type="text" v-model="formItem.staffPhone" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="店铺名称：">
              <Input type="text" v-model="formItem.roleName" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="入库人：">
              <Input type="text" v-model="formItem.roleName" size="small" />
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="4">
            <FormItem label="供货商：">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="1">世麦科技</Option>
                <Option value="2">联迪科技</Option>
                <Option value="2">旺POS</Option>
                <Option value="2">新大陆</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="POS状态：">
              <Select v-model="formItem.acountState" size="small">
                <Option value="11">正常</Option>
                <Option value="12">冻结</Option>
              </Select>
            </FormItem>
            </Col>
          </Row>
          <Row>
            <!-- TODO: 后面的选择器要禁用前面选择器日期之前的日期 或者直接使用组件提供的dateRange -->
            <Col span="6">
            <FormItem label="入库时间（始）：" :label-width="150">
              <DatePicker type="date" v-model="formItem.startDate" :options="optionsTest" size="small"></DatePicker>
            </FormItem>
            </Col>
            <Col span="6" offset="1">
            <FormItem label="入库时间（止）：" :label-width="150">
              <DatePicker type="date" v-model="formItem.endDate" :options="optionsTest1" size="small"></DatePicker>
            </FormItem>
            </Col>
          </Row>
          <Row>
            <!-- TODO: 后面的选择器要禁用前面选择器日期之前的日期 或者直接使用组件提供的dateRange -->
            <Col span="6">
            <FormItem label="租期结束时间（始）：" :label-width="150">
              <DatePicker type="date" v-model="formItem.startDate" :options="optionsTest" size="small"></DatePicker>
            </FormItem>
            </Col>
            <Col span="6" offset="1">
            <FormItem label="租期结束时间（止）：" :label-width="150">
              <DatePicker type="date" v-model="formItem.endDate" :options="optionsTest1" size="small"></DatePicker>
            </FormItem>
            </Col>
            <Col span="8" offset="1" style="text-align: right">
            <FormItem>
              <div class="button-con">
                <Button type="primary" @click="submit">查询</Button>
                <Button type="primary" style="margin-left: 20px">重置</Button>
                <Button type="primary" style="margin-left: 20px">导出</Button>
              </div>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
    <div class="data-con">
      <Card>
        <!-- 入库管理 -->
        <StoragePos></StoragePos>
        <!-- POS详情 -->
        <PosDetail :detailShow="detailShow" v-if="detailShow" @hidePosDetailModal="hidePosDetailModal"></PosDetail>
        <div class="table-con" style="text-align: right">
          <!-- 分页插件和表格内容显示 -->
          <Page :total="table.totalPage" show-sizer :page-size="table.pageSize" :page-size-opts="table.pageSizeOpts"></Page>
          <Table border :columns="table.staffAcounts" :data="table.staffData" style="margin: 20px 0"></Table>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import StoragePos from './components/StoragePos';
import PosDetail from './components/PosDetail';
export default {
  components: {
    StoragePos,
    PosDetail
  },
  data() {
    return {
      detailShow: false,
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
          {
            title: "POS编号",
            key: "contractNo"
          },
          {
            title: "供货商",
            key: "ownerName"
          },
          {
            title: "SN串号",
            key: "representative"
          },
          {
            title: "入库时间",
            key: "representativePhone"
          },
          {
            title: "当前服务店铺名称",
            key: "collaborateModel"
          },
          {
            title: "租期开始时间",
            key: "shopName"
          },
          {
            title: "租期结束时间",
            key: "startDate"
          },
          {
            title: "POS状态",
            key: "endDate"
          },
          {
            title: "入库人",
            key: "contractNO"
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
                          this.showEnterDetailsModal();
                        }
                      }
                    },
                    "冻结"
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
                        click:() => {
                          this.showPosDetailModal()
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
    showPosDetailModal() {
      this.detailShow = true;
    },
    hidePosDetailModal() {
      this.detailShow = false;
    }
  }
};
</script>

