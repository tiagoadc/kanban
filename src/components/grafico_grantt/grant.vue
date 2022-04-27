<template>
  <div class="hello">

      
<g-gantt-chart
    :chart-start="myChartStart"
    :chart-end="myChartEnd"
  >
    <g-gantt-row
      v-for="row in rows"
      :key="row.label"
      :label="row.label"
      :bars="row.bars"
      bar-start="myStart"
      bar-end="myEnd"
    />
  </g-gantt-chart>

  </div>
</template>

<script>
import {GGanttChart, GGanttRow} from 'vue-ganttastic'

export default {
  name: 'HelloWorld',
  components:{
    GGanttChart,
    GGanttRow
  },
  props: {
    msg: String
  },
  data(){
    return {
      myChartStart: "2020-03-01 00:00",
      myChartEnd: "2020-03-07 00:00",
      rows: [
        {
          label: "My row #1",
          bars: [
            {
              myStart: "2020-03-01 12:10",
              myEnd: "2020-03-01 16:35",
              ganttBarConfig: {
                  background: "#bd3128",
                  borderRadius: "3px"
                }
            }
          ]
        },
        {
          label: "My row #2",
          bars: [
            {
              myStart: "2020-03-02 01:00",
              myEnd: "2020-03-02 12:00"
            },
            {
              myStart: "2020-03-02 13:00",
              myEnd: "2020-03-02 22:00"
            }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
