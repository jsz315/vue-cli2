<template>
    <div class="login">
        <mt-field label="账户：" placeholder="请输入您的账户" v-model="username"></mt-field>
        <mt-field label="密码：" placeholder="请输入您的密码" type="password" v-model="password"></mt-field>
        <mt-button type="primary" size="large" @click="login">登陆</mt-button>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapState, mapMutations } from 'vuex'
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';

// Vue.use(MintUI)
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);

export default {
name: 'Login',
props: {
    say: {
        type: Function
    }
},
data () {
    return {
        msg: 'son',
        username: "",
        password: ""
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
    login(){

        alert(`name=${this.username} password=${this.password}`);
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
<style lang="less">
.login{
    padding: 32px 0;
    .mint-button{
        background-color: #f35858;
        width: 80%;
        margin: 90px auto;
    }
    .mint-field{
        width: 80%;
        margin: auto;
    }
    .mint-cell-wrapper{
        padding: 0!important;
        background-origin: content-box!important;
    }
    .mint-cell-title{
        text-align: left;
        padding-left: 20px;
        width: 150px;
    }
}
</style>
