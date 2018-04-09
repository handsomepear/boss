<style lang="less" scoped>
.row-item {
  line-height: 30px;
}

.title {
  font-weight: normal;
  line-height: 30px;
  text-align: center;
}
.subtitle {
  line-height: 25px;
  border-bottom: 1px solid #ccc;
}
.row-item {
  line-height: 25px;
}
.statement-general {
  margin: 40px 0;
}
.statement-general-con {
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
  p {
    text-align: center;
    line-height: 25px;
  }
  .statement-item {
    border-bottom: 1px solid #aaa;
  }
}
.deal-detail {
  min-height: 600px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>
<template>
  <div class="contract-details">
    <Modal title="结算单详情" v-model="showStatementsModal" @on-visible-change="modalVisibleChange" @on-ok="ok" @on-cancel="cancel" width="60%" :styles="{marginBottom: '100px',minWidth: '900px'}">
      <div class="state-page">
        <h4 class="title">商户结算单（2017年7月22日00:00:00 - 2017年7月23日00:00:00）</h4>
        <!-- 甲方信息 -->
        <div class="owner-info">
            <h4 class="subtitle">甲方信息：</h4>
            <div class="owner-info-con">
              <Row class="row-item">
                <Col span="4">
                  <Row>
                    <Col span="11">合同编号：</Col>
                    <Col span="13">1710987</Col>
                  </Row>
                </Col>
                <Col span="8">
                  <Row>
                    <Col span="6">甲方名称：</Col>
                    <Col span="18">北京元首伟业商务服务有限公司</Col>
                  </Row>
                </Col>
                <Col span="4">
                  <Row>
                    <Col span="11">合作模式：</Col>
                    <Col span="13">机构合作</Col>
                  </Row>
                </Col>
                <Col span="4">
                  <Row>
                    <Col span="11">店铺名称：</Col>
                    <Col span="13">Kitty手工坊</Col>
                  </Row>
                </Col>
              </Row>
              <Row class="row-item">
                <Col span="4">
                  <Row>
                    <Col span="11">银行账户：</Col>
                    <Col span="13">刘伟</Col>
                  </Row>
                </Col>
                <Col span="6">
                  <Row>
                    <Col span="8">银行账号：</Col>
                    <Col span="16">6029693015633247</Col>
                  </Row>
                </Col>
                <Col span="8">
                  <Row>
                    <Col span="7">开户行全称：</Col>
                    <Col span="17">中国工商银行北京分行东城支行</Col>
                  </Row>
                </Col>
                <Col span="4">
                  <Row>
                    <Col span="11">结算周期：</Col>
                    <Col span="13">T+1天</Col>
                  </Row>
                </Col>
              </Row>
            </div>
        </div>
        <!-- 结算单概要 -->
        <div class="statement-general">
          <h4 class="subtitle">结算单概要：</h4>
          <div class="statement-general-con">
            <Row class="statement-item">
              <Col span="3">
                  <p>结算单编号</p>
                  <p>1707239876789</p>
              </Col>
              <Col span="4">
                  <p>出账时间</p>
                  <p>2017年7月23日00:00:00</p>
              </Col>
              <Col span="3">
                  <p>结算订单数</p>
                  <p>11</p>
              </Col>
              <Col span="3">
                  <p>订单总额</p>
                  <p>20000.00</p>
              </Col>
              <Col span="4">
                  <p>当期应出账订单总金额</p>
                  <p>1707239876789</p>
              </Col>
              <Col span="3">
                  <p>当期平台服务费</p>
                  <p>1707239876789</p>
              </Col>
              <Col span="3">
                  <p>当期应结金额</p>
                  <p>20000.00</p>
              </Col>
            </Row>
            <Row>
              <Col offset="13">
                <p>当前推广费</p>
                <p>0.00</p>
              </Col>
            </Row>
          </div>
        </div>
        <!-- 交易明细 -->
        <div class="deal-detail">
          <h4 class="subtitle">交易明细：</h4>
          <div class="deal-detail-con">
            <Table :columns="dealHead" :data="dealData"></Table>
          </div>
        </div>
        <!-- 确认信息 -->
        <div class="confirm">
          <Row>
            <Col span="4">
              <Row>
                <Col span="8">商户确认：</Col>
                <Col span="8">孙全服</Col>
              </Row>
            </Col>
            <Col span="4">
              <Row>
                <Col span="8">经理确认：</Col>
                <Col span="8">孙全服</Col>
              </Row>
            </Col>
            <Col span="4">
              <Row>
                <Col span="8">总监确认：</Col>
                <Col span="8">孙全服</Col>
              </Row>
            </Col>
            <Col span="4">
              <Row>
                <Col span="11">主管副总确认：</Col>
                <Col span="8">孙全服</Col>
              </Row>
            </Col>
            <Col span="4">
              <Row>
                <Col span="10">总经理确认：</Col>
                <Col span="8">孙全服</Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" size="large" style="width:200px;">打印</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    detailShow: Boolean,
    hideStatementsModal: Function
  },
  data() {
    return {
      showStatementsModal: this.detailShow,
      contractInfo: {
        contractNo: 123114351,
        name: "戴佩妮",
        phone: "134****1234",
        shopName: "佩妮小店",
        shopAddress: "北京朝阳区",
        shopTel: "01013374832",
        area: ["儿童乐园", "亲子餐厅", "其它"],
        checkIdea: "" // 审核意见
      },
      dealHead: [
        {
          title: "订单编号",
          align: "center",
          key: "orderNo"
        },
        {
          title: "商品名称",
          align: "center",
          key: "goodsName"
        },
        {
          title: "支付方式",
          align: "center",
          key: "payWay"
        },
        {
          title: "支付时间",
          align: "center",
          key: "payTime"
        },
        {
          title: "支付流水号",
          align: "center",
          key: "payNo"
        },
        {
          title: "原订单金额",
          align: "center",
          key: "originMoney"
        },
        {
          title: "按比例结算",
          align: "center",
          key: "percent"
        },
        {
          title: "按固定金额结算",
          align: "center",
          key: "fixed"
        },
        {
          title: "已结算订单金额",
          align: "center",
          key: "selltedMoney"
        },
        {
          title: "未结算订单金额",
          align: "center",
          key: "notSellteMoney"
        },
        {
          title: "当前应出账订单总额",
          align: "center",
          key: "totalMoney"
        },
        {
          title: "当前平台服务费",
          align: "center",
          key: "serviceMoney"
        },
        {
          title: "当前推广费",
          align: "center",
          key: "promotionMoney"
        },
        {
          title: "当前应结金额",
          align: "center",
          key: "sumMoney"
        }
      ],
      purchaseHistoryData: [],
      // 操作日志表格 tHead
      operationColumns: [
        {
          title: "操作人",
          key: "operator"
        },
        {
          title: "操作前状态",
          key: "beforeState"
        },
        {
          title: "操作后状态",
          key: "afterState"
        },
        {
          title: "操作时间",
          key: "operateTime"
        },
        {
          title: "操作内容",
          key: "operateContent"
        }
      ],
      // 操作日志 tBody
      operationLog: []
    };
  },
  methods: {
    modalVisibleChange() {
      this.$emit("hideStatementsModal"); // 关闭弹窗
    },
    cancel() {
      // 取消  在modalVisibleChange之前触发
    },
    ok() {
      // 确定
    }
  }
};
</script>

