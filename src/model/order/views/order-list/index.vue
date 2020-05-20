<template>
  <div>
    <Table :columns="columns" :operate="operate" :newly="newly" :tableData="tableData" />
  </div>
</template>
<script>
import Table from "../../../../components/tabel";
import { orderSelect } from "./serve";
export default {
  components: {
    Table
  },
  data() {
    return {
      operate: true,
      newly: true,
      tableData:[],
      columns: [
        {
          prop: "o_id",
          label: "订单编号"
        },
        {
          prop: "order_time",
          label: "提交时间"
        },
        {
          prop: "name",
          label: "用户账号"
        },
        {
          prop: "total",
          label: "订单金额"
        },
        {
          prop: "orderMode",
          label: "支付方式"
        }
      ]
    };
  },
  created() {
    this.orderSelect();
  },
  methods: {
    orderSelect() {
      orderSelect().then(data => {
      this.tableData =  data.payload
      });
    }
  }
};
</script>