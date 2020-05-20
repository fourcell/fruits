<template>
  <div class="table">
    <el-button type="primary" size="small" v-if="newly" @click="onNewly">新增</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="(item,index) in columns "
        align="center"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.minWidth"
        :key="index"
      >
        <template>
          <img v-if="item.prop == 'src'" :src="item.src" alt />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100" v-if="operate">
        <template>
          <el-button type="text" size="small" @click="onUpdate">修改</el-button>
          <el-button type="text" size="small" @click="onDelete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    tableData: {
      type: Array,
      default() {
        return [];
      }
    },
    operate: {
      type: Boolean,
      default() {
        return false;
      }
    },
    newly: {
      type: Boolean,
      default() {
        return false;
      }
    },
    url: {
      type: String,
      default() {
        return "";
      }
    }
  },
  data() {
    return {
      currentPage: 1,
      total: 10,
      value: true,
      pages: 1,
      size: 10
    };
  },
  methods: {
    //修改一页显示的条数
    handleSizeChange(val) {
      this.size = val;
      this.getUrl();
    },
    //修改显示的页数
    handleCurrentChange(val) {
      this.pages = val;
      this.getUrl();
    },
    onUpdate(val) {
      this.$emit("update", val);
    },
    onDelete(val) {
      this.$emit("Delete", val);
    },
    onNewly() {
      this.$emit("Newly");
    }
  }
};
</script>
<style lang="scss" scoped>
.table {
  .pagination {
    .el-pagination {
      padding-top: 10px;
      float: right;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>