<template>
  <div class="page-exhibits">
    <el-card class="header-card">
      <el-row>
        <el-col :span="3" v-for="o in 8" :key="o">
          <div class="header-carg-item">22 <span>个</span></div>
          <p>全部任务</p>
        </el-col>
        </el-col>
      </el-row>
    </el-card>

    <el-row :gutter="20" class="content">
      <el-col :span="12">
        <el-card class="content-item">
          <h2>总体任务完成情况</h2>
          <div class="graph">
            <chart ref="chart1" :options="orgOptions1" :auto-resize="true"></chart>
          </div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="content-item">
          <h2>总体任务完成情况</h2>
          <div class="graph">
            <chart ref="chart2" :options="orgOptions2" :auto-resize="true"></chart>
          </div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="content-item">
          <h2>总体任务完成情况</h2>
          <div class="graph">统计图</div>
        </el-card>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import chart from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title' //引入标题组件
import 'echarts/lib/component/legend' //引入图例组件
import 'echarts/lib/component/tooltip' //引入图例组件
import 'echarts/lib/chart/bar'
export default {
  components: {
    chart
  },
  data() {
    return {
      orgOptions1: {},
      orgOptions2: {},
    }
  },
  mounted() {
    this.orgOptions1 = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        // smooth: true
      }]
    }
    this.orgOptions2 = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          x: 'left',
          data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series: [
        {
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  show: true,
                  textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                  }
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
          ]
        },
      ]
    }
  }
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
      .graph {
        height: 300px;
        .echarts {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>



