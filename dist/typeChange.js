/**
 *  类型变换
 *  1. 交叉类型
 *  2. typeof
 *  3. 索引访问操作符
 *  4. keyof
 *  5. 映射类型
 *  6. 内置工具类型
 *  7. 条件类型
 *      - 定义条件类型
 *      - 条件类型的分发
 *      - 内置条件类型
 */
// 1. 交叉类型
var a;
(function (a) {
    var p = { name: 'wang', fly: function () { }, talk: function () { } };
    p.fly;
    p.name;
    p.talk;
})(a || (a = {}));
// 2. typeof
var b;
(function (b) {
    var p1 = {
        name: 'zhufeng',
        age: 10,
        gender: 'male'
    };
    //先定义变量，再定义类型
    var p2 = {
        name: 'wang',
        age: 10,
        gender: 'male'
    };
    function getName(p) {
        return p.name;
    }
    getName(p1);
})(b || (b = {}));
// 3. 索引访问操作符
var c;
(function (c) {
    var FrontEndJob = {
        name: '前端工程师'
    };
    var interestLevel = 2;
})(c || (c = {}));
// 4. keyof
var d;
(function (d) {
    function getValueByKey(p, key) {
        return p[key];
    }
    var val = getValueByKey({ name: 'zhufeng', age: 10, gender: 'male' }, 'name');
    console.log(val);
})(d || (d = {}));
// 5. 映射类型
var e;
(function (e) {
    var p1 = {};
    var p2 = {};
})(e || (e = {}));
// 6. 内置工具类型
// 7. 条件类型
//    在定义泛型的时候能够添加进逻辑分支，以后泛型更加灵活
//    https://www.typescriptlang.org/docs/handbook/utility-types.html
// 定义条件类型
var g;
(function (g) {
    var condition = { name: '水' };
})(g || (g = {}));
// 条件类型的分发
var h;
(function (h) {
    //(Fish extends Fish ? Water : Sky) | (Bird extends Fish ? Water : Sky)
    // Water|Sky
    var condition1 = { water: '水' };
    var condition2 = { sky: '天空' };
})(h || (h = {}));
