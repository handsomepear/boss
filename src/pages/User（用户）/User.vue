<style scoped>

</style>
<template>
  <div class="contract-list">
    <div class="contract-top">
      <Card>
        <Form :label-width="90" ref="contractForm" v-model="formItem" label-position="left">
          <Row>
            <Col span="5">
            <FormItem label="用户姓名：">
              <Input type="text" placeholder="可输入部分编号数字" v-model="formItem.staffName" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="注册手机号：">
              <Input type="text" v-model="formItem.staffPhone" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="储值卡数量：">
              <Input type="text" v-model="formItem.roleName" placeholder="请输入销售人员姓名" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="储值卡金额：">
              <Input type="text" v-model="formItem.roleName" placeholder="请输入销售人员姓名" size="small" />
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="5" >
            <FormItem label="订单数量：">
              <Input type="text" placeholder="小于等于该数字的用户" v-model="formItem.shopName" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="消费金额：">
              <Input type="text" placeholder="小于等于该数字的用户" v-model="formItem.shopName" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="店铺名称：">
              <Input type="text" placeholder="用户去过的任意店铺" v-model="formItem.shopName" size="small" />
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="4">
            <FormItem label="宝宝年龄：" :label-width="80">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="11">0岁</Option>
                <Option value="11">1岁</Option>
                <Option value="11">2岁</Option>
                <Option value="11">3岁</Option>
                <Option value="11">3岁</Option>
                <Option value="11">5岁</Option>
                <Option value="11">6岁</Option>
                <Option value="11">7岁</Option>
                <Option value="11">8岁</Option>
                <Option value="11">9岁</Option>
                <Option value="11">10岁</Option>
                <Option value="11">11岁</Option>
                <Option value="11">12岁</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="宝宝性别：" :label-width="80">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="11">男宝</Option>
                <Option value="11">女宝</Option>
                
              </Select>
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="注册来源：" :label-width="80">
              <Select placeholder="请选择" v-model="formItem.acountState"size="small">
                <Option value="active">后台注册</Option>
                <Option value="blocked">用户注册</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="用户类型：" :label-width="80">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="active">普通用户</Option>
                <Option value="blocked">虚拟用户</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="用户状态：" :label-width="80">
              <Select placeholder="请选择" v-model="formItem.acountState"size="small">
                <Option value="active">正常</Option>
                <Option value="blocked">冻结</Option>
              </Select>
            </FormItem>
            </Col>
          </Row>
          <Row>
            <!-- TODO: 后面的选择器要禁用前面选择器日期之前的日期 或者直接使用组件提供的dateRange -->
            <Col span="6">
            <FormItem label="账户注册时间（始）：" :label-width="150">
              <DatePicker type="date" v-model="formItem.startDate" :options="optionsTest" size="small"></DatePicker>
            </FormItem>
            </Col>
            <Col span="6" offset="1">
            <FormItem label="账户注册时间（止）：" :label-width="150">
              <DatePicker type="date" v-model="formItem.endDate" :options="optionsTest1" size="small"></DatePicker>
            </FormItem>
            </Col>
            <Col span="9" offset="1" style="text-align: right">
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
        <!-- 添加新账号 -->
        <!-- <Button type="primary">新增模板</Button> -->
        <AddUser></AddUser>
        <UserDetail :detailShow="detailShow"  v-if="detailShow" @hideUserDetailModal="hideUserDetailModal"></UserDetail>
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
import AddUser from './components/AddUser'
import UserDetail from './components/UserDetail'
export default {
  components: {
    AddUser,
    UserDetail
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
          // columns设置 表头
          {
            title: "用户类型",
            key: "contractNo"
          },
          {
            title: "用户姓名",
            key: "ownerName"
          },
          {
            title: "注册手机号",
            key: "representative"
          },
          {
            title: "宝宝年龄",
            key: "representativePhone"
          },
          {
            title: "宝宝性别",
            key: "collaborateModel"
          },
          {
            title: "注册时间",
            key: "shopName"
          },
          {
            title: "注册来源",
            key: "startDate"
          },
          {
            title: "储值卡数量",
            key: "endDate"
          },
          {
            title: "储值卡金额",
            key: "contractNO"
          },
          {
            title: "会员归属",
            width: 140,
            key: "saler"
          },
          {
            title: "用户状态",
            key: "saler"
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
                          this.showUserDetailModal()
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
    showUserDetailModal() {
      this.detailShow = true;
    },
    hideUserDetailModal() {
      this.detailShow = false;
    }
  }
};
</script>

