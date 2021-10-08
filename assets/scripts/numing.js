window.member = {
    num:null,
};

window.paiming = {
    nums:[0,0,0,0,0,0,0,0,0,0],
};
cc.Class({
    extends: cc.Component,
    properties: {
        // ...
        // score label 的引用
        scoreDisplay: {
            default: null,
            type: cc.Label
        }
    },
    // LIFE-CYCLE CALLBACKS:
    onLoad: function () {
        // ...
        member.num = 2;
    },
    
    start() { 
    },

    loseScore:function(){
        if(member.num > 2)
            member.num -= 1;
        this.scoreDisplay.string = member.num;
    },

    gainScore: function () {
        if(member.num < 10)
            member.num += 1;
        this.scoreDisplay.string = member.num;
    },
    
});



