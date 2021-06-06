<template>
  <div>
    <h3>{{ msg.County}}/{{ msg.SiteName}}</h3>
    <div class="b">
    空氣品質指標
    <b  class="AQI">{{ msg.AQI}}</b>
    <span>{{ msg.Status}}</span>
    </div>
  </div>
  <!-- <footer> <b>{{ msg.PublishTime}}</b></footer> -->
</template>

<script>
export default {
  name: 'display',
  data(){
    return{
    }
  },
  props: {
    msg: Object
  }
}
</script>

<style scoped>
.b {
  display: inline-block;
  vertical-align: middle;
}

.AQI {
  display: block;
  line-height: 1em;
  margin: 6px 0;
  font-size: 60px;
  font-weight: 700;
}

</style>