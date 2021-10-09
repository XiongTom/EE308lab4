const cow_skin = cc.Class({
    name:"cow_skin",
    properties:{
        cows:{
            default:[],
            type:[cc.SpriteFrame]
        }
    }
});

window.roll = {
    touzi:null,
};

cc.Class({
    extends: cc.Component,

    properties: {
        cow_set:{
            default:[],
            type:[cow_skin]
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {
        var start = 0;
        let cowSet = this.cow_set[0];
        let sprite = this.node.getComponent(cc.Sprite);
        roll.touzi = setInterval(()=>{
            if(start > 4)
                start = 0;
            sprite.spriteFrame = cowSet.cows[start]; 
            start++;
         }, 80);

         
    },


    // update (dt) {
    //     this.intervalTime += dt;
    //     let index = Math.floor(this.intervalTime / 0.2);
        
    //     index = index % 5;
    //     //cc.log(index);
    //     let cowSet = this.cow_set[0];

    //     let sprite = this.node.getComponent(cc.Sprite);
    //     sprite.spriteFrame = cowSet.cows[index];

    // },
});
