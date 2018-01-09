<style lang="less" scoped>
.row-item {
  line-height: 30px;
}
.purchase-history,
.action-log {
  padding: 20px;
}
.title {
  margin-bottom: 20px;
}
</style>
<template>
  <div class="contract-details">
    <Modal title="订单详情" v-model="showOrderDetailShow" @on-visible-change="modalVisibleChange" @on-ok="ok" @on-cancel="cancel" width="60%" :styles="{marginBottom: '100px'}">
      <Row class="row-item">
        <Col span="6">
        <Row>
          <Col span="8">订单编号：</Col>
          <Col span="10">001010000009821</Col>
        </Row>
        </Col>
        <Col span="6">
        <Row>
          <Col span="8">订单状态：</Col>
          <Col span="10">服务中</Col>
        </Row>
        </Col>
      </Row>
      <Row class="row-item">
        <Col span="6">
        <Row>
          <Col span="8">商户名称：</Col>
          <Col span="16">梦思彤汽车大世界</Col>
        </Row>
        </Col>
      </Row>
      <Row class="row-item">
        <Col span="4">
        <Row>
          <Col span="11">商品名称：</Col>
          <Col span="12">儿童大世界</Col>
        </Row>
        </Col>
        <Col span="3">
        <Row>
          <Col span="11">卡类型：</Col>
          <Col span="12">单次卡</Col>
        </Row>
        </Col>
        <Col span="3">
        <Row>
          <Col span="14">商品单价：</Col>
          <Col span="10">10元</Col>
        </Row>
        </Col>
        <Col span="3">
        <Row>
          <Col span="14">购买数量：</Col>
          <Col span="10">10</Col>
        </Row>
        </Col>
        <Col span="3">
        <Row>
          <Col span="14">商品总价：</Col>
          <Col span="10">100元</Col>
        </Row>
        </Col>
        <Col span="3">
        <Row>
          <Col span="14">实际支付：</Col>
          <Col span="10">100元</Col>
        </Row>
        </Col>
      </Row>
      <Row class="row-item">
        <Col span="6">
        <Row>
          <Col span="8">购买用户：</Col>
          <Col span="16">令狐冲</Col>
        </Row>
        </Col>
        <Col span="6">
        <Row>
          <Col span="9">用户手机号：</Col>
          <Col span="15">13878987654</Col>
        </Row>
        </Col>
      </Row>
      <Row class="row-item">
        <Col span="4">
        <Row>
          <Col span="11">支付方式：</Col>
          <Col span="10">微信网页</Col>
        </Row>
        </Col>
        <Col span="6">
        <Row>
          <Col span="8">下单时间：</Col>
          <Col span="15">2017年7月21日16:23:09</Col>
        </Row>
        </Col>
        <Col span="6" offset="1">
        <Row>
          <Col span="8">支付时间：</Col>
          <Col span="15">2017年7月21日16:23:09</Col>
        </Row>
        </Col>
      </Row>
      <Row class="row-item">
        <Col span="6">
        <Row>
          <Col span="10">剩余可用次数：</Col>
          <Col span="8">5</Col>
        </Row>
        </Col>
        <Col span="6">
        <Row>
          <Col span="10">订单剩余金额：</Col>
          <Col span="8">50元</Col>
        </Row>
        </Col>
      </Row>
      <Row class="row-item">
        <Col span="6">
        <Row>
          <Col span="13">中止关联订单编号：</Col>
          <Col span="8">001010000012821</Col>
        </Row>
        </Col>
      </Row>
      <hr style="margin: 30px 0;">
      <div class="purchase-history">
        <Row class="title">
          <Col span="24">订单消费记录：</Col>
        </Row>
        <Table :columns="purchaseHistoryInfo" :data="purchaseHistoryData" border></Table>
      </div>
      <div class="action-log">
        <Row class="title">
          <Col span="24">操作日志：</Col>
        </Row>
        <Table :columns="operationColumns" :data="operationLog" border></Table>
      </div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" size="large" style="width:100px;">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    detailShow: Boolean,
    hideOrderDetailModal: Function
  },
  data() {
    return {
      showOrderDetailShow: this.detailShow,
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
      purchaseHistoryInfo: [
        {
          title: "消费时间",
          align: "center",
          key: "purchaseTime"
        },
        {
          title: "消费地点",
          align: "center",
          key: "purchasePlace"
        },
        {
          title: "消费次数/金额",
          align: "center",
          key: "purchaseMoney"
        },
        {
          title: "剩余次数/金额",
          align: "center",
          key: "remainMoney"
        },
        {
          title: "操作类型",
          align: "center",
          key: "actionType"
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
      this.$emit("hideOrderDetailModal"); // 关闭弹窗
    },
    cancel() {
      // 取消
      console.log("取消");
    },
    ok() {
      // 确定
      console.log("ok");
    }
  }
};
</script>

