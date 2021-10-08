// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var len = member.num;
        var x = new Array(len);
        var y = new Array(len);
        var point = 0;
        for(var j = 0; j < len ; j++){
            x[j] = paiming.nums[j];
        }   
        x.sort();
        var point = 0;
        for(var j = 0; j < len; j++){
            for(var i = 0; i < len ; i++){
                if(x[point] == paiming.nums[i]){
                    if(y.includes(i) == false){
                        y[point] = i;
                        point++;
                        break;
                    }
                }
            }
        }
        for(var i = 0; i < len; i++){
            var temp = x[i];
            cc.log(temp);
        }
    
        for(var i = 0; i < len; i++){
            var temp = y[i];
            cc.log(temp);
            
        }
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
