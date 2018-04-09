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
.upload-photo {
  width: 100%;
  height: 100px;

  img {
    margin: 0 auto;
    display: block;
    width: 180px;
    height: 100px;
  }
}
</style>


<template>
  <div class="add-template">
    <Button type="primary" @click="showAddTempModal">新增模板</Button>
    <!-- 添加员工账号 -->
    <Modal v-model="addTemp" title="新增模板" width="60%" @on-ok="ok" @on-cancel="cancel" :styles="{marginBottom: '100px'}">
      <Form :label-width="110" label-position="left">
        <FormItem label="※ 模板名称：">
          <Row>
            <Col span="4">
            <Input v-model="fullname" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">允许汉字、英文字母、数字或特殊符号，最长不可超过30个字符</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 适用场景：">
          <Row>
            <Col span="4">
            <Select size="small" placeholder="请选择" transfer v-model="Adapter">
              <Option value="store">店铺</Option>
              <Option value="liver">生活家</Option>
            </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 适用对象：">
          <Row>
            <Col span="4">
            <Select size="small" placeholder="请选择" transfer>
              <Option value="chaoyang">机构合作</Option>
              <Option value="haidian">个人合作</Option>
            </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 启用日期：">
          <Row>
            <Col span="4">
            <DatePicker type="date" size="small" transfer></DatePicker>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 合同内容：">
          <Row>
            <Col span="23">
              <Input type="textarea" :rows="6" />
            </Col>
          </Row>
        </FormItem>
        <hr style="margin: 24px 0;">
        <FormItem label="※ 上传模板：">
          <Row>
            <Col span="4">
            <Upload action="">
              <Button type="primary" style="padding: 0 20px">上传文件</Button>
            </Upload>
            </Col>
            <Col span="16">
            <span class="msg">只允许上传word格式文档，大小不能超过10M</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 创建人：">
          <Row>
            <Col span="4">
            <Input v-model="creater" size="small" />
            </Col>
          </Row>
        </FormItem>
      </Form>
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
      creater: "",
      Adapter: "",
      show_loading: false,
      file: null,
      address: "",
      addTemp: false,
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
    showAddTempModal() {
      this.addTemp = true;
    },
    // 提交成功
    ok() {
      this.show_loading = true;
      setTimeout(() => {
        this.show_loading = false;
        this.addTemp = false;
        this.$Message.success("提交成功");
      }, 1000);
    },
    // 取消提交
    cancel() {
      alert("cancel");
      this.addTemp = false;
    },
    showImg(res, file) {}
  }
};
</script>

