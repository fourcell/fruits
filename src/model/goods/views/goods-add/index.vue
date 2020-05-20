
<template>
  <el-form ref="form" :model="form" label-width="80px" class="goods-add" v-if="show">
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
    <GoodsSku ref="skuForm" />
    <el-form-item label="商品标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <!--图片上传-->
    <el-form-item label="商品图片">
      <el-upload
        action="http://localhost:3000/upload"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-success="onSuccess"
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
import { selectType, deleteUpload, goodsAdd } from "../../serve";
export default {
  components: {
    GoodsSku
  },
  data() {
    return {
      show: true, //刷新页面
      dialogImageUrl: "",
      dialogVisible: false,
      form: {
        type: "", //商品类型
        name: "", //商品名称
        title: "", //商品标题

        site: "", //发货地点
        details: "" //商品详情
      },
      options: [], //类型列表
      imgList: [] //图片列表
    };
  },
  created() {
    selectType().then(({ payload }) => {
      this.options = payload;
    });
  },
  methods: {
    async onSubmit() {
      let sku = { ...this.$refs["skuForm"].skuData };
      let parm = {
        sku,
        imgList: this.imgList,
        goods: this.form
      };
      await goodsAdd(parm).then(({ code }) => {
        if (code == 0) {
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.$router.push({path:'/manage/goods/goodsList'})
        }
      });
    },
    //删除
    handleRemove({ response }, file) {
      let imgurl = response.files.url;
      deleteUpload({ imgurl }).then(() => {
        this.imgList = file;
      });
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //成功回调
    onSuccess({ files }) {
      window.console.log(files.url)
      this.imgList.push(files.url);
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