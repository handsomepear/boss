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
          <Col span="6">入驻人姓名：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">店铺名称：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">店铺联系方式：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">商户业态：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">销售人员：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">归属城市：</Col>
          <Col span="16">{{contractInfo.shopAddress}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">经营范围：</Col>
          <Col span="16">{{contractInfo.shopAddress}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">店铺地址：</Col>
          <Col span="16">{{contractInfo.shopAddress}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">导航地址：</Col>
          <Col span="16">{{contractInfo.shopAddress}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">营业时间：</Col>
          <Col span="16">{{contractInfo.shopAddress}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">店铺介绍：</Col>
          <Col span="16">{{contractInfo.shopAddress}}</Col>
        </Row>
        </Col>
        <Col span="11" offset="1">
        <Row class="lh40">
          <Col span="23">店铺展示图：</Col>
          <Col span="8" offset="5">
          <div class="business-license-img" style="margin-top:30px">
            <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar" alt="">
          </div>
          </Col>
        </Row>
        <Row class="lh40" style="margin-top: 30px">
          <Col span="23">介绍视频：</Col>
          <Col span="8" offset="3">
          <a href="http://www.baidu.com">http://www.baidu.com</a>
          </Col>
        </Row>
        </Col>
      </Row>
      <hr style="margin: 20px 0;">

      <Row class="lh40" v-if="!isCheck">
        <Col span="24">平台系统服务详情：</Col>
        <Col span="20" offset="2">
        <Table :columns="serviceInfo" :data="operationLog"></Table>
        </Col>
      </Row>

      <Row class="lh40" v-else>
        <Col span="24">※ 审核意见：</Col>
        <Col span="20" offset="2">
        <Input type="textarea" :rows="3" />
        </Col>
      </Row>
      <Row class="lh40">
        <Col span="24">操作日志：</Col>
        <Col span="20" offset="2">
        <Table :columns="operationColumns" :data="operationLog"></Table>
        </Col>
      </Row>
      <div slot="footer" style="text-align: center" v-if="isCheck">
        <Button type="primary" size="large" style="width:100px;">通过</Button>
        <Button type="primary" size="large" style="width:100px;">驳回</Button>
      </div>
      <div slot="footer" style="text-align: center" v-else>
        <Button type="primary" size="large" style="width:100px;">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    detailsShow: Boolean,
    isCheck: Boolean,
    hideContractDetailsModal: Function
  },
  data() {
    return {
      showContractDetailsModal: this.detailsShow,
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
      this.$emit("hideStoreDetailsModal"); // 关闭弹窗
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

