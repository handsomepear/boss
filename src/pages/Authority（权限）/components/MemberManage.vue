<style lang="less" scoped>

</style>

<template>
  <div class="member-manage">
    <Modal v-model="showMemberManage" title="成员管理" width="60%" @on-visible-change="modalVisibleChange">
      成员管理：一共有 {{ memberCount }} 人
    </Modal>
  </div>
</template>


<script>
export default {
  props: {
    showMemberModal: Boolean, // 控制modal显示隐藏
    memberCount: Number, // 成员数量
    hideMember: Function // 隐藏modal
  },
  data() {
    return {
      showMemberManage: this.showMemberModal
    };
  },
  methods: {
    modalVisibleChange(){
      this.$emit('hideMember');
    },
    cancel(){
      this.$emit('hideMember');
    },
    ok(){
      this.$emit('hideMember');

    }
  }
};
</script>
