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
          prop: "user",
          label: "用户账号"
        },
      ]
    };
  }
};
</script>