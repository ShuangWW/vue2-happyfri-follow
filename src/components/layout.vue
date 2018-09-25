<template>
    <div class="layout-container">
        <header class="top_tips">
            <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
            <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
        </header>
        <div class="main">
            <template v-if="fatherComponent == 'home'">
                <div class="home_logo item_container_style"></div>
                <router-link to="item" class="start button_style"></router-link>
            </template>            
            <template v-else>
                <div class="item_back item_container_style">
                    <div class="item_list_container">
                        <header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
                        <ul>
                            <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" :key="index" class="item_list" @click="choosed(index,item.topic_answer_id)">
                                <span class="option_style" :class="{'has_choosed':choosedNum==index}">{{choseType(index)}}</span>
                                <span class="option_detail">{{item.answer_name}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <span class="next_item button_style" v-if="itemNum < itemDetail.length" @click="nextItem"></span>
                <span class="submit_item button_style" v-else @click="submitAnswer"></span>
            </template>
        </div>
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
    name:'Layout',
    data(){
        return {
            choosedNum:null,
			choosedId:null 
        }
    },
    props:['fatherComponent'],
    computed:mapState([
        'level',
        'itemNum',
        'itemDetail',
  		'timer', //计时器
    ]),
    created:function(){
        if(this.fatherComponent == 'home'){
            this.initializeData();
        }
    },
    methods:{
        ...mapActions([
            'addNum',
            'initializeData'
        ]),
        choseType(index){
            switch(index){
                case 0:
                    return 'A';
                case 1:
                    return 'B';
                case 2:
                    return 'C';
                case 3:
                    return 'D';
            }
        },
        choosed(index,id){
            this.choosedNum = index;
            this.choosedId = id;
        },
        nextItem(){
            if(this.choosedNum != null){
                this.choosedNum = null;
                this.addNum(this.choosedId)
            }else{
                alert('您还没有选择答案哦')
            }
        },
        submitAnswer(){
            if(this.choosedNum != null){
                this.addNum(this.choosedId)
                clearInterval(this.timer)
                this.$router.push('score')
            }else{
                alert('您还没有选择答案哦')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .layout-container{        
        width: 100%;
        height: 100%;
        background: url(../images/1-1.jpg) no-repeat;
        background-size: 100% 100%;
        z-index: 0;
    }
    .top_tips{
        position: absolute;
        height: 7.35rem;
        width: 3.25rem;
        top: -1.3rem;
        right: 1.6rem;
        background: url(../images/WechatIMG2.png) no-repeat;
        background-size: 100% 100%;
        z-index: 10;
		.num_tip{
			position: absolute;
			left: 0.48rem;
			bottom: 1.1rem;
			height: 0.7rem;
			width: 2.5rem;
			font-size: 0.6rem;
			font-family: '黑体';
			font-weight: 600;
			color: #a57c50;
			text-align: center;
		}
    }
    .button_style{
        display: block;
        height: 2.1rem;
        width: 4.35rem;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        margin-left: -2.4rem;
        background-repeat: no-repeat;
        background-size: 100% 100%
    }
    .start{
        background-image: url(../images/1-4.png)
    }
    .next_item{
        background-image: url(../images/2-2.png)
    }
    .submit_item{
        background-image: url(../images/3-1.png)
    }
    .item_container_style{
        height: 11.625rem;
        width: 13.15rem;
        position: absolute;
        top: 4.1rem;
        left: 1rem;
    }
	.home_logo{
		background-image: url(../images/1-2.png);
		background-size: 13.142rem 100%;
		background-position: right center;
	}
	.item_back{
		background-image: url(../images/2-1.png);
		background-size: 100% 100%;
        .item_list_container{
            position: absolute;
            height: 7.0rem;
            width: 8.0rem;
            top: 2.4rem;
            left: 3rem;
            -webkit-font-smoothing:antialiased;
            .item_title{
                font-size: 0.65rem;
                color: #fff;
                line-height: 0.7rem;
            }
            .item_list{
                margin-top: 0.4rem;
                width: 10rem;
                font-size: 0;
                span{
                    display: inline-block;
                    color: #fff;
                    vertical-align: middle;
                    font-size: 0.6rem;
                }
                .option_style{
                    height: 0.725rem;
                    width: 0.725rem;
                    border:1px solid #fff;
                    border-radius: 50%;
                    line-height: 0.725rem;
                    text-align: center;
                    margin-right: 0.3rem;
                    font-size: 0.5rem;
                    font-family: 'Arial'
                }                
                .has_choosed{
                    background-color: #ffd400;
                    color: #575757;
                    border-color: #ffd400;
                }
                .option_detail{
                    width: 7.5rem;
                    padding-top: 0.11rem;
                }
            }
        }
    }
</style>


