window.member = {
    num:null,
};

window.paiming = {
    nums:[0,0,0,0,0,0,0,0,0,0],
};

window.TheNum = {
    num: null,
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
        for(var i = 0; i < 10; i++){
            paiming.nums[i] = 0;
        }
        TheNum.num = 0;
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



