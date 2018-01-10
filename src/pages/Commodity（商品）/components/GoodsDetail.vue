<style lang="less" scoped>
.id-card-img,
.business-license-img {
  width: 100%;
  height: 100px;
  img {
    display: block;
    margin: 0 auto;
    width: 160px;
    height: 100px;
  }
}
.lh40 {
  line-height: 30px;
}
.img-title {
  text-align: center;
  line-height: 40px;
}
</style>
<template>
  <div class="contract-details">
    <Modal title="详情" v-model="showContractDetailsModal" @on-visible-change="modalVisibleChange" @on-ok="ok" @on-cancel="cancel" width="60%" :styles="{marginBottom: isCheck ? '100px' : '0'}">
      <Row>
        <Col span="12" style="border-right: 1px solid #aaa;">
        <Row class="lh40">
          <Col span="6">合同编号：</Col>
          <Col span="16">{{contractInfo.contractNo}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">店铺名称：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">商品名称：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">商品分类：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">商品类型：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">卡类型：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">可被储值卡购买：</Col>
          <Col span="16">{{contractInfo.shopAddress}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">商品有效期：</Col>
          <Col span="16">{{contractInfo.shopAddress}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">商户结算：</Col>
          <Col span="16">{{contractInfo.shopAddress}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">商品库存：</Col>
          <Col span="16">{{contractInfo.shopAddress}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">商品展示期：</Col>
          <Col span="16">{{contractInfo.shopAddress}}</Col>
        </Row>
        </Col>
        <Col span="11" offset="1">
        <!--TODO 这里的详情页面先不写 可能会改需求 -->
        <Row>
          <Button type="error">此处待编辑</Button>
        </Row>
        </Col>
      </Row>
      <hr style="margin: 20px 0;">

      <Row class="lh40" v-if="isCheck">
        <Col span="24">※ 审核意见：</Col>
        <Col span="20" offset="2">
        <Input type="textarea" :rows="3" />
        </Col>
      </Row>
      <Row class="lh40">
        <Col span="24">操作日志：</Col>
        <Col span="20" offset="2">
        <Table :columns="operationColumns" :data="operationLog" border></Table>
        </Col>
      </Row>
      <div slot="footer" style="text-align: center" v-if="isCheck">
        <Button type="primary">转销售</Button>
        <Button type="primary">转编辑</Button>
        <Button type="primary">通过</Button>
        <Button type="primary">驳回</Button>
      </div>
      <div slot="footer" style="text-align: center" v-else>
        <Button type="primary" style="width:100px;">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    detailShow: Boolean,
    isCheck: Boolean,
    hideGoodsDetailModal: Function
  },
  data() {
    return {
      showContractDetailsModal: this.detailShow,
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
      serviceInfo: [
        {
          title: "购买服务商品",
          key: "goods"
        },
        {
          title: "服务开始日期",
          key: "startTime"
        },
        {
          title: "服务结束日期",
          key: "endTime"
        },
        {
          title: "购买数量",
          key: "num"
        },
        {
          title: "支付费用",
          key: "expense"
        }
      ],
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
      this.$emit("hideGoodsDetailModal"); // 关闭弹窗
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

