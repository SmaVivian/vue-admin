<template>
  <div class="page-project-sub-container">
    <div class="page-project-sub">
      <div class="top">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        </el-breadcrumb>
        <cmp-header-sub :tabList="tabs" :activeTab="currentTab" @projectEventTab="changeTab"></cmp-header-sub>
        <div class="menu-sub-right">
          <span>看板视图</span>
          <span>2</span>
          <span>菜单</span>
        </div>
      </div>

      <div class="sub-content">
        <div class="sub-content-wrap">
          <component :is="currentTabCmp"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cmpHeaderSub from '@cmp/HeaderSub'
import taskProject from './task'
import exhibitsProject from './exhibits'
import fileProject from './file'
import discussProject from './discuss'
import statisticProject from './statistic'
export default {
  components: {
    cmpHeaderSub,
    taskProject,
    exhibitsProject,
    fileProject,
    discussProject,
    statisticProject,
  },
  data() {
    return {
      // currentTab: 'task',
      tabs: [
        {
          name: '任务',
          path: 'task'
        },
        {
          name: '展品',
          path: 'exhibits'
        },
        {
          name: '文件',
          path: 'file'
        },
        {
          name: '讨论',
          path: 'discuss'
        },
        {
          name: '统计',
          path: 'statistic'
        },
      ]
    }
  },
  computed: {
    currentTab() {
      return this.$route.query.type
    },
    currentTabCmp() {
      return this.currentTab + 'Project'
    }
  },
  methods: {
    changeTab(path) {
      this.$router.replace({path: '/project/sub', query: {type: path}})
    }
  }
}
</script>

<style lang="scss" scoped>
.page-project-sub-container {
  background-color: #f2f2f2;
}
.page-project-sub {
  .top {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f2f2f2;
    box-shadow: 0 2px 0 gray;  
  }
  .sub-content {
    min-height: calc(100vh - 116px);
    padding: 20px;
    box-sizing: border-box;
    // background-color: #f2f2f2;
    position: relative;
    top: 2px;
  }
  .sub-content-wrap {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>




