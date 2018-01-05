<style lang="less">
.msg {
  font-size: 10px;
}
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }
}
</style>

<template>
  <div class="sort-setting">
    <Modal v-model="sortSettingShow" title="沧海一声笑狂欢店" width="500px" @on-visible-change="modalVisibleChange" :width="700" class-name="vertical-center-modal">
      <Form>
        <FormItem>
          <span>当前商品排序为： {{goodsSort}}</span>
        </FormItem>
        <FormItem label="※ 需要将商品排序变为：">
          <Row>
            <Col span="3">
            <Input size="small" />
            </Col>
            <Col span="12" offset="1">
            <span class="msg">只能输入正整数，目标序号不能是自己，且必须指向商品</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="※ 变更策略：">
          <br>
          <RadioGroup v-model="changeTactics">
            <Row>
              <Col offset="1">
              <Radio label="tactics1">
                <span class="msg">和目标序号商品互换位置</span>
              </Radio>
              </Col>
            </Row>
            <Row>
              <Col offset="1">
              <Radio label="tactics2">
                <span class="msg">插入到目标序号商品之前。向前插时，目标序号商品及后排商品依次排序+1；向后插时，目标序号商品及前排商品依次-1</span>
              </Radio>
              </Col>
            </Row>
          </RadioGroup>
        </FormItem>
      </Form>
      <div slot="footer" style="text-align:center">
        <Button type="primary" size="small" style="margin-right:20px">确认</Button>
        <Button type="primary" size="small">取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    settingModalShow: Boolean
  },
  data() {
    return {
      changeTactics: "", // 变更策略
      goodsSort: "x",
      sortSettingShow: this.settingModalShow
    };
  },
  methods: {
    /* 保存二维码到本地 */
    saveToLodal() {
      this.$emit("hideSettingModal");
    },
    cancel() {
      this.$emit("hideSettingModal");
    },
    modalVisibleChange() {
      this.$emit("hideSettingModal");
    }
  }
};
</script>
