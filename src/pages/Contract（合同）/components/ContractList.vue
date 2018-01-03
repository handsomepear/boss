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
              <Input type="text" placeholder="可输入部分编号数字" v-model="formItem.staffName" />
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="甲方名称：">
              <Input type="text" v-model="formItem.staffPhone" />
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="代表人：">
              <Input type="text" v-model="formItem.roleName" />
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="代表人手机号：" :label-width="100">
              <Input type="text" v-model="formItem.staffName" />
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="4">
            <FormItem label="店铺名称：">
              <Input type="text" placeholder="该合同下任一店铺名称" v-model="formItem.shopName" />
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="销售人员：">
              <Input type="text" placeholder="请输入销售人员姓名" v-model="formItem.leaderName" />
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="4">
            <FormItem label="合作模式：">
              <Select placeholder="请选择" v-model="formItem.acountState" style="width: 100px">
                <Option value="active">个人合作</Option>
                <Option value="blocked">机构合作</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="合同状态：">
              <Select placeholder="请选择" v-model="formItem.acountState" style="width: 100px">
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
              <Select placeholder="请选择" v-model="formItem.acountState" style="width: 100px">
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
              <DatePicker type="date" v-model="formItem.startDate" :options="optionsTest"></DatePicker>
            </FormItem>
            </Col>
            <Col span="6" offset="1">
            <FormItem label="合同结束时间（止）：" :label-width="132">
              <DatePicker type="date" v-model="formItem.endDate" :options="optionsTest1" ></DatePicker>
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
        <EnterDetails :detailsShow="detailsShow"  v-if="detailsShow" @hideEnterDetailsModal="hideEnterDetailsModal"></EnterDetails>
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
import AddEnter from './AddEnter'
export default {
  components: {
    AddEnter
  },
  data() {
    return {
      optionsTest: {
        disabledDate(date) {
          
        }
      },
      optionsTest1: {
        disabledDate(date) {
        }
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
                      click() {}
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
      this.detailsShow = true;
    },
    hideEnterDetailsModal() {
      this.detailsShow = false;
    }
  }
};
</script>

