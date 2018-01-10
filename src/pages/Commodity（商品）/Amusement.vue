<style scoped>

</style>
<template>
  <div class="contract-list">
    <div class="contract-top">
      <Card>
        <Form :label-width="90" ref="contractForm" v-model="formItem" label-position="left">
          <Row>
            <Col span="5">
            <FormItem label="SPUID：">
              <Input type="text" placeholder="可输入部分编号数字" v-model="formItem.staffName" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="SKUID：">
              <Input type="text" placeholder="可输入部分编号数字" v-model="formItem.staffPhone" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="商品名称：">
              <Input type="text" v-model="formItem.roleName" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="库存：">
              <Input type="text" placeholder="小于等于该数字的商品" v-model="formItem.roleName" size="small" />
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
            <FormItem label="创建人：">
              <Input type="text" placeholder="可输入部分号码数字" v-model="formItem.leaderName" size="small" />
            </FormItem>
            </Col>
            <Col span="5" offset="1">
            <FormItem label="编辑人：">
              <Input type="text" placeholder="可输入部分号码数字" v-model="formItem.leaderName" size="small" />
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="4">
            <FormItem label="卡类型：">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="1">单次卡</Option>
                <Option value="2">多次卡</Option>
                <Option value="2">储值卡</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="商品状态：">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="11">待编辑</Option>
                <Option value="11">待精编</Option>
                <Option value="11">待审查</Option>
                <Option value="12">待上架</Option>
                <Option value="12">在线</Option>
                <Option value="13">驳回</Option>
                <Option value="14">临时下架</Option>
                <Option value="15">服务到期</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="商品变更来源：" :label-width="100">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="active">BOSS</Option>
                <Option value="blocked">商户端</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="4" offset="1">
            <FormItem label="商品类型：">
              <Select placeholder="请选择" v-model="formItem.acountState" size="small">
                <Option value="active">CRM商品</Option>
                <Option value="blocked">团购代销商品</Option>
              </Select>
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="22" offset="1" style="text-align:right">
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
        <!-- 新增店铺 -->
        <AddGoods></AddGoods>
        <GoodsDetail :detailShow="detailShow" v-if="detailShow" @hideGoodsDetailModal="hideGoodsDetailModal" :isCheck="isCheck"></GoodsDetail>
        <div class="table-con" style="text-align: right">
          <!-- 分页插件和表格内容显示 -->
          <Page :total="table.totalPage" show-sizer :page-size="table.pageSize" :page-size-opts="table.pageSizeOpts"></Page>
          <Table border :columns="table.staffAcounts" :data="table.staffData" style="margin: 20px 0"></Table>
          <!-- 如何把两个page组件关联起来？ -->
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import AddGoods from "./components/AddGoods";
import GoodsDetail from "./components/GoodsDetail";
export default {
  components: {
    AddGoods,
    GoodsDetail
  },
  data() {
    return {
      detailShow: false,
      isCheck: false,
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
            title: "SPUID",
            key: "contractNo"
          },
          {
            title: "SKUID",
            key: "ownerName"
          },
          {
            title: "店铺名称",
            key: "representative"
          },
          {
            title: "商品名称",
            key: "representativePhone"
          },
          {
            title: "商品类型",
            key: "collaborateModel"
          },
          {
            title: "卡类型",
            key: "shopName"
          },
          {
            title: "售价",
            key: "startDate"
          },
          {
            title: "库存",
            key: "endDate"
          },
          {
            title: "商品状态",
            key: "contractNO"
          },
          {
            title: "商品变更来源",
            key: "saler"
          },
          {
            title: "创建人",
            key: "saler"
          },
          {
            title: "编辑人",
            key: "saler"
          },
          {
            title: "操作",
            key: "action",
            width: 250,
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
                          this.showGoodsCheckModal();
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
                    "临时下架"
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
                          this.showGoodsDetailModal();
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
    showGoodsDetailModal() {
      this.detailShow = true;
    },
    hideGoodsDetailModal() {
      this.isCheck = false;
      this.detailShow = false;
    },
    showGoodsCheckModal(){
      this.isCheck = true;
      this.detailShow = true;
    }
  }
};
</script>

