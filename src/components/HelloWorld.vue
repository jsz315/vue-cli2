<template>
  <div class="hello" ref="hello">
    <h1 @click="test">--{{ msg|formatTime }}</h1>
    <h2>Essential Links</h2>
    <p @click="run">{{total}}</p>
    <div v-for="item in books">n: {{item.n}}</div>
    <ul>
      <li>
        <router-link :to="{ name: 'about', params: { userId: 123 }}">about</router-link>
        <router-link :to="{ name: 'goods', params: { userId: 123 }}">goods</router-link>
        <router-link :to="{ name: 'books', params: { userId: 123 }}">books</router-link>
        <router-link :to="{ name: 'clothes', params: { userId: 123 }}">clothes</router-link>
        <router-link :to="{ name: 'login', params: { userId: 123 }}">login</router-link>
      </li>
    </ul>
    <Son :say="say" ref="say"></Son>
    <mt-swipe class="swiper-list" :auto="4000">
      <mt-swipe-item class="swiper-item" v-for="item in swiper" :key="item.kg_sid">
        <img class="img" :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'mint-ui';
import Son from './Son'
import { mapGetters, mapState, mapMutations } from 'vuex'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome',
      swiper: []
    }
  },
  components: { Son },
  computed: {
    ...mapState({
      total: state => state.book.list.length
    }),
    ...mapGetters({
      books: 'book/bookList'
    })
  },
  beforeMount(){
    console.log("component beforeMount");
  },
  mounted(){
    console.log("component mounted");
  },
  beforeRouteEnter(to, from, next){
      console.log("hello beforeRouteEnter");
      console.log(from);
      next();
  },
  created(){
    console.log("component created");
    fetch("/api/info", {
      method: "get"
    }).then(res=>{
      // console.log(res);
    })

    this.$axios.post("/api/swiper", {
      name: 'jsz'
    }).then(res=>{
      console.log(res.data);
      this.swiper = res.data;
    })

    this.$nextTick(()=>{
      console.log(this.$refs.hello.clientHeight + "px");
    })
  },
  methods: {
    run(){
      this.$refs.say.run();
    },
    say(str){
      alert(str);
    },
    test(){
      this.msg = "ok";
      // console.log(this.$store);
      // this.$store.commit('book/add', {n: Math.random()});
      // this.$store.dispatch("add", {num: 1});
      Toast("test")
      this.add({n: Math.random() + 3});
    },
    ...mapMutations({
      add: 'book/add' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
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
.swiper-list{
  width: 100%;
  height: 250px;
  .swiper-item{
    .img{
      width: 100%;
      height: 250px;
    }
  }
}

</style>
