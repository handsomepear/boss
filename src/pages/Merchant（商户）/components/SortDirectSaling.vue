<style>

</style>

<template>
  <!-- 排序及直销 -->
  <div class="sort-directsale">
    <div class="sort-directsale-top">
      <Card>
        <Form v-model="formItem" label-position="left" inline>
          <Row>
            <Col span="8">
            <FormItem label="商品名称：" :label-width="72" style="margin-bottom:0">
              <Input size="small" />
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="售价：" :label-width="50" style="margin-bottom:0">
              <Input size="small" />
            </FormItem>
            </Col>
            <Col span="22" offset="1" style="text-align: right">
            <FormItem style="margin-bottom:0">
              <div class="button-con">
                <Button type="primary" @click="submit" size="small">查询</Button>
                <Button type="primary" style="margin-left: 20px" size="small">重置</Button>
              </div>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
    <div class="data-con">
      <!-- 排序设置 -->
      <SortSetting :settingModalShow="settingModalShow" @hideSettingModal="hideSettingModal" v-if="settingModalShow"></SortSetting>
      <Card>
        <div class="table-con" style="text-align: right">
          <!-- 分页插件和表格内容显示 -->
          <Page :total="table.totalPage" show-sizer :page-size="table.pageSize" :page-size-opts="table.pageSizeOpts" size="small"></Page>
          <Table border :columns="table.staffAcounts" :data="table.staffData" style="margin: 20px 0"></Table>
          <!-- 如何把两个page组件关联起来？ -->
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import SortSetting from './SortSetting'
export default {
  components: {
    SortSetting
  },
  data() {
    return {
      settingModalShow: false,
      formItem: {},
      table: {
        totalPage: 300,
        pageSize: 15,
        pageSizeOpts: [15, 50, 100],
        staffAcounts: [
          {
            title: "序号",
            key: "number"
          },
          {
            title: "商品名称",
            key: "goodsName"
          },
          {
            title: "售价",
            key: "price"
          },
          {
            title: "操作",
            align: "center",
            width: 190,
            key: "action",
            render: (h, params) => {
             return h('div', [
                h('Button', {
                  props: {
                    size: 'small'
                  },
                  style: {
                    "margin-right": '6px'
                  },
                  on: {
                    click:() => {
                      this.showSettingModal()
                    }
                  }
                },'排序设置'),
                h('Button', {
                  props: {
                    size: 'small'
                  }
                },'设为直销')
              ])
            }
          },
        ],
        staffData: [{},{}]
      }
    };
  },
  methods: {
    submit(){

    },
    showSettingModal(){
      this.settingModalShow = true;
    },
    hideSettingModal(){
      this.settingModalShow = false;
    }
  }
};
</script>
