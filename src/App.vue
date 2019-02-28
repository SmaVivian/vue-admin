<template>
  <div id="app">
    <div class="main-container">
      <cmp-header></cmp-header>
      <!-- <navbar/> -->
      <div class="g-wrap">
        <transition>
          <!-- or name="fade" -->
          <!-- <router-view :key="key"></router-view> -->
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import cmpHeader from '@cmp/Header/index'
export default {
  name: 'App',
  components: {
    cmpHeader
  },
}
</script>

<style lang="scss">
  @import './assets/css/reset.css';
  @import 'element-ui/lib/theme-chalk/index.css';
  @import '~@/assets/css/theme.scss';
  @import '~@/assets/css/resetCmp.scss';
</style>

// <style lang="scss">
// .main-wrap {
//   min-height: calc(100vh - 60px);
//   padding-top: 20px;
//   box-sizing: border-box;
// }
// </style>
