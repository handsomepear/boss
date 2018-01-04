<style scoped>

</style>
<template>
  <div class="contract-tpl">
    <div class="contracttpl-top">
      <Card>
        <Form :label-width="90" ref="formStaff" v-model="formItem" label-position="left">
          <Row>
            <Col span="5">
            <FormItem label="模板序号：">
              <Input type="text" placeholder="可输入部分序号名字" v-model="formItem.staffName" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="模板名称：">
              <Input type="text" v-model="formItem.staffPhone" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="创建人：">
              <Input type="text" v-model="formItem.roleName" placeholder="可输入部分编号数字" size="small" />
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="5">
            <FormItem label="适用对象：">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="active">个人合作</Option>
                <Option value="blocked">机构合作</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="适用业态：">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="blocked">游乐</Option>
                <Option value="blocked">教育</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="模板状态：">
              <Select placeholder="全部状态" v-model="formItem.acountState"  size="small">
                <Option value="active">待启用</Option>
                <Option value="blocked">启用中</Option>
                <Option value="blocked">已废弃</Option>
              </Select>
            </FormItem>
            </Col>
          </Row>
          <Row>
            <!-- TODO: 后面的选择器要禁用前面选择器日期之前的日期 或者直接使用组件提供的dateRange -->
            <Col span="6">
            <FormItem label="启用日期（始）：" :label-width="132">
              <DatePicker type="date" v-model="formItem.startDate" size="small"></DatePicker>
            </FormItem>
            </Col>
            <Col span="6" offset="1">
            <FormItem label="启用日期（止）：" :label-width="132">
              <DatePicker type="date" v-model="formItem.endDate" size="small"></DatePicker>
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
        <!-- <AddEnter></AddEnter> -->
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
            title: "序号",
            key: "entername"
          },
          {
            title: "模板名称",
            key: "phone"
          },
          {
            title: "适用业态",
            key: "shopname"
          },
          {
            title: "适用对象",
            key: "area"
          },
          {
            title: "创建日期",
            key: "applydate"
          },
          {
            title: "模板签约数",
            width: 110,
            key: "checkdate"
          },
          {
            title: "替换模板序号",
            key: "enterstate"
          },
          {
            title: "启用日期",
            key: "contractNO"
          },
          {
            title: "创建人",
            key: "contractNO"
          },
          {
            title: "模板状态",
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
                      click: () => {}
                    }
                  },
                  "详情"
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
    /* 提交查询 */
    submit() {
      const filterObj = {};
      // 发送个请求 把查询的传递过去 然后拉过来渲染一下
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
    /* 弹出详情页 */
    showEnterDetailsModal() {
      this.isCheck = false;
      this.detailsShow = true;
    },
    /* 隐藏详情弹窗 */
    hideEnterDetailsModal() {
      this.detailsShow = false;
    }
  }
};
</script>

