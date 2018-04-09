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
  <div class="store-details">
    <Modal title="详情" v-model="showStoreDetailsModal" @on-visible-change="modalVisibleChange" @on-ok="ok" @on-cancel="cancel" width="60%" :styles="{marginBottom: isCheck ? '100px' : '0'}">
      <Row class="lh40">
        <Col span="3">合同编号：</Col>
        <Col span="12">{{contractInfo.contractNo}}</Col>
      </Row>
      <Row>
        <Col span="12" style="border-right: 1px solid #aaa;">
        <Row class="lh40">
          <Col span="6">入驻人手机号：</Col>
          <Col span="16">{{contractInfo.phone}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">甲方名称：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">代表人：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">代表人手机号：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">合作模式：</Col>
          <Col span="16">{{contractInfo.name}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">店铺名称：</Col>
          <Col span="16">{{contractInfo.shopAddress}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="6">合同起止日期：</Col>
          <Col span="16">{{contractInfo.shopAddress}}</Col>
        </Row>
        </Col>
        <Col span="11" offset="1">
        <Row class="lh40">
          <Col span="7">银行账户：</Col>
          <Col span="16">{{contractInfo.shopTel}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="7">银行账号：</Col>
          <Col span="16">{{contractInfo.shopTel}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="7">收款银行：</Col>
          <Col span="16">{{contractInfo.shopTel}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="7">开户行全称：</Col>
          <Col span="16">{{contractInfo.shopTel}}</Col>
        </Row>
        <Row class="lh40">
          <Col span="7">结算周期：</Col>
          <Col span="16">{{contractInfo.shopTel}}</Col>
        </Row>
        </Col>
      </Row>
      <hr style="margin: 20px 0;">
      <Row class="lh40">
        <Col span="12">经营范围：</Col>
        <Col span="16" offset="2">{{contractInfo.area.join('、')}}</Col>
      </Row>
      <Row class="lh40">
        <Col span="16">
        <p class="photoname">责任人身份证照片：</p>
        <!-- 正面照 -->
        <Col span="8" offset="2">
        <div class="id-card-img">
          <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar" alt="">
        </div>
        <p class="img-title">正面照</p>
        </Col>
        <!-- 背面照 -->
        <Col span="8" offset="2">
        <div class="id-card-img">
          <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar" alt="">
        </div>
        <p class="img-title">背面照</p>
        </Col>
        </Col>
        <Col span="8">
        <p class="photoname">营业执照照片：</p>
        <!-- 营业执照 -->
        <Col span="8" offset="2">
        <div class="business-license-img">
          <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar" alt="">
        </div>
        </Col>
        </Col>
      </Row>
      <Form v-if="isCheck">
        <Row class="lh40">
          <Col span="24">※ 审核意见：</Col>
          <!-- 营业执照 -->
          <Col span="20" offset="2">
          <FormItem>
            <Input type="textarea" v-model="contractInfo.checkIdea" size="small" />
          </FormItem>
          </Col>
        </Row>
      </Form>
      <Row class="lh40">
        <Col span="24">操作日志：</Col>
        <!-- 营业执照 -->
        <Col span="20" offset="2">
        <Table :columns="operationColumns" :data="operationLog"></Table>
        </Col>
      </Row>
      <div slot="footer" style="text-align: center" v-if="isCheck">
        <Button type="primary" size="large" style="width:100px;">通过</Button>
        <Button type="primary" size="large" style="width:100px;">驳回</Button>
      </div>
      <div slot="footer" style="text-align: center" v-else>
        <Button type="primary" size="large" style="width:100px;">确定</Button>
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
      showStoreDetailsModal: this.detailsShow,
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
      this.$emit("hideContractDetailsModal");
    },
    cancel() {
      // 取消
      this.$emit("hideContractDetailsModal");
    },
    ok() {
      // 确定
      this.$emit("hideContractDetailsModal");
      console.log("ok");
    }
  }
};
</script>

