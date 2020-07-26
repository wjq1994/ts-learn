var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 兼容性
 * 兼容性原理：所有属性都存在
 * 1. 接口兼容性
 * 2. 变量兼容性
 *      - 装箱 将普通类型封装成对象
 * 3. 类的兼容性
 *      - ts 并不类型系统，类型并不重要，属性才重要
 *      - 子类可以给父类 父类不可以给子类
 *      - 同时子类不能有父类没有的属性，否则也不能赋值（类不重要，属性才重要）
 * 4. 函数的兼容性
 *     - 参数的兼容性
 *       - 参数可以少不能多
 *     - 返回值的兼容性
 *       - 返回值可以多不能少
 * 5. 函数参数的双向协变
 *     - 当比较函数参数的类型的时候，只有当源函数参数能够赋值给目标函数或者反过来才能赋值成功
 *     - 满足strictFunctionTypes: false
 * 6. 泛型的兼容性
 *     - 先判断返回的具体类型在判断兼容性
 * 7. 枚举的兼容性
 *     - 枚举类型相当于返回的类型是number
 */
// 1. 接口兼容性
var a;
(function (a) {
    // 参数类型是Animal，传的是Person
    // 编译通过原因：兼容性检查 
    // 兼容性原理：所有属性都存在
    function getName(animal) {
        return animal.name;
    }
    var person = {
        name: 'zhufeng',
        age: 10,
        idcard: 0
    };
    var name = getName(person);
})(a || (a = {}));
// 2. 变量兼容性
var b;
(function (b) {
    var num = 1;
    var str = "2等等";
    num = str; // 可以
    str = num; // 不可以? 好像是可以的
    // 什么是鸭子检查
    var num2;
    var str2 = 'wang';
    /**
     * 自动装箱 new String('wang');
     * toString(): string
     */
    var str22 = str2.toString();
    num2 = str2; // str2 实际是自动装箱 new String('wang'), 有toString(),所以可以赋值
    // str2 = num2; // 不可以，因为str2的一些属性，num2没有
})(b || (b = {}));
// 3. 类的兼容性
//      - 子类可以给父类 父类不可以给子类 
//      - 同时子类不能有父类没有的属性，否则也不能赋值（类不重要，属性才重要）
var c;
(function (c) {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        function Bird() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bird;
    }(Animal));
    var a;
    var b;
    // a = b; 
    // b = a;
})(c || (c = {}));
// 4. 函数的兼容性
//      - 参数的兼容性
//        - 参数可以少不能多
//      - 返回值的兼容性
//        - 返回值可以多不能少
// 参数的兼容性
var d;
(function (d) {
    var sum;
    function f1(a, b) {
        return a;
    }
    sum = f1;
    // 可以省略一个参数
    function f2(a) {
        return a;
    }
    // 可以省略二个参数
    function f3() {
        return 1;
    }
    sum = f3;
    // 不能多加参数
    function f4(a, b, c) {
        renturn;
        1;
    }
    sum = f4;
})(d || (d = {}));
// 返回值的兼容性
var e;
(function (e) {
    function g1() {
        return {
            name: 'wang',
            age: 10
        };
    }
    var g = g1;
    //返回值属性可以多不能少
    function g2() {
        return {
            name: "wamg",
            age: 10,
            home: 1
        };
    }
    var gx = g2;
})(e || (e = {}));
// 5. 函数参数的双向协变
// 当比较函数参数的类型的时候，只有当源函数参数能够赋值给目标函数或者反过来才能赋值成功
// let 是定义变量，或者说定义值 type是定义类型
// let 值是可以放在等号的右边给变量赋值的，而type是不能放在等号右边给变量赋值的，可以给type赋值
var g;
(function (g) {
    var sourceFunc = function (args) { }; // 这里是一个箭头函数
    var target1Func = function (args) { };
    var target2Func = function (args) { };
    sourceFunc = target1Func; // 满足strictFunctionTypes: false
    sourceFunc = target2Func;
    var v1 = 'd';
    var v2 = 1;
    var v3;
    v3 = v1;
    v1 = v2;
})(g || (g = {}));
// 6. 泛型的兼容性
//      - 先判断返回的具体类型在判断兼容性
var h;
(function (h) {
    var x; // 返回的类型 {data: string}
    var y; // 返回的类型 {data: string | number}
    // 第一步： x返回的类型 {data: string}，y返回的类型 {data: string | number}
    // 第二步： {data: string} 和 {data: string | number} 的兼容性
    // 结论：  x = y no  y = x yes
    // x = y;
    // y = x;
})(h || (h = {}));
// 7. 枚举的兼容性
//      - 枚举类型相当于返回的类型是number
var i;
(function (i) {
    var Colors;
    (function (Colors) {
        Colors[Colors["Red"] = 0] = "Red";
        Colors[Colors["Yellow"] = 1] = "Yellow";
    })(Colors || (Colors = {}));
    var c;
    c = 1;
    var n;
    n = c;
})(i || (i = {}));
