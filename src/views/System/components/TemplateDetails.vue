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
.lh30 {
  line-height: 30px;
}
</style>
<template>
  <div class="template-details">
    <Modal title="详情" v-model="showTplDetailsModal" @on-visible-change="modalVisibleChange" @on-ok="ok" @on-cancel="cancel" width="60%">
      <Row class="lh30">
        <Col span="3">模板序号：</Col>
        <Col span="16">{{tplInfo.index}}</Col>
      </Row>
      <Row class="lh30">
        <Col span="3"> 模板名称：</Col>
        <Col span="16">{{templateInfo.phone}}</Col>
      </Row>
      <Row class="lh30">
        <Col span="3">适用业态：</Col>
        <Col span="16">{{templateInfo.shopAddress}}</Col>
      </Row>
      <Row class="lh30">
        <Col span="3">适用对象：</Col>
        <Col span="16">{{templateInfo.shopTel}}</Col>
      </Row>
      <Row class="lh30">
        <Col span="3">启用日期：</Col>
        <Col span="16">{{templateInfo.area.join('、')}}</Col>
      </Row>
      <Row class="lh30">
        <Col span="3">创建人：</Col>
        <Col span="16">{{templateInfo.area.join('、')}}</Col>
      </Row>
      <Row class="lh30">
        <Col span="3">创建日期：</Col>
        <Col span="16">{{templateInfo.area.join('、')}}</Col>
      </Row>
      <Row class="lh30">
        <Col span="3">替换模板</Col>
        <Col span="16">{{templateInfo.area.join('、')}}</Col>
      </Row>
      <Row class="lh30">
        <Col span="3">模板签约数：</Col>
        <Col span="16">{{templateInfo.area.join('、')}}</Col>
      </Row>
      <Row class="lh30">
        <Col span="3">模板文件：</Col>
        <!-- TODO：模板文件详情显示 -->
        <Col span="16">注：模板文件还没做</Col>
      </Row>
      <Row class="lh30">
        <Col span="24">操作日志：</Col>
        <!-- 营业执照 -->
        <Col span="20" offset="2">
        <Table :columns="operationColumns" :data="operationLog"></Table>
        </Col>
      </Row>
      <div slot="footer" style="text-align: center">
        <Button type="primary" size="large" style="width:100px;">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    detailsShow: Boolean,
    hideTplDetailsModal: Function,
    // 父组件表格传递过来的params信息
    tplInfo: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      showTplDetailsModal: this.detailsShow,
      templateInfo: {
        tplNo: 7,
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
      this.$emit("hideTplDetailsModal");
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

