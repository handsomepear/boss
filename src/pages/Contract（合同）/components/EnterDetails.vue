<style lang="less" scoped>
.id-card-img,
.business-license-img {
  width: 100%;
  height: 100px;
  img {
    display: block;
    margin: 0 auto;
    width: 180px;
    height: 100px;
  }
}
.img-title {
    text-align: center;
    line-height: 40px;
  }
</style>
<template>
  <div class="enter-details">
    <Modal title="详情" v-model="showEnterDetailsModal" @on-visible-change="modalVisibleChange" @on-ok="ok" @on-cancel="cancel" width="60%" :styles="{marginBottom: isCheck ? '100px': '0'}">
      <Row style="line-height: 40px;">
        <Col span="3">入驻人姓名：</Col>
        <Col span="16" offset="2">{{enterInfo.name}}</Col>
      </Row>
      <Row style="line-height: 40px;">
        <Col span="3">入驻人手机：</Col>
        <Col span="16" offset="2">{{enterInfo.phone}}</Col>
      </Row>
      <Row style="line-height: 40px;">
        <Col span="3">店铺名称：</Col>
        <Col span="16" offset="2">{{enterInfo.shopAddress}}</Col>
      </Row>
      <Row style="line-height: 40px;">
        <Col span="3">店铺联系方式：</Col>
        <Col span="16" offset="2">{{enterInfo.shopTel}}</Col>
      </Row>
      <Row style="line-height: 40px;">
        <Col span="3">经营范围：</Col>
        <Col span="16" offset="2">{{enterInfo.area.join('、')}}</Col>
      </Row>
      <Row style="line-height: 40px;">
        <Col span="24">责任人身份证照片：</Col>
        <!-- 正面照 -->
        <Col span="6" offset="2">
        <div class="id-card-img">
          <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar" alt="">
        </div>
        <p class="img-title">正面照</p>
        </Col>
        <!-- 背面照 -->
        <Col span="6" offset="2">
        <div class="id-card-img">
          <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar" alt="">
        </div>
        <p class="img-title">背面照</p>
        </Col>
      </Row>
      <Row style="line-height: 40px;">
        <Col span="24">营业执照照片：</Col>
        <!-- 营业执照 -->
        <Col span="6" offset="2">
        <div class="business-license-img">
          <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar" alt="">
        </div>
        </Col>
      </Row>
      <Form v-if="isCheck">
        <Row style="line-height: 40px;">
          <Col span="24">※ 审核意见：</Col>
          <!-- 营业执照 -->
          <Col span="20" offset="2">
          <FormItem>
            <Input type="textarea" v-model="enterInfo.checkIdea" size="small"/>
          </FormItem>
          </Col>
        </Row>
      </Form>
      <Row style="line-height: 40px;">
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
    hideEnterDetailsModal: Function
  },
  data() {
    return {
      showEnterDetailsModal: this.detailsShow,
      enterInfo: {
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
      this.$emit("hideEnterDetailsModal");
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

