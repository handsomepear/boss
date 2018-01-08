<style lang="less" scoped>
.msg {
  font-size: 10px;
}
.id-card-img,
.business-license-img {
  width: 100%;
  height: 100px;
  img {
    display: block;
    margin: 0 auto;
    width: 160px;
    height: 100px;
  }
}
.video-label {
  margin: 24px 0;
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
.scope-item {
  font-size: 11px;
}
</style>


<template>
  <div class="add-store">
    <Button type="primary" @click="showAddEnterModal">新增店铺</Button>
    <!-- 添加员工账号 -->
    <Modal v-model="addEnter" title="新增店铺" width="60%" :styles="{marginBottom: '100px'}" @on-ok="ok" @on-cancel="cancel">
      <Form :label-width="110" label-position="left">
        <FormItem label="※ 合同编号：">
          <Row>
            <Col span="4">
            <Input v-model="phone" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">请输入合同编号数字。如该合同下已有商户，新增商户将默认是其连锁商户</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 入驻人姓名：">
          <Row>
            <Col span="18" offset="1">
            <span class="msg">{{fullname}}</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 店铺名称：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">允许汉字、英文字母、数字或特殊符号，最长不可超过30个字符</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 店铺联系方式：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只允许数字，可填写店铺座机或负责人手机号，用于展示给用户以便联系。暂不支持非大陆手机号</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 商户业态：">
          <Row>
            <Col span="4">
            <Select size="small" transfer>
              <Option value="beijing">CRM</Option>
              <Option value="beijing">团购代销</Option>
            </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 销售人员：">
          <Row>
            <Col span="18" offset="1">
            <span class="msg">{{fullname}}</span>
            </Col>
          </Row>
        </FormItem>
        <hr style="margin-bottom:24px;">
        <FormItem label="※ 归属城市：">
          <Row>
            <Col span="3">
            <Select size="small" transfer>
              <Option value="one">北京</Option>
            </Select>
            </Col>
            <Col span="16" offset="1">
            <span class="msg signing-time">合同期自2017年8月1日 至 2018年7月31日</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 经营范围：">
          <span class="msg">可勾选该店铺涉及的多项经营内容</span>
          <CheckboxGroup v-model="role" size="small">
            <Checkbox label="SE">
              <span class="scope-item">室内乐园</span>
            </Checkbox>
            <Checkbox label="SM">
              <span class="scope-item">手工DIY</span>
            </Checkbox>
            <Checkbox label="FEPM">
              <span class="scope-item">其它</span>
            </Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="※ 店铺地址：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="text" size="small" />
            </Col>
            <Col span="8" offset="1">
            <span class="msg">允许汉字、英文字母、数字或特殊符号，最长不可超过50个字符</span>
            </Col>
            <Col span="4" offset="1">
            <Button type="primary" style="padding: 0 10px">地图定位</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 店铺介绍：">
          <Row>
            <Col span="24">
            <span class="msg">允许输入汉字+英文字母+数字+符号，长度不可超过500个字</span>
            </Col>
            <Col span="22">
            <Input type="textarea" :rows="2" />
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 营业时间：">
          <Row>
            <Col span="24">
            <span class="msg">该商户日常营业时间，允许汉字+英文字母+数字+符号，长度不可超过200字</span>
            </Col>
            <Col span="22">
            <Input type="textarea" :rows="2" />
            </Col>
          </Row>
        </FormItem>
        <FormItem label="介绍视频：">
          <br>
          <Row>
            <Col span="2">视频链接：</Col>
            <Col span="16">
            <Input v-model="email" type="text" size="small" placeholder="请输入视频链接" />
            </Col>
            <Col span="4" offset="1">
            <Button type="primary" style="padding: 0 10px">视频预览</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 店铺展示图：" :label-width="140">
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
