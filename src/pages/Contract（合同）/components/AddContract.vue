<style lang="less" scoped>
.msg {
  font-size: 10px;
}

.signing-time {
  color: blue;
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
.id-card-img,
.business-license-img {
  width: 100%;
  height: 100px;
  img {
    display: block;
    margin: 0 auto;
    width: 180px;
    height: 100px;
  }
}
.photoname {
  margin-bottom: 10px;
}
.img-title {
  text-align: center;
  line-height: 40px;
}
</style>


<template>
  <div class="add-count">
    <Button type="primary" @click="showAddEnterModal">新增合同</Button>
    <!-- 添加员工账号 -->
    <Modal v-model="addEnter" title="新增合同" width="60%" @on-ok="ok" @on-cancel="cancel">
      <Form :label-width="110" label-position="left">
        <FormItem label="合同编号：">
          <Row>
            <Col span="16" offset="1">
            <span class="msg">合同提交后将自动生成</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 入驻人手机号：">
          <Row>
            <Col span="4">
            <Input v-model="phone" size="small" />
            </Col>
            <Col span="18" offset="1">
            <span class="msg">只允许11位数字，请填写该入驻人手机号，否则无法带出相关审核信息，更无法提交合同</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 甲方名称：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">允许汉字、英文字母、数字或特殊符号，最长不可超过30个字符</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 代表人：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许汉字或英文字母，必须输入代表人的真实姓名，最长不可超过10个字符</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 代表人手机号：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许11位数字，请填写该合同代表人可联系手机号，以便平台联系，加速审核。暂不支持非大陆手机号</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 合作模式：">
          <Row>
            <Col span="3">
            <Select size="small">
              <Option value="beijing">机构合作</Option>
              <Option value="beijing">个人合作</Option>
            </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 店铺名称：">
          <Row>
            <Col span="4">
            <Input v-model="username" type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">允许汉字、英文字母、数字或特殊符号，最长不可超过30个字符</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 合同开始日期：">
          <DatePicker type="date" v-model="contractStartDate" size="small"></DatePicker>
        </FormItem>
        <FormItem label="※ 签约时长：">
          <Row>
            <Col span="3">
            <Select size="small">
              <Option value="one">一年</Option>
              <Option value="half">半年</Option>
            </Select>
            </Col>
            <Col span="16" offset="1">
            <span class="msg signing-time">合同期自2017年8月1日 至 2018年7月31日</span>
            </Col>
          </Row>
        </FormItem>
        <hr style="margin-bottom: 24px;">
        <FormItem label="※ 银行账户：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许汉字或英文字母，最长不可超过50个字符</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 银行账号：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许数字，最长不可超过30个字符</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 收款银行：">
          <Row>
            <Col span="3">
            <Select size="small">
              <Option value="ICBC">中国工商银行</Option>
              <Option value="half">招商银行</Option>
            </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 开户行全称：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许汉字或英文字母，必须输入收款银行开户行全称，否则可能影响及时收款，最长不可超过50个字符</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 结算周期：">
          <Row>
            <Col span="3">
            <Select size="small">
              <Option value="ICBC">T+1</Option>
              <Option value="ICBC">T+2</Option>
              <Option value="ICBC">T+3</Option>
              <Option value="ICBC">T+4</Option>
              <Option value="ICBC">T+5</Option>
              <Option value="ICBC">T+6</Option>
              <Option value="ICBC">T+7</Option>
            </Select>
            </Col>
          </Row>
        </FormItem>
        <hr style="margin-bottom: 24px;">
        <Row style="margin-bottom: 24px;">
          <Col span="24">经营范围：</Col>
          <Col span="16" offset="1" style="font-size: 10px;margin-top:10px;">{{contract.area.join('、')}}</Col>
        </Row>
        <Row>
          <Col span="16">
          <p class="photoname">责任人身份证照片：</p>
          <!-- 正面照 -->
          <Col span="8" offset="2">
          <div class="id-card-img">
            <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar" alt="">
          </div>
          <p class="img-title">正面照</p>
          </Col>
          <!-- 背面照 -->
          <Col span="8" offset="2">
          <div class="id-card-img">
            <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar" alt="">
          </div>
          <p class="img-title">背面照</p>
          </Col>
          </Col>
          <Col span="8">
          <p class="photoname">营业执照照片：</p>
          <!-- 营业执照 -->
          <Col span="8" offset="2">
          <div class="business-license-img">
            <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar" alt="">
          </div>
          </Col>
          </Col>
        </Row>
        <hr style="margin: 20px 0;">
        <FormItem label="※ 销售人员：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许汉字或英文字母，最长不可超过10个字符。该姓名必须是已经在系统内注册的员工姓名</span>
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
      contractStartDate: "", // 合同开始时间
      show_loading: false,
      file: null,
      address: "",
      addEnter: false,
      fullname: "",
      phone: "",
      email: "",
      leader: "",
      username: "",
      role: [], // 角色
      contract: {
        area: ["室内乐园", "手工DIY", "其它"]
      }
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
      setTimeout(() => {
        this.show_loading = false;
        this.addEnter = false;
        this.$Message.success("提交成功");
      }, 1000);
    },
    // 取消提交
    cancel() {
      alert("cancel");
      this.addEnter = false;
    },
    showImg(res, file) {}
  }
};
</script>
