<template>
    <div class="son" @click="test">
      <p>{{msg}}</p>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapState, mapMutations } from 'vuex'
  
  export default {
    name: 'About',
    props: {
      say: {
        type: Function
      }
    },
    data () {
      return {
        msg: 'about'
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
      this.msg = "param: " + this.$route.params.userId;
    },
    created(){
      console.log("son created");
    },
    beforeRouteEnter(to, from, next){
      console.log("about beforeRouteEnter");
      console.log(from);
      next();
    },
    methods: {
        run(){
          alert("run");
        },
      test(){
        this.$router.back(-1);
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
  