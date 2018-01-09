<style lang="less" scoped>
.row-item {
  line-height: 25px;
}
.lease-con {
  padding: 20px;
}
.action-log {
  padding: 20px;
  margin-top: 40px;
}
</style>
<template>
  <div class="pos-details">
    <Modal title="订单详情" v-model="showPostDetailModal" @on-visible-change="modalVisibleChange" @on-ok="ok" @on-cancel="cancel" width="60%" :styles="{marginBottom: '100px'}">
      <Row class="row-item">
        <Col span="7">
        <Row>
          <Col span="8">POS编号：</Col>
          <Col span="10">1707280001</Col>
        </Row>
        </Col>
        <Col span="7">
        <Row>
          <Col span="8">POS状态：</Col>
          <Col span="10">正常</Col>
        </Row>
        </Col>
        <Col span="7">
        <Row>
          <Col span="8">入库人：</Col>
          <Col span="10">冯翠翠</Col>
        </Row>
        </Col>
      </Row>
      <Row class="row-item">
        <Col span="7">
        <Row>
          <Col span="8">供货商：</Col>
          <Col span="10">世麦科技</Col>
        </Row>
        </Col>
        <Col span="7">
        <Row>
          <Col span="8">SN串号：</Col>
          <Col span="10">SM09087654</Col>
        </Row>
        </Col>
      </Row>
      <Row class="row-item">
        <Col span="10">
        <Row>
          <Col span="6">入库时间：</Col>
          <Col span="16">2017年7月28日16:34:21</Col>
        </Row>
        </Col>

      </Row>
      <hr style="margin-top: 20px" />
      <div class="lease-con">
        <Row class="row-item">
          <Col>租赁记录：</Col>
        </Row>
        <Table :columns="table.leaseInfo" :data="table.leaseData" border></Table>
      </div>
      <div class="action-log">
        <Row class="row-item">
          <Col span="24">操作日志：</Col>
        </Row>
        <Table :columns="operationColumns" :data="operationLog" border></Table>
      </div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" size="large" style="width:100px;">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    detailShow: Boolean,
    hidePosDetailModal: Function
  },
  data() {
    return {
      showPostDetailModal: this.detailShow,
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
      table: {
        leaseInfo: [
          {
            title: "服务店铺名称",
            align: "center",
            key: "shopName"
          },
          {
            title: "租赁开始时间",
            align: "center",
            key: "startTime"
          },
          {
            title: "租赁结束时间",
            align: "center",
            key: "endTime"
          },
          {
            title: "租金收入",
            align: "center",
            key: "rental"
          },
          {
            title: "租期内经手交易额",
            align: "center",
            key: "total"
          },
          {
            title: "销售人员",
            align: "center",
            key: "saler"
          }
        ],
        leaseData: [
          {
            shopName: "Kittly工作坊",
            startTime: "2017年3月24日",
            endTime: "2017年3月24日",
            rental: "447",
            total: "100000",
            saler: "孙全服"
          },
          {
            shopName: "Kittly工作坊",
            startTime: "2017年3月24日",
            endTime: "2017年3月24日",
            rental: "447",
            total: "100000",
            saler: "孙全服"
          }
        ]
      },
      serviceInfo: [
        {
          title: "购买服务商品",
          key: "goods"
        },
        {
          title: "服务开始日期",
          key: "startTime"
        },
        {
          title: "服务结束日期",
          key: "endTime"
        },
        {
          title: "购买数量",
          key: "num"
        },
        {
          title: "支付费用",
          key: "expense"
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
      this.$emit("hidePosDetailModal"); // 关闭弹窗
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

