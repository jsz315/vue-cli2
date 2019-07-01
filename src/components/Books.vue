<template>
    <div class="boxs" v-infinite-scroll="loadBottom" ref="loadmore">
        <div class="all">
            <div class="item" v-for="(item, index) in list" :key="item.id">
                <img class="img" :src="item.img">
                <div class="name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapState, mapMutations } from 'vuex'
import { Loadmore } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
// import { Lazyload } from 'mint-ui';

// Vue.use(Lazyload);
Vue.use(InfiniteScroll);
Vue.component(Loadmore.name, Loadmore);

export default {
    name: 'List',
    props: {
        say: {
            type: Function
        }
    },
    data () {
        return {
            msg: 'about',
            allLoaded: false,
            loading: false,
            list: []
        }
    },
    computed: {
        
    },
    beforeMount(){
        console.log("list beforeMount");
    },
    mounted(){
        console.log("list mounted");
        this.loadData();
    },
    created(){
        console.log("list created");
    },
    beforeRouteEnter(to, from, next){
        console.log("about beforeRouteEnter");
        console.log(from);
        next();
    },
    methods: {
        loadData(){
            if(this.loading){
                return;
            }
            this.loading = true;
            this.$axios.post("/api/goods", {
                name: 'jsz'
            }).then(res=>{
                console.log(res.data);
                this.list.push(...res.data.list);
                this.loading = false;
            })
        },
        loadTop(){
            console.log("loadTop");
            // this.$refs.loadmore.onTopLoaded();
        },
        loadBottom(){
            console.log("loadBottom");
            // this.allLoaded = true;// if all data are loaded]
            // this.$refs.loadmore.onBottomLoaded();
            this.loadData();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.boxs{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    background: #fff;
}
image[lazy=loading] {
  width: 100%;
  height: 100px;
  margin: auto;
  background: #f00;
}
.all{
    text-align: center;
    font-size: 0;
}
.item{
    position: relative;
    width: 60%;
    margin-top: 10px;
    margin-bottom: 10px;
    .img{
        width: 100%;
    }
    .name{
        color: black;
        font-size: 16px;
        background: #f6f6f6;
        text-align: center;
    }
}
</style>
