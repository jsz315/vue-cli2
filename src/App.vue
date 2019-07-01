<template>
  <div id="app">
    <transition name="slide-right">
      <router-view class="router"/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  props: ['num'],
  beforeMount(){
    console.log("app beforeMount", this.num);
  },
  mounted(){
    console.log("app mounted", this.num);
  },
  created(){
    console.log("app created", this.num);
  }
}
</script>

<style lang="less">
@import './comm.less';
.logo{
  width: 750px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @fontcolor;
}
.router{
  position: relative;
  width: 100%;
  transition: all .8s ease;
  top: 40px;
}
.slide-left-enter,
.slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
