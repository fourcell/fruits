
<template>
  <el-form ref="form" :model="form" label-width="80px" class="goods-add">
    <el-form-item label="属性类型">
      <el-select v-model="form.type" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.class_id"
          :label="item.class_name"
          :value="item.class_id"
        ></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="商品名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <!-- 商品规格 -->
    <GoodsSku />
    <el-form-item label="商品标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <!--图片上传-->
    <el-form-item label="商品图片">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
    </el-form-item>
    <el-form-item label="发货地点">
      <el-input v-model="form.site"></el-input>
    </el-form-item>
    <el-form-item label="商品详情">
      <el-input type="textarea" v-model="form.details"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import GoodsSku from "./goods-sku";
import { selectType } from "../../serve";
export default {
  components: {
    GoodsSku
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      form: {
        type: "", //商品类型
        name: "", //商品名称
        title: "", //商品标题
        site: "", //发货地点
        details: "" //商品详情
      },
      options: [] //类型列表
    };
  },
  created() {
    selectType().then(({ payload }) => {
      this.options = payload;
    });
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.$refs.skuForm);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.goods-add {
  .el-input__inner,
  .el-input,
  .el-textarea {
    width: 360px;
  }
}
</style>>