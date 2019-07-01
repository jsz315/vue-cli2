<template>
    <div class="son" @click="test">
      <p>{{msg}}</p>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapState, mapMutations } from 'vuex'
  
  export default {
    name: 'Son',
    props: {
        say: {
            type: Function
        }
    },
    data () {
      return {
        msg: 'son'
      }
    },
    computed: {
      ...mapState({
        total: state => state.book.list.length
      }),
      ...mapGetters({
        books: 'book/bookList'
      })
    },
    beforeMount(){
      console.log("son beforeMount");
    },
    mounted(){
      console.log("son mounted");
    },
    created(){
      console.log("son created");
    },
    beforeRouteupdate(to, from, next){
      console.log("beforeRouteupdate");
      console.log(to);
      next();
    },
    methods: {
        run(){
            alert("run");
        },
      test(){
        this.say(this.msg);
      },
      ...mapMutations({
        add: 'book/add' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
      })
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
  </style>
  