<template>
  <div class="cmp-header">
    <img class="logo" src="" alt="">
    <el-menu
    :default-active="activeMenu"
    class="el-menu-top"
    mode="horizontal"
    @select="handleSelect"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#6ea8dc">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/project">项目</el-menu-item>
      <el-menu-item index="/collect">藏品</el-menu-item>
      <el-menu-item index="/digital">数字资产</el-menu-item>
    </el-menu>
    <div class="operate">
      <i class="el-icon-search"></i>
      <i class="el-icon-bell"></i>
      <label class="person">
        <img src="" alt="">
        <span>Jane</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    console.log(this.$route.path.split('/')[1])
    return {
      activeMenu: '/' + this.$route.path.split('/')[1]
      // activeMenu: [this.$route.meta.menuPath || this.$route.path]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key);
    }
  }
}
</script>

<style lang="scss" scoped>
.cmp-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  background-color: #001529;
  .logo {
    width: 280px;
  }
  .el-menu-top {
    width: 540px;
  }
  .operate {
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    .person {
      img {
        display: inline-block;
        width: 50px;
        height: 50px;
        vertical-align: middle;
        border-radius: 100%;
      }
    }
  }
}
</style>

<style lang="scss">
.cmp-header {
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
}
</style>


