<template>
  <div class="page-project clearfix">
    <sidebar :menuList="sidebarData" :openeds="openedsArr"></sidebar>
    <div class="project-right">
      <h1>全部项目</h1>
      <ul class="pro-list">
        <router-link tag="li" :to="{path: '/project/list'}">抗联展览项目</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import sidebar from '@cmp/Sidebar/index'
export default {
  components: {
    sidebar
  },
  data() {
    return {
      sidebarData: [
        {
          name: '测试',
          icon: 'el-icon-edit',
          index: '/'
        },
        {
          name: '测试2',
          icon: 'el-icon-edit',
          index: '/aa'
        },
        {
          name: '项目',
          icon: 'el-icon-menu',
          children: [
            {
              name: '全部项目(去除)',
              index: '/project'
            },
            {
              name: '我参与的',
              index: '22'
            },
            {
              name: '我参与的1',
              index: '/project/list?id=3'
            },
            {
              name: '我参与的2',
              index: '/project/list?id=4'
            }
          ]
        },
        {
          name: '项目2',
          icon: 'el-icon-location',
          hasBtn: true,  // 新建分组按钮
          children: [
            {
              name: '全部项目(去除)',
              index: '11',
            },
            {
              name: '我参与的',
              index: '12',
            },
            {
              name: '我参与的1',
              index: '13',
            },
            {
              name: '我参与的2',
              index: '14',
            }
          ]
        },
      ],
      openedsArr: ['项目', '项目2']
    }
  },
  methods: {
    getNavData() {
      this.sidebarData.splice(1, 1)
    }
  },
  created() {
    // setTimeout(this.getNavData, 1000)
  }
}
</script>

<style lang="scss" scoped>
.page-project {
  .project-right {
    padding-left: 240px;
    .pro-list {
      li {
        cursor: pointer;
      }
    }
  }
}
</style>

<style>
.main-container {
  background: #f2f2f2;
}
</style>


