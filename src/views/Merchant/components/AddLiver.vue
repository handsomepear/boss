<style lang="less" scoped>

</style>


<template>
  <div class="add-liver">
    <Button type="primary" @click="showAddLiverModal">新增生活家</Button>
    <!-- 添加员工账号 -->
    <Modal v-model="addLiver" title="新增生活家" width="60%" @on-ok="ok" @on-cancel="cancel" 
    :styles="{marginBottom: '100px'}">
      <Card>新增生活家</Card>
      <div slot="footer" style="text-align: center">
        <Button type="primary" style="margin-right: 60px" @click="ok" :loading="show_loading">提交</Button>
        <Button type="primary" @click="cancel">取消</Button>
      </div>
    </Modal>
  </div>

</template>


<script>
export default {
  data() {
    return {
      show_loading: false,
      addLiver: false,
    };
  },
  methods: {
    // 弹出新增账号页面
    showAddLiverModal() {
      this.addLiver = true;
    },
    // 提交成功
    ok() {
      this.show_loading = true;
      setTimeout( () => {
        this.show_loading = false;
        this.addLiver = false;
        this.$Message.success("提交成功");
      },1000)
    },
    // 取消提交
    cancel() {
      alert("cancel");
      this.addLiver = false;
    },
    
  }
};
</script>

