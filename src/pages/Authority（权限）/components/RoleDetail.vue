<style lang="less" scoped>
.row-item {
  line-height: 30px;
}
.table-con {
  min-height: 500px;
}
</style>
<template>
  <div class="role-details">
    <Modal title="详情" v-model="showUserDetailsModal" @on-visible-change="modalVisibleChange" @on-ok="ok" @on-cancel="cancel" width="60%" :styles="{marginBottom: '100px'}" >
      <Row class="row-item">
        <Col span="3">角色名称：</Col>
        <Col span="16">运维</Col>
      </Row>
      <Row class="row-item">
        <Col span="3">角色权限：</Col>
        <Col span="16">页面标签显示，表示该页面可见；按钮标签显示，表示该按钮可见可操作。</Col>
      </Row>
      <div class="table-con">
        <Table :columns="table.roleInfo" :data="table.roleData" border></Table>
      </div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" size="large" style="width:100px;">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    detailShow: Boolean,
    hideRoleDetailModal: Function
  },
  data() {
    return {
      showUserDetailsModal: this.detailShow,
      table: {
        roleInfo: [
          {
            title: '页面标签',
            width: 200,
            key: 'pageTag'
          },
          {
            title: '按钮标签',
            key: 'btnTag'
          },
        ],
        roleData: [
          {
            pageTag: '角色管理',
            btnTag: ['新增角色','修改','详情'].join('   ')
          },
          {
            pageTag: '员工账号',
            btnTag: ''
          }
        ]
      }
    };
  },
  methods: {
    modalVisibleChange() {
      this.$emit("hideRoleDetailModal");
    },
    cancel() {
      // 取消
      this.$emit("hideRoleDetailModal");
    },
    ok() {
      // 确定
      this.$emit("hideRoleDetailModal");
      console.log("ok");
    }
  }
};
</script>

