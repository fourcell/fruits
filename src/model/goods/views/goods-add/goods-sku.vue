<template>
  <el-form label-width="80px">
    <el-form-item label="商品规格">
      <div>
        <el-table :data="skuData" border style="width: 80%">
          <el-table-column prop="color" label="颜色" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.color"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="size" label="尺寸" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.size"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="price" label="原价格" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.price"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="vipPrice" label="销售价格" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.vipPrice"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="sku" label="商品库存" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.sku"></el-input>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" align="center">
            <template slot-scope="scope">
              <el-button type="text" @click="onDelete(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <template>
          <el-button type="text" @click="add">添加</el-button>
        </template>
      </div>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      radio: "", //选择添加商品的sku
      skuData: [{ color: '', size: '', price: '', vipPrice: '', sku: '' }]
    };
  },
  methods: {
    onDelete(index) {
      this.skuData.length > 1 ? this.skuData.splice(index, 1) : null;
    },
    add() {
      this.skuData.push({
        color: "",
        size: "",
        price: "",
        vipPrice: "",
        sku: ""
      });
    }
  }
};
</script>
<style lang="scss" >
.el-row {
  border: none;
}
</style>