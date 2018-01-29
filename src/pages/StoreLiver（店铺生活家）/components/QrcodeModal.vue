<style>
.qrcode-img {
  text-align: center;
}
</style>

<template>
  <div class="qrcode">
    <Modal v-model="qrCodeShow" title="沧海一声笑狂欢店" width="500px" @on-visible-change="modalVisibleChange">
      <div class="qrcode-img">
        <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar" alt="">
      </div>
      <div slot="footer" style="text-align:center">
        <Button type="primary" @click="saveToLodal" size="small" style="margin-right:40px;">保存二维码到本地</Button>
        <Button @click="cancel" size="small">取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    qrcodeModalShow: Boolean
  },
  data() {
    return {
      qrCodeShow: this.qrcodeModalShow
    };
  },
  methods: {
    /* 保存二维码到本地 */
    saveToLodal() {
      alert("保存二维码到本地");
      this.$emit("hideQrcodeModal");
    },
    cancel() {
      this.$emit("hideQrcodeModal");
    },
    modalVisibleChange() {
      this.$emit("hideQrcodeModal");
    }
  }
};
</script>
