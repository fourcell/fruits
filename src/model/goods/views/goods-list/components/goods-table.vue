<template>
  <div class="table">
    <el-table :data="tableData" border @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="60" align="center"></el-table-column>
      <el-table-column prop="product_id" label="编号" width="100" align="center"></el-table-column>
      <el-table-column prop="img" label="商品图片" width="120" align="center">
        <template slot-scope="scope">
          <el-image style="width: 80px; height: 80px" :src="scope.row.img"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="p_name" label="商品名称" align="center">
        <template slot-scope="scope" class="conten">
          <p>商品名称:{{scope.row.p_name}}</p>
          <p>详情:{{scope.row.describes}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格/货号" width="120" align="center">
        <template slot-scope="scope">
          <p>价格:￥{{scope.row.price}}</p>
          <!-- <p>货号:{{scope.row.price.goodsID}}</p> -->
        </template>
      </el-table-column>
      <!-- <el-table-column prop="label" label="标签" width="140" align="center">
        <template slot-scope="scope">
          <div class="label">
            <label>
              上架:
              <el-switch
                v-model="scope.row.label.putaway"
                active-color="#409eff"
                inactive-color="#dcdfe6"
              ></el-switch>
            </label>
            <label>
              新品:
              <el-switch
                v-model="scope.row.label.newProduct"
                active-color="#409eff"
                inactive-color="#dcdfe6"
              ></el-switch>
            </label>
            <label>
              推荐:
              <el-switch
                v-model="scope.row.label.recommend"
                active-color="#409eff"
                inactive-color="#dcdfe6"
              ></el-switch>
            </label>
          </div>
        </template>
      </el-table-column>-->
      <!-- <el-table-column prop="sort" label="排序" width="100" align="center"></el-table-column> -->
      <el-table-column prop="stock" label="SKU库存" width="100" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.stock" />
        </template>
      </el-table-column>
      <!--   <el-table-column prop="sales" label="销量" width="100" align="center"></el-table-column>
      <el-table-column prop="audit" label="审核状态" width="100" align="center">
        <template slot-scope="scope">
          <el-link :underline="false" target="_blank">{{scope.row.audit}}</el-link>
          <el-link :underline="false" type="primary">审核详情</el-link>
        </template>
      </el-table-column>-->
      <el-table-column label="操作" width="160" align="center">
        <template slot-scope="scope">
          <label class="operation">
            <el-button size="small">查看</el-button>
          </label>
          <label class="operation">
            <el-button size="small">编辑</el-button>
          </label>
          <label class="operation">
            <el-button size="small">日志</el-button>
          </label>
          <label class="operation">
            <el-button size="small" type="danger" @click="dele(scope.row)">删除</el-button>
          </label>
        </template>
      </el-table-column>
    </el-table>
    <Base :options="options" @pagintion="toPagination" @number="toNumber" :total="total" />
  </div>
</template>

<script>
import Base from "./base";
import { goodsList, goodsDelete } from "../../../serve";
export default {
  data() {
    return {
      pages: 1, //页数
      branches: 10, //每页条数
      total: 0, //总页数
      options: [
        {
          value: "商品上架",
          label: "商品上架"
        },
        {
          value: "商品下架",
          label: "商品下架"
        },
        {
          value: "设置推荐",
          label: "设置推荐"
        },
        {
          value: "取消推荐",
          label: "取消推荐"
        },
        {
          value: "设为新品",
          label: "设为新品"
        },
        {
          value: "取消新品",
          label: "取消新品"
        },
        {
          value: "转移分类",
          label: "转移分类"
        },
        {
          value: "移入回收站",
          label: "移入回收站"
        }
      ],
      tableData: [],
      multipleSelection: []
    };
  },
  components: {
    Base
  },
  watch: {
    pages() {
      this.goodsList();
    },
    branches() {
      this.goodsList();
    }
  },
  created() {
    this.goodsList();
  },
  methods: {
    //请求数据
    goodsList() {
      let parm = {
        pages: this.pages,
        branches: this.branches
      };
      goodsList(parm).then(data => {
        this.total = data.total;
        this.tableData = data.payload;
        window.console.log(this.total);
      });
    },
    handleSelectionChange(val) {
      //table 选中的的返回到multipleSelection
      this.multipleSelection = val;
    },
    toPagination(val) {
      //子组件返回的页数
      this.pages = val;
    },
    toNumber(val) {
      //返回当前一页多少条数据
      this.branches = val;
    },
    //删除
    dele(row) {
      let { sku_id } = row;
      goodsDelete({ sku_id }).then(() => {
        this.$message({
          message: "删除成功",
          type: "success"
        });
        this.goodsList();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  width: 97%;
  margin: auto;
  .label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    label {
      padding: 5px;
    }
  }
  .conten {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 14px;
      color: #606266;
      line-height: 14px;
    }
  }
  .sort {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #409eff;
    line-height: 40px;
    color: #fff;
  }
  .operation {
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
}
</style>