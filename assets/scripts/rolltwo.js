// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.TheNum = {
    num: null,
};



cc.Class({
    extends: cc.Component,

    properties: {

    },

    countRank(value){

    },

    start () {
        
        var level = {
            one: '状元插金花！',
            two: '六红六子', // 六子
            three: '五红五子', // 五子
            four: '普通状元',
            five: '对堂',
            six: '三红',
            seven: '四进',
            eight: '二举',
            nine: '一秀',
            ten: '没有奖哦亲~~~~~'
        },
        this_level; // 存储当前等级
        var out = 0;
    //  存储当前随机数组
        var NumberArr = [];
        if(TheNum.num == null){
            TheNum.num = 1;
        }
        else 
            TheNum.num += 1;
        var numMax = member.num;
        
        if(TheNum.num > numMax){
            TheNum.num = 1;
        }
        

    //  生成随机数据
    var a = Math.floor(Math.random() * 6) + 1,
        b = Math.floor(Math.random() * 6) + 1,
        c = Math.floor(Math.random() * 6) + 1,
        d = Math.floor(Math.random() * 6) + 1,
        e = Math.floor(Math.random() * 6) + 1,
        f = Math.floor(Math.random() * 6) + 1;
        g = TheNum.num;
        cc.log(g);
        
        cc.find("Canvas/rolling").getComponent("turnaround").set_value(a);
        cc.find("Canvas/rollingtwo").getComponent("turntwo").set_value(b);
        cc.find("Canvas/rollingt").getComponent("turnaround").set_value(c);
        cc.find("Canvas/rollingf").getComponent("turnaround").set_value(d);
        cc.find("Canvas/rollingfive").getComponent("turnaround").set_value(e);
        cc.find("Canvas/rollingsix").getComponent("turnaround").set_value(f);
        cc.find("Canvas/who").getComponent("turnaround").set_value(g);
    // 数据进入数组，排序
    NumberArr.push(a, b, c, d, e, f);
    NumberArr.sort();
    
    //存储当前 “四” 的个数
    var isfour = 0;
    
    for (var i = 0; i < NumberArr.length; i++) {
        if (NumberArr[i] == 4) {
            isfour = isfour + 1;
        }
    }
    
    // 判断 “四” 的个数属于哪一等级;
    switch (isfour) {
        case 1:
            for (var i = 0; i < NumberArr.length; i++) {
                //存储当前相同的数量，判断是否为四进
                var ContrastArr = [];
                for (var j = 0; j < NumberArr.length; j++) {
                    if (NumberArr[i] == NumberArr[j]) {
                        ContrastArr.push(NumberArr[j]);
                    }
                }
            }
            // 等到上面遍历执行完再进行判断属于哪个级别
            if (ContrastArr.length === 4) {
                this_level = level.seven; //四进
                cc.find("Canvas/answer").getComponent("turnaround").set_value(4);
                out = 3;
                break;
            } else if (ContrastArr.length === 5) {
                this_level = level.three; //五红
                cc.find("Canvas/answer").getComponent("turnaround").set_value(1);
                out = 7;
                break;
            } else if (ContrastArr.length === 6) {
                this_level = level.two; //六红
                cc.find("Canvas/answer").getComponent("turnaround").set_value(1);
                out = 8;
                break;
            } else {
                // 判断一下，是 "对堂"" or ”一秀“，对堂就是顺子，123456，一秀就是一个只有4；
                var isContinuityArray = false;
                var array = NumberArr;
                var arrayCount = array.length;
                for (var i = 0; i < arrayCount; i++) {
                    var currentArr = Number(array[i]) + 1;
                    var nestArr = Number(array[i + 1]);
                    if (i + 1 == arrayCount) {
                        currentArr = Number(array[i]);
                        nestArr = Number(array[i]);
                    }
                    if (currentArr != nestArr) {
                        isContinuityArray = false;
                        break;
                    } else {
                        isContinuityArray = true;
                    }
                }
                if (isContinuityArray) {
                    this_level = level.five;
                    cc.find("Canvas/answer").getComponent("turnaround").set_value(2);
                    out = 5;
                    break;
                } else {
                    this_level = level.nine;
                    cc.find("Canvas/answer").getComponent("turnaround").set_value(6);
                    out = 1;
                    break;
                }
            };
            break;
        case 2:
            for (var i = 0; i < NumberArr.length; i++) {
                var ContrastArr = [];
                for (var j = 0; j < NumberArr.length; j++) {
                    if (NumberArr[i] == NumberArr[j]) {
                        ContrastArr.push(NumberArr[j]);
                    }
                }
                // 判断是 4进 or 二举
                if (ContrastArr.length === 4) {
                    this_level = level.seven;
                    cc.find("Canvas/answer").getComponent("turnaround").set_value(4);
                    out = 3;
                    break;
                } else {
                    this_level = level.eight;
                    cc.find("Canvas/answer").getComponent("turnaround").set_value(5);
                    out = 2;
                }
            };
            break;
        case 3:
            this_level = level.six;
            cc.find("Canvas/answer").getComponent("turnaround").set_value(3);
            out = 4;
            break;
        case 4:
            // 判断是 "普通状元" or "状元插金花"，普通就是4个四，插金花就是  4个四 + 2个1 ；
            var one = 0;
            for (var i = 0; i < NumberArr.length; i++) {
                if (NumberArr[i] === 1) {
                    one = one + 1;
                }
            }
            if (one == 2) {
                this_level = level.one; // 插金花
                cc.find("Canvas/answer").getComponent("turnaround").set_value(1);
                out = 9;
            } else {
                this_level = level.four; //普通状元
                cc.find("Canvas/answer").getComponent("turnaround").set_value(1);
                out = 6;
            }
            break;
        case 5:
            this_level = level.three; // 五红五子
            cc.find("Canvas/answer").getComponent("turnaround").set_value(1);
            out = 7;
            break;
        case 6:
            this_level = level.two; //六红六子
            cc.find("Canvas/answer").getComponent("turnaround").set_value(1);
            out = 8;
            break;
        default:
            // 就是页面都没有四,来判断是否属于 “五子” 和 “六子” 和 “四进” 中的哪一种;
            for (var i = 0; i < NumberArr.length; i++) {
                var ContrastArr = [];
                for (var j = 0; j < NumberArr.length; j++) {
                    if (NumberArr[i] == NumberArr[j]) {
                        ContrastArr.push(NumberArr[j]);
                    }
                }
                if (ContrastArr.length === 4) {
                    this_level = level.seven; //四进
                    cc.find("Canvas/answer").getComponent("turnaround").set_value(4);
                    out = 3;
                    break;
                } else if (ContrastArr.length === 5) {
                    this_level = level.three; //五子
                    cc.find("Canvas/answer").getComponent("turnaround").set_value(1);
                    out = 7;
                    break;
                } else if (ContrastArr.length === 6) {
                    this_level = level.two; //六子
                    cc.find("Canvas/answer").getComponent("turnaround").set_value(1);
                    out = 8;
                    break;
                } else {
                    this_level = level.ten;
                    cc.find("Canvas/answer").getComponent("turnaround").set_value(7);
                    out = 0;
                }
            };
            break;
    }

    
    //cc.log(out);
    paiming.nums[g - 1] += out;
    
    },
    
 
});

