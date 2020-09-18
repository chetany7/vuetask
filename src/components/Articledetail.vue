<template>
  <div class="articles row">
    <h3 class="text-center">{{articleinfo.title}}</h3>
    <div class="row">
        <div class="col-md-7 left_content">
          <div class="panel panel-default">
            <div class="panel-body">{{articleinfo.intro}}</div>
            <div class="panel-body">{{articleinfo.body}}</div>
          </div>
          <p>{{articleinfo.slug}}</p>
        </div>
        <div class="col-md-5">
          <img v-bind:src="'https://strapi.lakritsroten.lightcom.dev' + articleinfo.image.url"  class="mx-auto d-block" />
          <p>{{articleinfo.status}}</p>
            <input  type="checkbox" value="articleinfo.id" :checked="articleinfo.status=='published'"
         @change="switchStatus($event)" class="statuscheckbox" >
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true
})
export default {
  name: 'Articledetail',
  data () {
    return {
      articleinfo: null,
      articleinfonew: null,
      newtemparr: [],
      apiserver: 'https://strapi.lakritsroten.lightcom.dev',
      localStorage: {
        articles: {
          type: Object,
          default: {
            hello: 'world'
          }
        }
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    load () {
      this.fetchData()
    },
    fetchData () {
      var articleid = this.$route.params.aid
      var articlestored = JSON.parse(Vue.localStorage.get('articles'))
      articlestored.forEach(function (value, index) {
        if (parseInt(articleid) === parseInt(value.id)) {
          articlestored = value
        }
      })
      this.articleinfo = articlestored
    },
    switchStatus ($event) {
      var id = this.articleinfo.id
      var tempstatus
      if ($event.target.checked) {
        tempstatus = 'published'
      } else {
        tempstatus = 'unpublished'
      }
      var articles = JSON.parse(Vue.localStorage.get('articles'))
      var newtemparr = []
      articles.forEach(function (value, index) {
        if (parseInt(id) === parseInt(value.id)) {
          value.status = tempstatus
        }
        newtemparr.push(value)
      })
      console.log(newtemparr)
      Vue.localStorage.set('articles', JSON.stringify(newtemparr))
      this.load()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
table {
  width:100%;
}
img {
  width:100%;
}
.left_content {
  text-align:justify;
}
</style>
