<style lang="less">
.item {
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  .title {
    line-height: 40px;
  }
}
</style>

<template>
  <!-- 系统服务 -->
  <div class="system-service">
    <!-- 软件服务详情 -->
    <div class="software item ">
      <h4 class="title">软件系统服务详情</h4>
      <div class="details">
        <Row>
          <Col span="10" style="line-height:30px">
          <Row>
            <Col span="8">商品名称：</Col>
            <Col span="14">乐园云宝旗舰版（年付）</Col>
          </Row>
          </Col>
          <Col span="10" offset="1" style="line-height:30px">
          <Row>
            <Col span="8">支付费用：</Col>
            <Col span="14">1794元</Col>
          </Row>

          </Col>
          <Col span="10" style="line-height:30px">
          <Row>
            <Col span="8">服务开始日期：</Col>
            <Col span="14">2017年7月19日</Col>
          </Row>
          </Col>
          <Col span="10" offset="1" style="line-height:30px">
          <Row>
            <Col span="8">服务结束日期：</Col>
            <Col span="14">
            <DatePicker type="date" v-model="serviceEndTime" size="small" transfer></DatePicker>
            </Col>
          </Row>

          </Col>
        </Row>
      </div>
    </div>
    <!-- 智能收银套装详情 -->
    <div class="collect-money  item">
      <h4 class="title">软件系统服务详情</h4>
      <Card style="margin-bottom: 20px;font-size:12px">
        <Row>
          <Col span="10" style="line-height:30px">
          <Row>
            <Col span="8">设备串号：</Col>
            <Col span="14">859893892819</Col>
          </Row>
          </Col>
          <Col span="10" offset="1" style="line-height:30px">
          <Row>
            <Col span="8">支付费用：</Col>
            <Col span="14">1794元</Col>
          </Row>

          </Col>
          <Col span="10" style="line-height:30px">
          <Row>
            <Col span="8">服务开始日期：</Col>
            <Col span="14">2017年7月19日</Col>
          </Row>
          </Col>
          <Col span="10" offset="1" style="line-height:30px">
          <Row>
            <Col span="8">服务结束日期：</Col>
            <Col span="14">
            <DatePicker type="date" v-model="serviceEndTime" size="small" transfer></DatePicker>
            </Col>
          </Row>

          </Col>
        </Row>
      </Card>
      <Card style="font-size:12px">
        <Row>
          <Col span="10" style="line-height:30px">
          <Row>
            <Col span="8">设备串号：</Col>
            <Col span="14">859893892819</Col>
          </Row>
          </Col>
          <Col span="10" offset="1" style="line-height:30px">
          <Row>
            <Col span="8">支付费用：</Col>
            <Col span="14">1794元</Col>
          </Row>
          </Col>
          <Col span="10" style="line-height:30px">
          <Row>
            <Col span="8">服务开始日期：</Col>
            <Col span="14">2017年7月19日</Col>
          </Row>
          </Col>
          <Col span="10" offset="1" style="line-height:30px">
          <Row>
            <Col span="8">服务结束日期：</Col>
            <Col span="14">
            <DatePicker type="date" v-model="serviceEndTime" size="small" transfer></DatePicker>
            </Col>
          </Row>

          </Col>
        </Row>
      </Card>
    </div>
    <!-- 智能场地管理套装详情 -->
    <div class="site-manage  item">
      <h4 class="title">软件系统服务详情</h4>
      <Card style="margin-bottom: 20px;font-size:12px">
        <Row>
          <Col span="10" style="line-height:30px">
          <Row>
            <Col span="8">购买数量：</Col>
            <Col span="14">5</Col>
          </Row>
          </Col>
          <Col span="10" offset="1" style="line-height:30px">
          <Row>
            <Col span="8">支付费用：</Col>
            <Col span="14">1794元</Col>
          </Row>

          </Col>
          <Col span="10" style="line-height:30px">
          <Row>
            <Col span="8">服务开始日期：</Col>
            <Col span="14">2017年7月19日</Col>
          </Row>
          </Col>
        </Row>
      </Card>
      <Card style="font-size:12px">
        <Row>
          <Col span="10" style="line-height:30px">
          <Row>
            <Col span="8">购买数量：</Col>
            <Col span="14">5</Col>
          </Row>
          </Col>
          <Col span="10" offset="1" style="line-height:30px">
          <Row>
            <Col span="8">支付费用：</Col>
            <Col span="14">1794元</Col>
          </Row>
          </Col>
          <Col span="10" style="line-height:30px">
          <Row>
            <Col span="8">服务开始日期：</Col>
            <Col span="14">2017年7月19日</Col>
          </Row>
          </Col>
          <Col span="10" offset="1" style="line-height:30px">
          </Col>
        </Row>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serviceEndTime: ""
    };
  }
};
</script>
