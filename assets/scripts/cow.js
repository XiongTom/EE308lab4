const cow_skin = cc.Class({
    name:"cow_skin",
    properties:{
        cows:{
            default:[],
            type:[cc.SpriteFrame]
        }
    }
});

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
        this.intervalTime = 0;
    },

    start () {

    },


    update (dt) {
        this.intervalTime += dt;
        let index = Math.floor(this.intervalTime / 0.2);
        
        index = index % 5;
        //cc.log(index);
        let cowSet = this.cow_set[0];

        let sprite = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = cowSet.cows[index];
    },
});
