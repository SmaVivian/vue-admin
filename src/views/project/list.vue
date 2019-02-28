<template>
  <div class="g-wrap">
    <div class="page-project-task">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      </el-breadcrumb>
      <cmp-header-sub></cmp-header-sub>
      <div class="menu-sub-right">
        <span>看板视图</span>
        <span>2</span>
        <span>菜单</span>
      </div>
    </div>
  </div>
</template>

<script>
import cmpHeaderSub from '@cmp/HeaderSub/index'
export default {
  components: {
    cmpHeaderSub
  },
}
</script>

<style lang="scss" scoped>
.page-project-task {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f2f2f2;
}
</style>

