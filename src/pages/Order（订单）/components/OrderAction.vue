<style lang="less" scoped>
.row-item {
  line-height: 30px;
}
.title {
  line-height: 50px;
}
.label {
  line-height: 24px;
}
.action-else {
  margin-top: 50px;
}
.action-else-con {
  height: 100px;
}
</style>
<template>
  <div class="order-action">
    <Modal title="订单信息（支付完成）" v-model="showOrderActionModal" @on-visible-change="modalVisibleChange" @on-ok="ok" @on-cancel="cancel" width="60%">
      <!-- 订单信息 -->
      <div class="order-info">
        <Row class="row-item">
          <!-- 订单编号 -->
          <Col span="12">
          <Row>
            <Col span="4">订单编号：</Col>
            <Col span="6">001010000009821</Col>
          </Row>
          </Col>

          <!-- 商品名称 -->
          <Col span="12">
          <Row>
            <Col span="4">商品名称：</Col>
            <Col span="6">儿童大世界</Col>
          </Row>
          </Col>
        </Row>
        <Row class="row-item">
          <Col span="12">
          <Row>
            <Col span="4">卡类型：</Col>
            <Col span="6">单次卡</Col>
          </Row>
          </Col>
          <Col span="12">
          <Row>
            <Col span="4">{{actionType === 'change' ? '店铺名称' : '商户名称'}}</Col>
            <Col span="10">梦思彤汽车大世界</Col>
          </Row>
          </Col>
        </Row>
        <Row class="row-item">
          <Col span="6">
          <Row>
            <Col span="8">商品单价：</Col>
            <Col span="3">10</Col>
          </Row>
          </Col>
          <Col span="6">
          <Row>
            <Col span="8">购买数量：</Col>
            <Col span="3">8</Col>
          </Row>
          </Col>
          <Col span="6">
          <Row>
            <Col span="8">商品总价：</Col>
            <Col span="3">8</Col>
          </Row>
          </Col>
          <Col span="6">
          <Row>
            <Col span="8">实际支付：</Col>
            <Col span="3">8</Col>
          </Row>
          </Col>
          </Col>
        </Row>
        <Row class="row-item">
          <Col span="12">
          <Row>
            <Col span="4">购买用户：</Col>
            <Col span="6">令狐冲</Col>
          </Row>
          </Col>
          <Col span="12">
          <Row>
            <Col span="5">用户手机号：</Col>
            <Col span="10">1381313311331</Col>
          </Row>
          </Col>
        </Row>
        <Row class="row-item">
          <Col span="12">
          <Row>
            <Col span="4">支付方式：</Col>
            <Col span="6">微信网页</Col>
          </Row>
          </Col>
          <Col span="12">
          <Row>
            <Col span="4">下单时间：</Col>
            <Col span="18">下单时间： 2017年7月21日16:23:09</Col>
          </Row>
          </Col>
        </Row>
        <Row class="row-item">
          <Col span="12">
          <Row>
            <Col span="6">剩余可用次数：</Col>
            <Col span="6">5</Col>
          </Row>
          </Col>
          <Col span="12">
          <Row>
            <Col span="6">订单剩余金额：</Col>
            <Col span="10">50</Col>
          </Row>
          </Col>
        </Row>
      </div>
      <!-- 关联用户 -->
      <div class="action-else" v-if="actionType === 'relevance'">
        <h3 class="title">关联用户信息</h3>
        <hr style="margin-bottom:20px">
        <div class="action-else-con">
          <Row>
            <!-- 购买用户 -->
            <Col span="12">
            <Row>
              <Col span="6">
              <span class="label">购买用户：</span>
              </Col>
              <Col span="10">
              <Input size="small" />
              </Col>
            </Row>
            </Col>
            <!-- 用户手机号： -->
            <Col span="12">
            <Row>
              <Col span="6">
              <span class="label">用户手机号：</span>
              </Col>
              <Col span="10">
              <Input size="small" />
              </Col>
            </Row>
            </Col>
          </Row>
        </div>
      </div>
      <!-- 消费确认 -->
      <div class="action-else" v-if="actionType === 'consume'">
        <h3 class="title">消费确认</h3>
        <hr style="margin-bottom:20px">
        <div class="action-else-con">
          <Row>
            <Col span="1" style="text-align: center;">
            <Button size="small" icon="plus" @click="add">
            </Button>
            </Col>
            <Col span="3" style="text-align:center">
            <InputNumber v-model="orderNum" :min="0" size="small" />
            </Col>
            <Col span="1" style="text-align: center;">
            <Button size="small" icon="minus" :disabled="orderNum <=0" @click="substract"></Button>
            </Col>
          </Row>
        </div>
      </div>
      <!-- 更换商品 -->
      <div class="action-else" v-if="actionType === 'change'">
        <h3 class="title">更换商品</h3>
        <hr style="margin-bottom:20px">
        <div class="action-else-con">
          <!-- 购买用户 -->
          <Row>
            <Col span="2">
            <span class="label">SKUID：</span>
            </Col>
            <Col span="8">
            <Input size="small" placeholder="请输入用于更换的商品SKUID" />
            </Col>
          </Row>
          <Row class="row-item">
            <Col span="12">
            <Row>
              <Col span="4">
              <span>商品名称：</span>
              </Col>
              <Col span="10">
              <span>儿童大世界</span>
              </Col>
            </Row>
            </Col>
            <Col span="12">
            <Row>
              <Col span="4">
              <span>店铺名称：</span>
              </Col>
              <Col span="10">
              <span>梦思彤汽车大世界</span>
              </Col>
            </Row>
            </Col>
          </Row>

          <Row class="row-item">
            <Col span="8">
            <Row>
              <Col span="6">
              <span>卡类型：</span>
              </Col>
              <Col span="10">
              <span>儿童大世界</span>
              </Col>
            </Row>
            </Col>
            <Col span="8">
            <Row>
              <Col span="6">
              <span>商品单价：</span>
              </Col>
              <Col span="10">
              <span>梦思彤汽车大世界</span>
              </Col>
            </Row>
            </Col>
            <Col span="8">
            <Row>
              <Col span="6">
              <span>购买数量：</span>
              </Col>
              <Col span="10">
              <span>梦思彤汽车大世界</span>
              </Col>
            </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" style="margin-right:60px">确认</Button>
        <Button type="primary">取消</Button>
      </div>

    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    modalShow: Boolean,
    actionType: String,
    hideOrderActionModal: Function
  },
  data() {
    return {
      orderNum: 0,
      showOrderActionModal: this.modalShow,
      contractInfo: {
        contractNo: 123114351,
        name: "戴佩妮",
        phone: "134****1234",
        shopName: "佩妮小店",
        shopAddress: "北京朝阳区",
        shopTel: "01013374832",
        area: ["儿童乐园", "亲子餐厅", "其它"],
        checkIdea: "" // 审核意见
      },
      // 操作日志表格 tHead
      operationColumns: [
        {
          title: "操作人",
          key: "operator"
        },
        {
          title: "操作前状态",
          key: "beforeState"
        },
        {
          title: "操作后状态",
          key: "afterState"
        },
        {
          title: "操作时间",
          key: "operateTime"
        },
        {
          title: "操作内容",
          key: "operateContent"
        }
      ],
      // 操作日志 tBody
      operationLog: []
    };
  },
  methods: {
    modalVisibleChange() {
      this.$emit("hideOrderActionModal");
    },
    cancel() {
      // 取消
    },
    ok() {
      // 确定
      console.log("ok");
    },
    add() {
      this.orderNum++;
    },
    substract(e) {
      this.orderNum--;
    }
  }
};
</script>

