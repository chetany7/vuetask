<template>
  <div class="articles row">
    <h1> All Articles</h1>
    <table class="table">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Intro</th>
          <th scope="col">Created At</th>
          <th scope="col">Updated At</th>
          <th scope="col">Slug</th>
          <th scope="col">Status</th>
        </tr>
        <tr v-for="singlearticle in articleinfo" v-bind:key="singlearticle.id">
          <td><router-link :to="{ name: 'Articledetail', params: {aid: singlearticle.id } }"><img width=100 v-bind:src="'https://strapi.lakritsroten.lightcom.dev' + singlearticle.image.url" /></router-link></td>
          <td>
            <router-link :to="{ name: 'Articledetail', params: {aid: singlearticle.id } }">{{singlearticle.title}}</router-link>
          </td>
          <td>{{singlearticle.intro}}</td>
          <td>{{singlearticle.created_at}}</td>
          <td>{{singlearticle.updated_at}}</td>
          <td>{{singlearticle.slug}}</td>
          <td>{{singlearticle.status}}</td>
        </tr>
    </table>
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
  name: 'Article',
  data () {
    return {
      articleinfo: null,
      localStorage: {
        articles: {
          type: Object,
          default: {
            hello: 'world'
          }
        },
        someNumber: {
          type: Number
        },
        someBoolean: {
          type: Boolean
        },
        stringOne: '',
        stringTwo: {
          type: String,
          default: 'helloworld!'
        },
        stringThree: {
          default: 'hello'
        }
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.articleinfo = JSON.parse(Vue.localStorage.get('articles'))
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
</style>
