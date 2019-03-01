<template>
  <div class="g-wrap">
    <div class="page-project clearfix">
      <sidebar :menuList="sidebarData" :openeds="openedsArr"></sidebar>
      <div class="project-right">
        <h1>全部项目</h1>
        <ul class="pro-list">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-card class="box-card">
                <router-link class="card-item" tag="div" :to="{path: '/project/list'}">抗联展览项目</router-link>
                <!-- <div v-for="o in 4" :key="o" class="text item">
                  {{'列表内容 ' + o }}
                </div> -->
              </el-card>
            </el-col>
          </el-row>
          <!-- <router-link tag="li" :to="{path: '/project/list'}">抗联展览项目</router-link> -->

          
        </ul>
      </div>
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
  },
  activated() {
    this.$store.dispatch('changeBodyBg', 'bg1')
  },
  deactivated() {
    this.$store.dispatch('changeBodyBg', '')
  }
}
</script>

<style lang="scss" scoped>
.page-project {
  .project-right {
    padding-left: 240px;
    .pro-list {
      .box-card {
        position: relative;
        cursor: pointer;
        height: 100px;
        .card-item {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 10px;
          left: 10px;
        }
      }
    }
  }
}
</style>


