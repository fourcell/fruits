<template>
  <div>
    <Table :columns="columns" :operate="operate" :newly="newly" />
  </div>
</template>
<script>
import Table from "../../../../components/tabel";
export default {
  components: {
    Table
  },
  data() {
    return {
      operate: true,
      newly: true,
      columns: [
        {
          prop: "id",
          label: "编号"
        },
        {
          prop: "orderId",
          label: "订单编号"
        },
        {
          prop: "time",
          label: "提交时间"
        },
        {
          prop: "user",
          label: "用户账号"
        },
        {
          prop: "price",
          label: "订单金额"
        },
        {
          prop: "orderMode",
          label: "支付方式"
        }
      ]
    };
  }
};
</script>