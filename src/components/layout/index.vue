<template>
  <div>
    <cmp-header v-if="$store.getters.headerShow"></cmp-header>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import cmpHeader from '@cmp/Header'
export default {
  components: {
    cmpHeader
  },
}
</script>

