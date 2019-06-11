<template>
<div>
    <div class="search_detail">
        详情有人
    </div>
</div>
</template>
<script>
import {mapState,mapActions}  from 'vuex';
export default {
    data(){
        return{
            list:[],
        
        }
    },
   async mounted() { 
      await  this.getshopdetail(this.$mp.query.id)
      console.log(this.getshopList,'nnnn.....')
    },
    computed: {
        ...mapState({
            getshopList:state=>state.search.getshopList
        })
    },
    methods: {
        ...mapActions({
            getshopdetail:'search/getshopdetail'
        })
        
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