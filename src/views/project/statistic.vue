<template>
  <div class="page-exhibits">
    <el-card class="header-card">
      <el-row>
        <el-col :span="3">
          <div class="header-carg-item">22 <span>个</span></div>
          <p>全部任务</p>
        </el-col>
        <el-col :span="3">
          <div class="header-carg-item">22 <span>个</span></div>
          <p>全部任务</p>
        </el-col>
        <el-col :span="3">
          <div class="header-carg-item">22 <span>个</span></div>
          <p>全部任务</p>
        </el-col>
        <el-col :span="3">
          <div class="header-carg-item">22 <span>个</span></div>
          <p>全部任务</p>
        </el-col>
      </el-row>
    </el-card>

    <el-row :gutter="20" class="content">
      <el-col :span="12">
        <el-card class="content-item">
          <h2>总体任务完成情况</h2>
          <div>统计图</div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="content-item">
          <h2>总体任务完成情况</h2>
          <div>统计图</div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="content-item">
          <h2>总体任务完成情况</h2>
          <div>统计图</div>
        </el-card>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.page-exhibits {
  .header-card {
    margin: 20px 0;
    text-align: center;
    .header-carg-item {
      // text-align: center;
    }
  }
  .content {
    .content-item {
      margin-bottom: 20px;
    }
  }
}
</style>


