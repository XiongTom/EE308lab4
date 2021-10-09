var y = ['NO','NO','NO','NO','NO','NO','NO','NO','NO','NO'];
cc.Class({
    extends: cc.Component,

    properties: {
        rankone:{
            default:null,
            type:cc.Label
        },
        ranktwo:{
            default:null,
            type:cc.Label
        },
        rankthree:{
            default:null,
            type:cc.Label
        },
        rankfour:{
            default:null,
            type:cc.Label
        },
        rankfive:{
            default:null,
            type:cc.Label
        },
        ranksix:{
            default:null,
            type:cc.Label
        },
        rankseven:{
            default:null,
            type:cc.Label
        },
        rankeight:{
            default:null,
            type:cc.Label
        },
        ranknine:{
            default:null,
            type:cc.Label
        },
        rankten:{
            default:null,
            type:cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        y = ['NO','NO','NO','NO','NO','NO','NO','NO','NO','NO'];
    },

    start () {
        var len = member.num;
        var x = new Array(len);//存放分数
        var point = 0;
        for(var j = 0; j < len ; j++){
            x[j] = paiming.nums[j];
        }   
        x.sort();
        var point = len - 1;//x的指针
        var pointY = 0;//y的指针
        for(var j = 0; j < len; j++){
            for(var i = 0; i < len ; i++){
                if(x[point] == paiming.nums[i]){
                    if(y.includes(i + 1) == false){
                        y[pointY] = i + 1;
                        point--;
                        pointY++;
                        break;
                    }
                }
            }
        }
         var lenFor = len - 1;
        for(var i = 0; i < len; i++){
            var temp = x[i];
            cc.log(temp);
        }

        this.rankone.string = "player" + y[0];
        this.ranktwo.string = "player" + y[1];
        this.rankthree.string = "player" + y[2];
        this.rankfour.string = "player" + y[3];
        this.rankfive.string = "player" + y[4];
        this.ranksix.string = "player" + y[5];
        this.rankseven.string = "player" + y[6];
        this.rankeight.string = "player" + y[7];
        this.ranknine.string = "player" + y[8];
        this.rankten.string = "player" + y[9];

            


        
        // for(var i = 0; i < len; i++){
        //     if(x[point] == paiming.nums[i]){
        //         if(y.includes(i) == false){
        //             y[point] = i;
        //             point++;
        //             break;
        //         }
        //     }
        // }
    },

    // update (dt) {},
});
