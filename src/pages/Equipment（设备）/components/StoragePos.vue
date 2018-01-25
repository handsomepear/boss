<style lang="less" scoped>
.msg {
  font-size: 10px;
}
.storage-pos-con {
  min-height: 500px;
}
</style>


<template>
  <div class="storage-pos">
    <Button type="primary" @click="showAddCountModal">入库POS</Button>
    <!-- 注册用户 -->
    <Modal v-model="addCount" title="入库POS" width="60%" @on-ok="ok" @on-cancel="cancel" :styles="{marginBottom: '100px'}">
      <div class="storage-pos-con">
        <Form :label-width="95" label-position="left">
          <FormItem label="POS编号：">
            <Row>
              <Col span="3"> 待自动生成
              </Col>

            </Row>
          </FormItem>
          <FormItem label="※ 供货商：">
            <Row>
              <Col span="4">
              <Select placeholder="请选择" size="small" transfer>
                <Option value="">世麦科技</Option>
                <Option value="">旺POS</Option>
                <Option value="">新大陆</Option>
                <Option value="">联迪科技</Option>
              </Select>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="※ SN串号：">
            <Row>
              <Col span="4">
              <Input size="small" />
              </Col>
              <Col span="16" offset="1">
              <span class="msg">请录入POS设备背面标识该设备的SN串号，允许字符、数字和字母，长度不可超过50个字</span>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" style="margin-right: 50px">入库</Button>
        <Button type="primary">取消</Button>
      </div>
    </Modal>
  </div>

</template>


<script>
export default {
  data() {
    return {
      addCount: false,
      fullname: "",
      phone: "",
      email: "",
      leader: "",
      username: "",
      role: [] // 角色
    };
  },
  methods: {
    // 弹出新增账号页面
    showAddCountModal() {
      this.addCount = true;
    },
    // modal确定按钮的事件方法
    ok() {
      alert("ok");
    },
    // modal 取消按钮的事件方法
    cancel() {
      alert("cancel");
    }
  }
};
</script>

