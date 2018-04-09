<style scoped>

.label {
  line-height: 24px;
}
.row-item {
  line-height: 40px;
}
</style>


<template>
  <div class="change-saler">
    <Modal title="销售人员变更" v-model="showChangeSalerModal" @on-visible-change="modalVisibleChange" width="500px" :styles="{marginBottom: '100px'}">
      <Row class="row-item">
        <Col span="5">当前销售人员：</Col>
        <Col span="2">车维</Col>
      </Row>
      <Row class="row-item">
        <Col span="6"><span class="label">※ 变更后销售人员：</span></Col>
        <Col span="10 ">
        <Input size="small" placeholder="请输入变更销售人员登录名" />
        </Col>
      </Row>
      <div slot="footer">
        <Button type="primary" style="margin-right: 20px">变更</Button>
        <Button type="primary" >取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    modalsShow: Boolean,
    hideChangeSalerModal: Function
  },
  data() {
    return {
      showChangeSalerModal: this.modalsShow,
    };
  },
  methods: {
    modalVisibleChange() {
      this.$emit("hideChangeSalerModal"); // 关闭弹窗
    }
  }
};
</script>
