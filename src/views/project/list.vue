<template>
  <div class="g-wrap">
    <div class="page-project-task">
      <div class="top">
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

      <div class="content">
        <el-row :gutter="20">
          <el-col :span="4" v-for="(item, index) in list" :key="index">
            <drag-list :list="item.arrList" :title="item.title"/>
          </el-col>
          <el-col :span="4">
            <el-button plain>新建任务看板</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import cmpHeaderSub from '@cmp/HeaderSub/index'
import DragList from '@/components/DragList'
export default {
  components: {
    cmpHeaderSub,
    DragList
  },
  data() {
    return {
      list: [
        {
          title: '标题1',
          arrList: [
            { name: "1列表", id: 1 },
            { name: "12列表", id: 2 },
            { name: "13列表", id: 3 },
            { name: "14列表", id: 4 }
          ],
        },
        {
          title: '标题2',
          arrList: [
            { name: "21列表", id: 5 },
            { name: "22列表", id: 6 },
            { name: "23列表", id: 7 }
          ],
        },
        {
          title: '标题3',
          arrList: [
            { name: "31列表", id: 8 },
            { name: "32列表", id: 9 },
            { name: "33列表", id: 10 }
          ],
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.g-wrap {
  width: 100%;
}
.page-project-task {
  .top {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f2f2f2;
  }
  .content {
    padding: 20px;
  }
}
</style>

