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
.avatar {
  width: 100%;
  height: 100px;

  img {
    margin: 0 auto;
    display: block;
    width: 100px;
    height: 100px;
  }
}
</style>


<template>
  <div class="add-count">
    <Button type="primary" @click="showAddCountModal">注册用户</Button>
    <!-- 注册用户 -->
    <Modal v-model="addCount" title="注册用户" width="60%" @on-ok="ok" @on-cancel="cancel" :styles="{marginBottom: '100px'}">
      <Form :label-width="95" label-position="left">
        <FormItem label="※ 用户类型：">
          <Row>
            <Col span="4">
            <Select placeholder="请选择" size="small">
              <Option value=""普通用户</Option>
              <Option value="">虚拟用户</Option>
            </Select>
            </Col>
            <Col span="16" offset="1">
            <span class="msg">如用于后台测试用途的用户账号，请选择创建“虚拟用户”类型，此类型用户不做手机号合规验证</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 用户头像：">
          <Row>
            <Col span="3">
            <div class="avatar">
              <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar">
            </div>
            <Upload action="" style="text-align: center">
              <Button size="small" style="font-size:10px;margin-top:10px;">上传照片</Button>
            </Upload>
            </Col>
            <Col span="18" offset="1">
            <span class="msg">仅接受JPG/JPEG/BMP/PNG格式，照片尺寸不可超过10M</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 用户姓名：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="email" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">允许汉字+英文字母+数字+特殊字符，长度不可超过20个字</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 用户手机号：">
          <Row>
            <Col span="4">
            <Input size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许11位数字，请填写真实手机号，以便登录接收系统验证码短信。暂不支持非大陆手机号</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 登录名：">
          <Row>
            <Col span="4">
            <Input type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许英文字符、数字，建议采用员工姓名拼音作为登录名</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="微信ID：">
          <Row>
            <Col span="4">
            <Input type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">对应第三方平台ID在妈妈生活圈平台的行为，将直接绑定至该手机号对应账户下，但只能通过该手机号登录查看</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="微博ID：">
          <Row>
            <Col span="4">
            <Input type="text" size="small" />
            </Col>
          </Row>
        </FormItem>
        <FormItem label="QQ ID：">
          <Row>
            <Col span="4">
            <Input type="text" size="small" />
            </Col>
          </Row>
        </FormItem>
        <FormItem label="支付宝ID：">
          <Row>
            <Col span="4">
            <Input type="text" size="small" />
            </Col>
          </Row>
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

