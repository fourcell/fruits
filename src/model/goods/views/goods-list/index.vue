<template>
  <div>
    <Search />
    <List @goodsAdd="goodsAdd" />
    <GoodsTable />
  </div>
</template>
<script>
import Search from "../../../../components/search";
import List from "../../../../components/list";
import GoodsTable from "./components/goods-table";
export default {
  components: {
    Search,
    List,
    GoodsTable
  },
  methods: {
    goodsAdd() {
      this.$router.push({ path: "/manage/goods/goodsAdd" });
    }
  }
};
</script>