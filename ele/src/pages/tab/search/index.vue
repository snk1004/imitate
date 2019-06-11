<template>
<div>
    <div class="header_search">
       <div>
            <input placeholder="请输入商家或美食名称" v-model="title" />  
            <button @click="gotosearch(title)">提交</button>
            <span v-if="title" @click="deltitle('title')" >×</span>
        </div>
    </div>
    <div class="section_search" v-if="search_box" >
        <p v-if="list.length">
            <span>搜索历史</span> 
        </p>
        <div class="search_content">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <span>{{item}}</span>
                    <span @click="deltitle(index)">× </span>
                </li>
                <li v-if="list.length">
                    <p @click="deltitle('all')">清空搜索历史</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="search_order" v-if="!search_box">
        <ul class="ullist">
            <p  :class="flag?'active':''">{{flag?search_title:defaule_title}}</p>
            <li v-for="item in searchList" :key="item.id" @click="gotoDetail(item.id)" >
                <img :src="item.image_path" alt="" mode="aspectFit"/>
                <div class="order_list">
                    <p>{{item.name}}</p>
                    <p>月售 {{item.recent_order_num}} 单</p>
                    <p>
                        <span>{{item.float_minimum_order_amount}} 元起送</span> /
                        <span>距离{{item.distance}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import {mapState,mapActions}  from 'vuex';
export default {
    data(){
        return{
            list:[],
            title:'',
            search_box:true,
            defaule_title:'商家',
            search_title:'很抱歉！无搜索结果',
            flag:false,//控制无商家的时候显示是否有结果
        }
    },
    mounted() {
        try {
        var value = wx.getStorageSync('list')
        if (value) {
            this.list=JSON.parse(value)
        }
        } catch (e) {
            this.list=[]
        }
    },
    computed: {
        ...mapState({
            searchList:state=>state.search.searchList
        })
    },
    methods: {
        ...mapActions({
            getMerchants:'search/getMerchants'
        }),
            async gotosearch(val){//调用搜索
                    let search='search'
                    let obj={
                        geohash:'40.041898,116.300096',
                        keyword:val,
                        type: search
                    } 
            await this.getMerchants(obj)  
            this.list.push(val)
            wx.setStorage({
            key:"list",
            data:JSON.stringify(this.list)
            })
            //拼接返回的图片url
            this.searchList.forEach(item=>item.image_path=`https://elm.cangdu.org/img/`+item.image_path)
            this.search_box=false//隐藏搜索历史
            if(this.searchList.length){//查看返回的数据是否为空
                this.flag=false
            }else{
                this.flag=true
            }
            
        },
        deltitle(ind){ //点击删除小按键的时候判断点击的是哪个--》删除value---》删除搜索历史
            if(ind==='title'){ 
                this.title=''
            }else if(ind==='all'){
                this.list=[]
            }else{
                let inds=this.list.findIndex((item,index)=>index===ind)
                this.list.splice(inds,1) 
            }
            wx.setStorage({
            key:"list",
            data:JSON.stringify(this.list)
            })
        },
        gotoDetail(id){
            wx.navigateTo({
                url: './detail/main?id='+id,
            });
        }
    }
  
}
</script>
<style lang="scss" scoped>
.header_search{
    background-color: #ffffff;
    position: fixed;
    z-index: 105;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    >div{
        width: 100%;
        height: 100%;
        padding:0 10px; 
        display: flex;
        position: relative;
        box-sizing: border-box;
        >input{
            height: 35px;
            flex: 1;
            border:1px solid #e4e4e4;
            font-size: 14px;
            color: #333;
            font-weight: 700;
            border-radius: 3px;
            padding:0 10px;
            background: #f5f5f5; 
            box-sizing: border-box;
            margin-top: 8px;
            outline: none;
        }
        >button{
            width: 70px;
            margin-left: 3px;
            height: 35px;
            border:0;
            font-size: 14px;
            font-weight: 700;
            color: #fff;
            border-radius: 3px;  
            box-sizing: border-box;
            margin-top: 8px;
            background: #3190e8;
        } 
        >span{
            position: absolute;
            right: 100px;
            top: -2px;
            color: #666;
            z-index: 105;
        }
    }
}
.section_search{
    width: 100%;
    margin-top: 50px;
    >p{
        width: 100%;
        display: flex;
        justify-content: space-between; 
        color: #666;
        font-size: 14px;
        padding: 12px 10px;
        box-sizing: border-box;
        background: #f5f5f5;
        font-weight: 700;
    }
    >.search_content{
        width: 100%;
        background: #fff;
        >ul{
            width: 100%; 
            font-size: 14px;
            >li{
                width: 100%;
                border-bottom: 1px solid #eee;
                padding:8px 10px;
                box-sizing: border-box;
                color: #333;
                display: flex;
                justify-content: space-between;
                align-items: center;
                >span:nth-child(2){
                    color:#ccc;
                    font-size: 22px;
                }
            }
            >li:last-child{
                width: 100%;
                color: #3190e8;
                font-weight: 700;
                font-size: 16px;
                padding: 12px 10px;
                >p{
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }
}
.search_order{
    width: 100%;
    margin-top: 50px;
        >ul{
            width: 100%;
            >p{
                width: 100%;
                height: 40px; 
                background: #f5f5f5;
                padding: 10px;
                box-sizing: border-box;
                font-size: 16px;
                display: flex;
            }
            >p.active{
                justify-content:center;
                background: #fff;
            }
        } 
}
.ullist>p{
    border-top: 1px solid #ccc;
}
.ullist>li{
    width: 100%;
    display: flex;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    >img{
        width: 40px;
        height: 40px;
    }
}
.order_list{
    flex: 1;
    font-size: 14px;
    margin:0 5px 0 10px;
    background: #fff;
    >p:nth-child(3){
        border-bottom: 1px solid #eee;
        padding-bottom: 5px;
        box-sizing: border-box;
    }
}
</style>
