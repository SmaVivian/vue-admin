<template>
  <div class="cmp-sidebar">
    <el-menu
      :default-active="activeIndex"
      :default-openeds="openeds"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect">

      <template v-for="(item, index) in menuList">
        <!-- 有子菜单 -->
        <el-menu-item :index="item.index" v-if="!item.children">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>

        <!-- 无子菜单 -->
        <el-submenu :index="item.name" v-if="item.children">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <template v-for="(v, i) in item.children">
            <el-menu-item :index="v.index">{{v.name}}</el-menu-item>
          </template>
          <el-menu-item index="add" v-if="item.hasBtn" @click="addGroup">+新建分组</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    menuList: {
      type: Array,
      default: () => []
    },
    activeIndex: {
      type: String,
      default: '/project'
    },
    // 默认展开的菜单 ['一级菜单index', '一级菜单index'...]
    openeds: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    addGroup() {
      console.log('add')
    }
  }
}
</script>

<style lang="scss" scoped>
.cmp-sidebar {
  float: left;
  width: 200px;
}
</style>

<style lang="scss">
.cmp-sidebar {
  .el-menu {
    border-right: none;
  }
}
</style>


