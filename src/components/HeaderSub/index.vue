<template>
  <div class="cmp-header-sub">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-sub"
    mode="horizontal"
    @select="handleSelect"
    background-color="#f2f2f2">
      <el-menu-item index="1">任务</el-menu-item>
      <el-menu-item index="2">展品</el-menu-item>
      <el-menu-item index="3">文件</el-menu-item>
      <el-menu-item index="4">日程</el-menu-item>
      <el-menu-item index="5">讨论</el-menu-item>
      <el-menu-item index="6">统计</el-menu-item>
    </el-menu>
    <!-- <div class="operate">
      
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HeaderSub',
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
.cmp-header-sub {
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
}
</style>

