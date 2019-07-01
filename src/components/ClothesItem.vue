<template>
       
    <div class="list">
        <div class="item" v-for="(item, index) in list" :key="item.RESOURCEID">
            <img class="img" v-lazy="item.TBGOODSLINK">
            <div class="name">{{item.TITLE}}</div>
            <div class="price">价格：{{item.GOODSPRICE}}</div>
        </div>
    </div>
            
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapState, mapMutations } from 'vuex'
import { Loadmore } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import VueLazyLoad from 'vue-lazyload'

Vue.use(InfiniteScroll);
Vue.component(Loadmore.name, Loadmore);

Vue.use(VueLazyLoad,{
    // error:'./static/error.png',
    // loading:'./static/loading.png'
})

export default {
    name: 'ClothesItem',
    props: {
        list: {
            type: Array
        }
    },
    data () {
        return {
           
        }
    },
    computed: {
        
    },
    beforeMount(){
        console.log("item beforeMount");
    },
    mounted(){
        console.log("item mounted");
    },
    created(){
        console.log("item created");
    },
    beforeRouteEnter(to, from, next){
        console.log("item beforeRouteEnter");
        console.log(from);
        next();
    },
    methods: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.list{
    
}
.item{
    position: relative;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
    .img{
        width: 100%;
    }
    .name{
        color: black;
        font-size: 16px;
        background: #f6f6f6;
        width: 100%;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .price{
        color: rgb(5, 55, 190);
        font-size: 14px;
    }
}
</style>
