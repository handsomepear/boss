
<style>

</style>

<template>
  <div class="sale-manage">
    <Modal title="销售管理" v-model="modalisShow" width="60%" @on-visible-change="modalVisibleChange">
      <Tabs type="card" :animated="false">
        <TabPane label="排序及直销">
          <SortDirectSaling></SortDirectSaling>
        </TabPane>
        <!-- <TabPane label="系统服务">
          <SystemService></SystemService>
        </TabPane> -->
        <TabPane label="供应商品列表">
          <SupplyGoodsList></SupplyGoodsList>
        </TabPane>
        <TabPane label="销售商品列表">
          <SaleGoodsList></SaleGoodsList>
        </TabPane>
      </Tabs>

      <!-- 脚部按钮自定义 -->
      <div slot="footer" style="text-align: center;">
        <Button type="primary" style="padding: 5px 80px;" @click="ok">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import SortDirectSaling from "./SortDirectSaling";
import SupplyGoodsList from "./SupplyGoodsList";
import SaleGoodsList from "./SaleGoodsList";
export default {
  components: {
    SortDirectSaling,
    SupplyGoodsList,
    SaleGoodsList
    // SystemService
  },
  props: {
    saleManageShow: Boolean
  },
  data() {
    return {
      modalisShow: this.saleManageShow // modal是否显示
    };
  },
  methods: {
    modalVisibleChange() {
      this.$emit("hideSaleManageModal");
    },
    ok() {
      this.$emit("hideSaleManageModal");
    }
  }
};
</script>

