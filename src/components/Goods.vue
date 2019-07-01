<template>
    <mt-loadmore class="boxs" v-infinite-scroll="loadBottom" :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="all">
            <div class="left" ref="left">
                <div class="item" v-for="(item, index) in left" :key="item.id">
                    <img class="img" :src="item.img">
                    <div class="name">{{item.name}}</div>
                </div>
            </div>
            <div class="right" ref="right">
                <div class="item" v-for="(item, index) in right" :key="item.id">
                    <img class="img" :src="item.img">
                    <div class="name">{{item.name}}</div>
                </div>
            </div>
        </div>
    </mt-loadmore>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapState, mapMutations } from 'vuex'
import { Loadmore } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
Vue.component(Loadmore.name, Loadmore);

export default {
    name: 'Good',
    props: {
        say: {
            type: Function
        }
    },
    data () {
        return {
            msg: 'about',
            allLoaded: false,
            left: [],
            right: []
        }
    },
    computed: {
        
    },
    beforeMount(){
        console.log("goods beforeMount");
    },
    mounted(){
        console.log("goods mounted");
        this.loadData();
    },
    created(){
        console.log("goods created");
    },
    beforeRouteEnter(to, from, next){
        console.log("goods beforeRouteEnter");
        console.log(from);
        next();
    },
    methods: {
        loadData(){
            this.$axios.post("/api/goods", {
                name: 'jsz'
            }).then(res=>{
                console.log(res.data);
                res.data.list.forEach((item, index)=>{
                    setTimeout(() => {
                        console.log(this.$refs.left.offsetHeight, this.$refs.right.offsetHeight)
                        if(this.$refs.left.offsetHeight < this.$refs.right.offsetHeight){
                            this.left.push(item);
                        }
                        else{
                            this.right.push(item);
                        }
                    }, index * 30);
                })

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
    margin-left: 1vw;
    margin-right: 1vw;
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
        background: #f6f6f6;
        text-align: center;
    }
}
</style>
