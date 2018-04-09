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
.base-info,
.fine-packet-info {
  border: 1px solid #ccc;
  padding: 10px;
  height: 750px;
}
.row {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
  height: 150px;
}
</style>


<template>
  <div class="add-goods">
    <Button type="primary" @click="showAddEnterModal">新增商品</Button>
    <!-- 添加员工账号 -->
    <Modal v-model="addEnter" title="新增商品" width="60%" :styles="{marginBottom: '100px', minWidth: '800px'}" @on-ok="ok" @on-cancel="cancel">
      <Form :label-width="110" label-position="left">
        <FormItem label="复制商品SKUID：">
          <Row>
            <Col span="4">
            <Input v-model="phone" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">只可输入已存在的商品SKUID，或保持为空。默认被复制SKU和新生成SKU关联到同一个SPU下</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 供应商合同：">
          <Row>
            <Col span="4">
            <Input v-model="phone" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">必须填写已在系统存在的合同编号</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 供应商店铺：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">必须填写该合同编号下的店铺名称</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 商品类型：">
          <Row>
            <Col span="4">
            <Select size="small" transfer>
              <Option value="CRM">CRM商品</Option>
              <Option value="CRM">团购代销商品</Option>
            </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 商品名称：">
          <Row>
            <Col span="4">
            <Input v-model="email" type="text" size="small" />
            </Col>
            <Col span="16" offset="1">
            <span class="msg">允许汉字+英文字母+数字+符号，长度不可超过50个字</span>
            </Col>
          </Row>
        </FormItem>
        <!-- tab页 -->
        <Tabs :animated="false" size="small">
          <TabPane label="基础信息">
            <div class="base-info">
              <Row>
                <Col span="4">※ 卡类型：</Col>
                <Col span="3">
                <Select size="small" transfer v-model="cardType">
                  <Option value="single">单次卡</Option>
                  <Option value="more">多次卡</Option>
                  <Option value="Ecard">储值卡</Option>
                </Select>
                </Col>
              </Row>
              <div class="cardtype-con">
                <Row class="row" v-if="cardType === 'single' || cardType === 'more' " key="countCard">
                  <Row style="margin-top: 10px;height: 60px;">
                    <Col>
                    <Checkbox v-model="canUseEcard">该商品可使用储值卡购买</Checkbox>
                    </Col>
                    <Col>
                    <CheckboxGroup style="margin-left:20px; margin-top:20px" v-if="canUseEcard">
                      <Checkbox>店内所有储值卡均可</Checkbox>
                      <Checkbox>2000元储值卡 享5折</Checkbox>
                      <Checkbox>500元储值卡 享7.9折</Checkbox>
                    </CheckboxGroup>
                    </Col>
                  </Row>
                  <Row style="margin-top: 20px" v-if="cardType === 'more'">
                    <Col span="2" style="line-height: 24px">※ 次数：</Col>
                    <Col span="3">
                    <Input type="text" size="small" />
                    </Col>
                    <Col span="10" offset="1">
                    <span class="msg">该商品可用次数，可填写1-1000之间的任意正整数</span>
                    </Col>
                  </Row>
                  </Col>
                </Row>
                <Row class="row" v-else key="saveCard">
                  <Row style="margin-top:20px">
                    <Col span="4" style="line-height: 24px;">储值即赠送</Col>
                    <Col span="3">
                    <InputNumber :min="0" size="small" />
                    </Col>
                    <Col span="1" offset="1" style="line-height: 24px"> 元</Col>
                    <Col span="8">
                    <span class="msg" style="line-height: 24px">只可填写不超过100000的正数</span>
                    </Col>
                  </Row>
                  <Row style="margin-top:30px">
                    <Col span="4" style="line-height: 24px;">该卡消费，享受折扣：</Col>
                    <Col span="3">
                    <Input type="text" size="small" />
                    </Col>
                    <Col span="8" offset="2">
                    <span class="msg" style="line-height: 24px">只可填写0 < X ≤ 1的正数，精度到0.01</span>
                    </Col>
                  </Row>
                </Row>
              </div>
              <Row>
                <Col style="margin: 20px 0">※ 商品有效期：</Col>
                <Col style="margin-left:50px">
                <RadioGroup vertical v-model="goodsExpire" style="width: 100%">
                  <Row>
                    <Col span="3">
                    <Radio label="absolute">
                      <span>绝对值</span>
                    </Radio>
                    </Col>
                    <Col span="20">
                    <Row v-if="goodsExpire === 'absolute'">
                      <Col span="4" style="line-height: 30px">
                      <DatePicker type="date" transfer size="small"></DatePicker>
                      </Col>
                      <Col span="1" style="text-align: center;line-height: 30px;">至</Col>
                      <Col span="4" style="line-height: 30px">
                      <DatePicker type="date" transfer size="small"></DatePicker>
                      </Col>
                      <Col span="12" offset="1" style="line-height: 30px;">
                      <span class="msg">该商品必须在该时间内使用，超出有效期，则不可再用</span>
                      </Col>
                    </Row>
                    </Col>
                  </Row>
                  <Row style="margin-top:15px">
                    <Col span="3">
                    <Radio label="relative">
                      <span>相对值</span>
                    </Radio>
                    </Col>
                    <Col span="20">
                    <Row v-if="goodsExpire === 'relative'">
                      <Col span="4" style="line-height: 30px"> 自购买之日起，
                      </Col>
                      <Col span="4" style="line-height: 30px">
                      <Select size="small">
                        <Option value="1">1个月</Option>
                        <Option value="2">2个月</Option>
                        <Option value="3">3个月</Option>
                        <Option value="4">4个月</Option>
                        <Option value="5">5个月</Option>
                        <Option value="6">6个月</Option>
                        <Option value="7">7个月</Option>
                        <Option value="8">8个月</Option>
                        <Option value="9">9个月</Option>
                        <Option value="10">10个月</Option>
                        <Option value="11">11个月</Option>
                        <Option value="12">12个月</Option>
                        <Option value="13">13个月</Option>
                        <Option value="14">14个月</Option>
                        <Option value="15">15个月</Option>
                        <Option value="16">16个月</Option>
                        <Option value="17">17个月</Option>
                        <Option value="19">18个月</Option>
                        <Option value="19">19个月</Option>
                        <Option value="20">20个月</Option>
                        <Option value="21">21个月</Option>
                        <Option value="22">22个月</Option>
                        <Option value="23">23个月</Option>
                        <Option value="24">24个月</Option>
                      </Select>
                      </Col>
                      <Col span="10" offset="1" style="line-height: 30px;"> 内可使用
                      </Col>
                    </Row>
                    </Col>
                  </Row>
                </RadioGroup>
                </Col>
              </Row>

              <Row style="margin-top: 20px">
                <!-- 商品售价 -->
                <Col span="10">
                <Row>
                  <Col span="6" style="line-height: 24px">※ 商品售价：</Col>
                  <Col span="14">
                  <Input placeholder="不超过100万的非负数，精度0.01" size="small" />
                  </Col>
                </Row>
                </Col>
                <!-- 退款类型 -->
                <Col span="12">
                <Row>
                  <Col span="5" style="line-height: 24px">※ 退款类型：</Col>
                  <Col span="6">
                  <Select size="small" transfer>
                    <Option value="">不可退</Option>
                    <Option value="">未使用退</Option>
                    <Option value="">过期退</Option>
                  </Select>
                  </Col>
                </Row>
                </Col>
              </Row>
              <!-- 商户结算 -->
              <Row>
                <Col style="margin: 20px 0">※ 商户结算：</Col>
                <Col style="margin-left: 50px">
                <RadioGroup vertical v-model="settlement" style="width: 100%">
                  <Row>
                    <Col span="3">
                    <Radio label="fixed">
                      <span>按固定金额结算</span>
                    </Radio>
                    </Col>
                    <Col span="8" offset="1" style="line-height: 30px" v-if="settlement === 'fixed'">
                    <Input size="small" placeholder="不超过100万的非负数，精度0.01" />
                    </Col>
                  </Row>
                  <Row style="margin-top:15px">
                    <Col span="3">
                    <Radio label="percent">
                      <span>按比例结算</span>
                    </Radio>
                    </Col>
                    <Col span="8" offset="1" style="line-height: 30px" v-if="settlement === 'percent'">
                    <Input size="small" placeholder="不超过100万的非负数，精度0.01" />
                    </Col>
                  </Row>
                </RadioGroup>
                </Col>
              </Row>
              <!-- 商品图片 -->
              <Row style="margin-top:20px;">
                <Col style="margin-bottom: 20px">※ 商品图片：</Col>
                <Col span="6" offset="1">
                <div class="upload-photo">
                  <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar">
                </div>
                <Upload action="" style="text-align: center">
                  <Button size="small" style="font-size:10px;margin-top:10px;">上传图一照片</Button>
                </Upload>
                </Col>
                <Col span="6" offset="1">
                <div class="upload-photo">
                  <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar">
                </div>
                <Upload action="" style="text-align: center">
                  <Button size="small" style="font-size:10px;margin-top:10px;">上传图二照片</Button>
                </Upload>
                </Col>
                <Col span="6" offset="1">
                <div class="upload-photo">
                  <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar">
                </div>
                <Upload action="" style="text-align: center">
                  <Button size="small" style="font-size:10px;margin-top:10px;">上传图三照片</Button>
                </Upload>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane label="精包信息">
            <div class="fine-packet-info">
              <!-- 特色 -->
              <Row>
                <Col>※ 特色：允许汉字+英文字母+数字+符号，单行长度不可超过100个字，总字数不可超过500字</Col>
                <!-- 富文本 -->
              </Row>
              <Row>
                <Col>※ 亮点、信息、须知：允许汉字+英文字母+数字+符号+图片，总字数不可超过2000字</Col>
                <!-- 富文本 -->
              </Row>
            </div>
          </TabPane>
        </Tabs>

        <FormItem label="※ 商品库存：">
          <Row>
            <Col span="5">
            <Input v-model="email" type="text" size="small" placeholder="不超过1亿的非负整数" />
            </Col>
            <Col span="3" offset="1">
            <Checkbox>锁定库存</Checkbox>
            </Col>
            <Col span="14" offset="1">
            <span class="msg">锁定库存后，该商品在前台销售无论多少，库存都不会变化，一直处于有货可销售状态</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 商品展示期：">
          <Row>
            <Col span="4">
            <DatePicker type="date" size="small" transfer></DatePicker>
            </Col>
            <Col span="1" style="text-align: center">至</Col>
            <Col span="4">
            <DatePicker type="date" size="small" transfer></DatePicker>
            </Col>
            <Col span="14" offset="1">
            <span class="msg">在该时间段内，该商品将在用户端前台展示可见。起始时间如为空，审核一旦通过将直接上线</span>
            </Col>
          </Row>
        </FormItem>

      </Form>
      <div slot="footer" style="text-align: center">
        <Button type="primary" style="margin-right: 60px" @click="cancel">预览</Button>
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
      goodsExpire: "absolute",
      settlement: "fixed", // 商户结算
      canUseEcard: false,
      cardType: "single",
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
