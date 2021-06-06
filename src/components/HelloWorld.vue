<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="newsArea form">
      測站
      <select v-model="selectedCounty" @change="selectCountry">
          <option v-for="County in Counties" :key="County">{{County}}</option>
      </select>
      ---
      <select v-model="selectedSiteName">
          <option v-for="item in getSiteNames" :key="item">{{item}}</option>
      </select>
    </div>
    <div v-if="displayData">
      <display :msg="displayData"></display>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import display from './display.vue'

export default {
  name: 'HelloWorld',
  components: {
    display
  },
  data(){
    return{
      rawdata:[],
      Counties:[],
      SiteNames:[],
      selectedCounty: "苗栗縣",
      selectedSiteName: "頭份"
    }
  },
  computed:{
    getSiteNames: function(){
      let returnSiteNames = []
      this.SiteNames.forEach(element => {
        if (element.County === this.selectedCounty){
          returnSiteNames.push(element.SiteName)
        }
      });
      return returnSiteNames
    },
    displayData: function(){
      return this.rawdata.find((element)=>{
        return (element.County===this.selectedCounty & element.SiteName===this.selectedSiteName)
      })
    }
  },
  methods:{
    selectCountry(){
      this.selectedSiteName=this.getSiteNames[0];
    },
  },
  props: {
    msg: String
  },
  created () {
    axios
      .get('/api/v1/aqx_p_432?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json')
      .then(response => {
        // insert raw data
        this.rawdata = response.data.records
        // insert County arr
        response.data.records.forEach(element => {
          if (!this.Counties.includes(element.County)){
            this.Counties.push(element.County)
          }
        });
        // insert SiteNames obj
        response.data.records.forEach(element => {
          this.SiteNames.push({County:element.County, SiteName:element.SiteName})
        });
      })
      .catch(function (error) { 
        console.log(error);
      });
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

.newsArea {
  padding: 1rem;
  border: .5rem;
  position: relative;
  overflow: visible;
  height: 100%;
  background: #0000001c;
}

.form {
  /* display: table-cell; */
  width: 100%;
}

select {
  /* width: 100%; */
  padding: 14px 30px 14px 15px;
  font-size: 16px;
}
</style>
