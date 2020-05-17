<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu
        :default-active="active"
        router
        active-text-color="#409EFF"
        background-color="#304156"
        text-color="#bfcbd9"
        @select="onSelect"
      >
        <el-menu-item index="/manage/home">
          <i class="el-icon-setting"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu v-for="item in routerList" :key="item.path" :index="item.path">
          <template slot="title">
            <i :class="item.Iconfont"></i>
            {{item.name}}
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="data in item.children" :key="data.path" :index="data.path">
              <i :class="data.Iconfont"></i>
              {{data.name}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <ManageTop />
      </el-header>

      <el-main>
        <!-- 这里是manage右边切换  3级路由 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import routerList from "../../const/router";
import ManageTop from "./components/manage-top";
export default {
  components: {
    ManageTop
  },
  data() {
    return {
      active: "1",
      routerList
    };
  },
  methods: {
    //改变导航栏激活的index
    onSelect(index) {
      this.active = index;
    }
  }
};
</script>
<style lang="scss">
.el-aside {
  background-color: #304156 !important;
}
.el-header {
  color: #333;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  //这里修改导航栏的父元素背景颜色
  color: #333;
}

.el-container {
  height: 100% !important;
  .el-aside {
    height: 100%;
  }
}
</style>