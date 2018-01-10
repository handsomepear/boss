<style lang="less" scoped>
.avatar {
  width: 100%;
  height: 100px;
  img {
    display: block;
    width: 100px;
    height: 100px;
  }
}
.row-item {
  line-height: 25px;
}
.title {
  line-height: 30px;
}
.base-info-con {
  padding: 0 20px;
}
.table-item {
  padding: 20px;
  border-bottom: 1px dashed #ccc;
  .table-con {
    margin-top: 20px;
  }
}
.action-log {
  margin-top: 50px;
}
</style>
<template>
  <div class="user-details">
    <Modal title="用户信息" v-model="showUserDetailModal" @on-visible-change="modalVisibleChange" @on-ok="ok" @on-cancel="cancel" width="60%" :styles="{marginBottom: '100px'}">
      <!-- 用户基础信息 -->
      <div class="user-base-info">
        <h4 class="title">用户基础信息</h4>
        <hr style="margin-bottom:20px">
        <div class="base-info-con">
          <Row>
            <!-- 其他基本信息 -->
            <Col span="19">
            <Row class="row-item">
              <Col span="7">
              <Row>
                <Col span="8">用户类型：</Col>
                <Col span="10">普通用户</Col>
              </Row>
              </Col>
              <Col span="7">
              <Row>
                <Col span="8">用户状态：</Col>
                <Col span="16">正常</Col>
              </Row>
              </Col>
              <Col span="8">
              <Row>
                <Col span="8">注册时间：</Col>
                <Col span="16">2017年6月23日11:01:09</Col>
              </Row>
              </Col>
            </Row>
            <Row class="row-item">
              <Col span="7">
              <Row>
                <Col span="8">用户姓名：</Col>
                <Col span="10">任盈盈</Col>
              </Row>
              </Col>
              <Col span="7">
              <Row>
                <Col span="10">用户手机号：</Col>
                <Col span="14">1985318578248</Col>
              </Row>
              </Col>
            </Row>
            <Row class="row-item">
              <Col span="5">
              <Row>
                <Col span="8">微信ID：</Col>
                <Col span="10">任盈盈</Col>
              </Row>
              </Col>
              <Col span="6">
              <Row>
                <Col span="8">微博ID：</Col>
                <Col span="10">1985318578248</Col>
              </Row>
              </Col>
              <Col span="6">
              <Row>
                <Col span="8">QQ ID：</Col>
                <Col span="10">1985318578248</Col>
              </Row>
              </Col>
              <Col span="6">
              <Row>
                <Col span="10">支付宝ID：</Col>
                <Col span="10">1985318578248</Col>
              </Row>
              </Col>
            </Row>
            <Row class="row-item">
              <Col>会员归属：</Col>
              <Row style="margin-left:50px">
                <Col span="6">奕彩乐园（惠新东街店）</Col>
                <Col span="6">奕彩乐园（惠新东街店）</Col>
                <Col span="6">奕彩乐园（惠新东街店）</Col>
                <Col span="6">奕彩乐园（惠新东街店）</Col>
                <Col span="6">奕彩乐园（惠新东街店）</Col>
              </Row>
            </Row>
            </Col>
            <!-- 用户头像 -->
            <Col span="4">
            <Row>
              <Col span="12">用户头像：</Col>
              <Col span="12">
              <div class="avatar">
                <img src="https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar">
              </div>
              </Col>
            </Row>
            </Col>
          </Row>
        </div>
      </div>
      <!-- 储值卡信息 -->
      <div class="card-info">
        <h4 class="title">储值卡信息：</h4>
        <hr>
        <div class="card-info-con">
          <div class="table-item">
            <div class="table-title">
              <Row>
                <Col span="6">
                <Row>
                  <Col span="7">商品名称：</Col>
                  <Col span="16">陶之恋白金卡 享5折</Col>
                </Row>
                </Col>
                <Col span="4">
                <Row>
                  <Col span="10">店铺名称：</Col>
                  <Col span="10">陶之恋</Col>
                </Row>
                </Col>
                <Col span="6">
                <Row>
                  <Col span="7">办卡时间：</Col>
                  <Col span="16">2016年7月23日10:08:23</Col>
                </Row>
                </Col>
                <Col span="4">
                <Row>
                  <Col span="10">剩余金额：</Col>
                  <Col span="8">80</Col>
                </Row>
                </Col>
              </Row>
            </div>
            <div class="table-con">
              <Table :columns="cardInfo" :data="cardData" border></Table>
            </div>
          </div>
          <div class="table-item">
            <div class="table-title">
              <Row>
                <Col span="6">
                <Row>
                  <Col span="7">商品名称：</Col>
                  <Col span="16">陶之恋白金卡 享5折</Col>
                </Row>
                </Col>
                <Col span="4">
                <Row>
                  <Col span="10">店铺名称：</Col>
                  <Col span="10">陶之恋</Col>
                </Row>
                </Col>
                <Col span="6">
                <Row>
                  <Col span="7">办卡时间：</Col>
                  <Col span="16">2016年7月23日10:08:23</Col>
                </Row>
                </Col>
                <Col span="4">
                <Row>
                  <Col span="10">剩余金额：</Col>
                  <Col span="8">80</Col>
                </Row>
                </Col>
              </Row>
            </div>
            <div class="table-con">
              <Table :columns="cardInfo" :data="cardData" border></Table>
            </div>
          </div>
        </div>
      </div>
      <!-- 操作日志 -->
      <div class="action-log">
        <Row>
          <Col span="24">操作日志：</Col>
          <!-- 营业执照 -->
          <Col span="20" offset="2">
          <Table :columns="operationColumns" :data="operationLog"></Table>
          </Col>
        </Row>
      </div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" style="padding-left: 60px;padding-right:60px">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    detailShow: Boolean,
    hideUserDetailModal: Function
  },
  data() {
    return {
      showUserDetailModal: this.detailShow,
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
      cardInfo: [
        {
          title: "消费时间",
          align: "center",
          key: "consumeTime"
        },
        {
          title: "消费地点",
          align: "center",
          key: "consumePlace"
        },
        {
          title: "消费金额",
          align: "center",
          key: "consumeMoney"
        },
        {
          title: "剩余金额",
          align: "center",
          key: "remainMoney"
        },
        {
          title: "操作类型",
          align: "center",
          key: "actionType"
        }
      ],
      cardData: [
        {
          consumeTime: "2017年7月24日16:28:03",
          consumePlace: "陶之恋（顺义店）",
          consumeMoney: 50,
          remainMoney: 50,
          actionType: "消费"
        },
        {
          consumeTime: "2017年7月24日16:28:03",
          consumePlace: "陶之恋（顺义店）",
          consumeMoney: 50,
          remainMoney: 50,
          actionType: "消费"
        }
      ],
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
      this.$emit("hideUserDetailModal"); // 关闭弹窗
    },
    cancel() {
      // 取消
      console.log("取消");
    },
    ok() {
      // 确定
      console.log("ok");
    }
  }
};
</script>

