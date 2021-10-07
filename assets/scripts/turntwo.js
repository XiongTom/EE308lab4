// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        contentc:{
            type: cc.Node,
            default: null,
        },
        speed: 300,    
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    // onSetNum({num = 5}){
    //     //获取数字Label的个数
    //     let childCount = this.node_layout.getChildren().length;
    //     //求出单位y值
    //     let unit_y = this.node_layout.height / childCount;
    
    //     cc.tween(this.node_layout)
    //       .to(0.5, {position: cc.v2(this.node_layout.x, num * unit_y + unit_y / 2)}, {easing: "quadInOut"})
    //       .start();
    //   },
    
    start () {
        
        // var level = {
        //     one: '状元插金花！',
        //     two: '六红六子', // 六子
        //     three: '五红五子', // 五子
        //     four: '普通状元',
        //     five: '对堂',
        //     six: '三红',
        //     seven: '四进',
        //     eight: '二举',
        //     nine: '一秀',
        //     ten: '没有奖哦亲~~~~~'
        // },
        // this_level; // 存储当前等级
        
        // this.randomNum = Math.floor(Math.random()*6) + 1;
        //this.set_value(1);

        //this.roll_tonum(3);


    },

    

    set_value(value){
        this.num_height = this.contentc.height/12;
        this.star_y_num = this.num_height * 0.5;
        this.now_value = 0;
        this.contentc.y = this.star_y_num;
        this.randomNum = 1;

        if(value > 6 || value < 1){
            return;
        }
        this.now_value = value;
        this.contentc.y = this.star_y_num + (this.now_value - 1) * 100;
        
    },



    roll_tonum(value){
        if(value > 6 || value < 1)
            return;
        if(value < this.now_value){
            var x = value;
            //value += 6;
            var move_s = (this.now_value - x) * this.num_height;
            var time = move_s/this.speed;
            var m = cc.moveTo(time, 0, this.contentc.y - move_s);
            
            m.easing(cc.easeCubicActionInOut());
            this.contentc.runAction(m);
            this.now_value = x;
        }
        else{
            var move_s = (value - this.now_value) * this.num_height;
            var time = move_s / this.speed;
            var m = cc.moveTo(time, 0, this.contentc.y + move_s);
            m.easing(cc.easeCubicActionInOut());
            this.contentc.runAction(m);
            this.now_value = value;
        }
    },
    
    playing(){
        cc.log("dddddd");
    },


    // update (dt) {},
});
