<template>
  <div class="app-container">
    <div>
      id: {{data.id}}
    </div>
    <div>
      {{data.detail}}
    </div>
    <div v-html="data.detailContent"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ''
    }
  },
  methods: {
    getData() {
      this.$http.get('/detail', {
        id: this.$route.query.id
      }).then(res => {
        this.data = res.data
      })
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>

</style>

