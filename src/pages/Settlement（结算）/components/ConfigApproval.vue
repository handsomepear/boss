<style lang="less" scoped>
.msg {
  font-size: 10px;
}
.sconfig-approval-con {
  min-height: 500px;
}
</style>


<template>
  <div class="config-approval">
    <Button type="primary" @click="showAddCountModal">配置审批流</Button>
    <!-- 注册用户 -->
    <Modal v-model="addCount" title="配置审批流" width="60%" @on-ok="ok" @on-cancel="cancel" :styles="{marginBottom: '100px'}">
      <div class="config-approval-con">
        <Form :label-width="110" label-position="right">
          <FormItem label="商户确认人：">
            <Row>
              <Col span="3"> 
                <Input size="small" />
              </Col>
              <Col span="20" offset="1">
                <span class="msg">必须填写系统已有的员工账号。一旦填写，所有结算单此账号都可进行确认，默认商户自己账号和对应销售人员账号也可进行一级确认审批</span>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="经理确认人：">
            <Row>
              <Col span="3"> 
                <Input size="small" />
              </Col>
              <Col span="20" offset="1">
                <span class="msg">必须填写系统已有的员工账号。一旦修改，所有结算单该账号都可进行经理级确认，默认商户销售人员的直属经理也可进行经理级确认</span>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="总监确认人：">
            <Row>
              <Col span="3"> 
                <Input size="small" />
              </Col>
              <Col span="20" offset="1">
                <span class="msg">必须填写系统已有的员工账号。一旦修改，所有结算单该账号都可进行总监级确认，默认商户销售人员的直属总监也可进行总监级确认</span>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="※ 副总确认人：">
            <Row>
              <Col span="3"> 
                <Input size="small" />
              </Col>
              <Col span="20" offset="1">
                <span class="msg">如需修改，必须填写系统已有的员工账号。一旦修改，所有结算单只能该账号进行副总级确认</span>
              </Col>
            </Row>
          </FormItem>
           <FormItem label="※ 总经理确认人：">
            <Row>
              <Col span="3"> 
                <Input size="small" />
              </Col>
              <Col span="20" offset="1">
                <span class="msg">如需修改，必须填写系统已有的员工账号。一旦修改，所有结算单只能该账号进行总经理级确认</span>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" style="margin-right: 50px">确认</Button>
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

