<template>
  <div class="cmp-header-sub">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, index) in tabList"
        :key="index"
        :label="item.name"
        :name="item.path">
        <!-- {{item.content}} -->
      </el-tab-pane>
    </el-tabs>
    <!-- <el-menu
    :default-active="activeIndex"
    class="el-menu-sub"
    mode="horizontal"
    @select="handleSelect"
    background-color="#f2f2f2">
      <el-menu-item :index="item.path" v-for="(item, index) in tabList" :key="index">{{item.name}}</el-menu-item>
    </el-menu> -->
    <!-- <div class="operate">
      
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HeaderSub',
  props: {
    tabList: {
      type: Array,
      default() {
        return []
      }
    },
    activeTab: {
      type: String,
      default: ''
    }
  },
  watch: {
    // active() {
    //   this.activeName = this.active
    //   debugger
    // }
  },
  data() {
    return {
      activeName: this.activeTab
    }
  },
  methods: {
    handleClick(tab, event) {
      this.$emit('projectEventTab', this.activeName);
      console.log('activeName',this.activeName)
    },
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

