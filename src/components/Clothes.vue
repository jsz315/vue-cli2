<template>
    <mt-loadmore class="boxs" v-infinite-scroll="loadBottom" :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="all">
            <div class="left" ref="left">
                <ClothesItem :list="left"></ClothesItem>
            </div>
            <div class="right" ref="right">
                <ClothesItem :list="right"></ClothesItem>
            </div>
            <div class="top" @click="goTop"></div>
        </div>
    </mt-loadmore>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapState, mapMutations } from 'vuex'
import { Loadmore } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import VueLazyLoad from 'vue-lazyload'
import ClothesItem from './ClothesItem'
import { Indicator } from 'mint-ui';

Vue.use(InfiniteScroll);
Vue.component(Loadmore.name, Loadmore);

Vue.use(VueLazyLoad,{
    // error:'./static/error.png',
    // loading:'./static/loading.png'
})

export default {
    name: 'Clothes',
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
            left: [],
            right: []
        }
    },
    components: {ClothesItem},
    computed: {
        
    },
    beforeMount(){
        console.log("clothes beforeMount");
    },
    mounted(){
        console.log("clothes mounted");
        this.loadData();
    },
    created(){
        console.log("clothes created");
    },
    beforeRouteEnter(to, from, next){
        console.log("clothes beforeRouteEnter");
        console.log(from);
        next();
    },
    methods: {
        goTop(){
            let div = document.querySelector(".boxs");
            let aim = 0;
            let cur = div.scrollTop;
            let v = 0.9;
            let timer = setInterval(()=>{
                let y = div.scrollTop + (aim - div.scrollTop) * 0.2;
                div.scrollTop = y;
                if(Math.abs(aim - y) < 1){
                    clearInterval(timer);
                    console.log("scroll over");
                }
            }, 30)
        },
        loadData(){
            if(this.loading){
                return;
            }
            Indicator.open({
                text: 'Loading...',
                spinnerType: 'fading-circle'
            });
            this.loading = true;
            this.$axios.post("/api/clothes", {
                name: 'jsz'
            }).then(res=>{
                res.data.forEach((item, index)=>{
                    setTimeout(() => {
                        if(this.$refs.left.offsetHeight < this.$refs.right.offsetHeight){
                            this.left.push(item);
                        }
                        else{
                            this.right.push(item);
                        }
                    }, index * 20);
                })
                setTimeout(()=>{
                    Indicator.close();
                    this.loading = false;
                }, 900)
                
            })
        },
        showWord(str){
            return `"` + str + `"`;
        },
        loadTop(){
            console.log("loadTop");
            this.$refs.loadmore.onTopLoaded();
            this.left = [];
            this.right = [];
            this.loadData();
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

.all{
    text-align: center;
    font-size: 0;
}
.left{
    display: inline-block;
    width: 46vw;
    margin-right: 3vw;
    vertical-align: top;
}
.right{
    display: inline-block;
    width: 46vw;
    vertical-align: top;
}
.item{
    position: relative;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    .img{
        width: 100%;
    }
    .name{
        color: black;
        font-size: 16px;
        background: #f32727;
        text-align: center;
    }
}
.top{
    width: 80px;
    height: 90px;
    background: url('../assets/top.png') no-repeat center;
    background-size: contain;
    position: fixed;
    right: 10px;
    bottom: 30px;
    z-index: 1;
}
</style>
