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
  <div class="add-count">
    <Button type="primary" @click="showAddEnterModal">新增入驻</Button>
    <!-- 添加员工账号 -->
    <Modal v-model="addEnter" title="新增入驻" width="60%" @on-ok="ok" @on-cancel="cancel">
      <Form :label-width="110" label-position="left">
        <FormItem label="※ 入驻人姓名：">
          <Row>
            <Col span="4">
            <Input v-model="fullname" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许汉字或英文字母，必须输入入驻人的真实姓名，最长不可超过10个字符</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 入驻人手机：">
          <Row>
            <Col span="4">
            <Input v-model="phone" />
            </Col>
            <Col span="18" offset="1">
            <span class="msg">只允许11位数字，请填写该入驻人可联系手机号，以便接收系统通知短信，以及重置密码。暂不支持非大陆手机号</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 店铺名称：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="text" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">允许汉字、英文字母、数字或特殊符号，最长不可超过30个字符</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 店铺地址：">
          <Row style="margin-bottom: 24px">
            <Col span="3">
            <Select>
              <Option value="beijing">北京</Option>
            </Select>
            </Col>
            <Col span="3" offset="1">
            <Select placeholder="请选择">
              <Option value="chaoyang">朝阳区</Option>
              <Option value="haidian">海淀区</Option>
              <Option value="changping">昌平区</Option>
              <Option value="xicheng">西城区</Option>
              <Option value="dongcheng">东城区</Option>
            </Select>
            </Col>
          </Row>
          <Row>
            <Col span="10">
            <Input v-model="address" />
            </Col>
            <Col span="12" offset="1">
            <span class="msg">允许汉字、英文字母、数字或特殊符号，最长不可超过50个字符</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 店铺联系方式：">
          <Row>
            <Col span="4">
            <Input v-model="username" type="text" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许数字，可填写店铺座机或负责人手机号，用于展示给用户以便联系。暂不支持非大陆手机号</span>
            </Col>
          </Row>
        </FormItem>
        <br>
        <FormItem label="※ 经营范围：">
          <span class="msg">可勾选该商户涉及的多项经营内容</span>
          <CheckboxGroup v-model="role" size="small">
            <Checkbox label="SE">
              <span class="role">儿童乐园</span>
            </Checkbox>
            <Checkbox label="SM">
              <span class="role">儿童游泳</span>
            </Checkbox>
            <Checkbox label="FEPM">
              <span class="role">主题浏览</span>
            </Checkbox>
            <Checkbox label="BEPM">
              <span class="role">主题活动</span>
            </Checkbox>
            <Checkbox label="PM">
              <span class="role">剧场票务</span>
            </Checkbox>
            <Checkbox label="RD">
              <span class="role">儿童摄影</span>
            </Checkbox>
            <Checkbox label="OPE">
              <span class="role">亲子餐厅</span>
            </Checkbox>
            <Checkbox label="OPM">
              <span class="role">其它</span>
            </Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="※ 责任人身份证照片：" :label-width="140">
          <Row>
            <Col offset='4'>
            <span class="msg">请上传商户责任人身份证照片，不能有任何涂写修改。一旦审核通过，将以该责任人作为商户合约代表</span>
            </Col>
          </Row>
          <br>
          <Row>
            <Col span="6">
            <div class="upload-photo">
              <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar">
            </div>
            <Upload action="" :on-success="showImg" style="text-align: center">
              <Button size="small" style="font-size:10px;margin-top:10px;">上传正面照</Button>
            </Upload>
            </Col>
            <Col span="6" offset="4">
            <div class="upload-photo">
              <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar">
            </div>
            <Upload action="" style="text-align: center">
              <Button size="small" style="font-size:10px;margin-top:10px;">上传背面照</Button>
            </Upload>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="营业执照照片：" :label-width="140">
          <Row>
            <Col offset='4'>
            <span class="msg">请上传商户营业执照照片，允许上传关联商场营业执照代替，不能有任何涂写修改。</span>
            </Col>
          </Row>
          <br>
          <Row>
            <Col span="6">
            <div class="upload-photo">
              <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar">
            </div>
            <Upload action="" style="text-align: center">
              <Button size="small" style="font-size:10px;margin-top:10px;">上传照片</Button>
            </Upload>
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
      show_loading: false,
      file: null,
      address: "",
      addEnter: false,
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
    showAddEnterModal() {
      this.addEnter = true;
    },
    // 提交成功
    ok() {
      this.show_loading = true;
      setTimeout( () => {
        this.show_loading = false;
        this.addEnter = false;
        this.$Message.success("提交成功")
      },1000)
    },
    // 取消提交
    cancel() {
      alert("cancel");
      this.addEnter = false;
    },
    showImg(res, file) {
      
    }
  }
};
</script>

