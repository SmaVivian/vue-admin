<template>
  <div id="app">
    <div class="g-container" 
      :class="{'header-no': !$store.getters.headerShow, 'bg-none': $store.getters.bodyBg === 'bgNone'}">
      <router-view/>
      <!-- <cmp-header v-if="$store.getters.headerShow"></cmp-header>
      <transition>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition> -->
    </div>
  </div>
</template>

<script>
import cmpHeader from '@cmp/Header/index'
export default {
  name: 'App',
  // components: {
  //   cmpHeader
  // },
  created() {
    console.log(this.$store.getters)
  },
}
</script>

<style lang="scss">
  @import './assets/css/reset.css';
  @import 'element-ui/lib/theme-chalk/index.css';
  @import '~@/assets/css/theme.scss';
  @import '~@/assets/css/resetCmp.scss';
</style>


