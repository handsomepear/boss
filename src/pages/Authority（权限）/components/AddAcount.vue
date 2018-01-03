<style lang="less" scoped>
.msg {
  font-size: 10px;
}
.tips {
  padding-left: 18px;
  margin-bottom: 24px;
}
.role {
  font-size: 10px;
}
</style>


<template>
  <div class="add-count">
    <Button type="primary" @click="showAddCountModal">新增账号</Button>
    <!-- 添加员工账号 -->
    <Modal v-model="addCount" title="新增账号" width="60%" @on-ok="ok" @on-cancel="cancel">
      <Form :label-width="90" label-position="left">
        <FormItem label="※ 员工姓名：">
          <Row>
            <Col span="4">
            <Input v-model="fullname" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许汉字或英文字符，必须输入员工的真实姓名，最长不可超过10个字符</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 员工手机：">
          <Row>
            <Col span="4">
            <Input v-model="phone" />
            </Col>
            <Col span="18" offset="1">
            <span class="msg">只允许11位数字，请填写该员工可联系手机号，以便接收系统通知短信，以及重置密码。暂不支持非大陆手机号</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 员工邮箱：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="email" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许英文字符、数字或特殊符号，请填写该员工公司邮箱地址，以便接收系统通知短信，以及重置密码</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="直属领导：">
          <Row>
            <Col span="4">
            <Select v-model="leader">
              <Option value="方文超">方文超</Option>
              <Option value="费国庆">费国庆</Option>
              <Option value="马丽">马丽</Option>
            </Select>
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只能选择已经在系统中存在账号的员工作为直属领导，非必填项。请真实填写，否则会影响某些功能使用</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 登录名：">
          <Row>
            <Col span="4">
            <Input v-model="username" type="text"/>
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许英文字符、数字，建议采用员工姓名拼音作为登录名</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 分配角色：">
          <br>
          <CheckboxGroup v-model="role" size="small">
            <Checkbox label="SE">
              <span class="role">销售工程师</span>
            </Checkbox>
            <Checkbox label="SM">
              <span class="role">销售经理</span>
            </Checkbox>
            <Checkbox label="FEPM">
              <span class="role">前端产品经理</span>
            </Checkbox>
            <Checkbox label="BEPM">
              <span class="role">后端产品经理</span>
            </Checkbox>
            <Checkbox label="PM">
              <span class="role">产品部经理</span>
            </Checkbox>
            <Checkbox label="RD">
              <span class="role">研发总监</span>
            </Checkbox>
            <Checkbox label="OPE">
              <span class="role">运维工程师</span>
            </Checkbox>
            <Checkbox label="OPM">
              <span class="role">运维经理</span>
            </Checkbox>
            <Checkbox label="QAE">
              <span class="role">测试工程师</span>
            </Checkbox>
            <Checkbox label="QAM">
              <span class="role">测试经理</span>
            </Checkbox>
            <Checkbox label="ACCT">
              <span class="role">会计</span>
            </Checkbox>
            <Checkbox label="CASHIER">
              <span class="role">出纳</span>
            </Checkbox>
          </CheckboxGroup>
        </FormItem>
      </Form>
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
    showAddCountModal(){
      this.addCount = true;
    },
    // modal确定按钮的事件方法
    ok(){
      alert('ok')
    },
    // modal 取消按钮的事件方法
    cancel(){
      alert('cancel')
    }
  }
};
</script>

