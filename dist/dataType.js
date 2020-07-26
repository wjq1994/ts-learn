var name;
var age;
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
/**
 * 元组 tuple
 * 类型和数量是固定的
 * 1. 数组每一项类型是固定的，元组每一项类型是随意的
 * 2. 数组长度是不限定的 元组长度固定
 * 3. 数组应用于表示一个列表，元组表示固定结构
 */
var position = [100, 100];
var person = ['wjq', 1];
/**
 * 枚举
 * 1. 普通枚举
 * 2. 常数枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["GIRL"] = 0] = "GIRL";
    Gender[Gender["BOY"] = 1] = "BOY";
})(Gender || (Gender = {}));
console.log(Gender.BOY); // 1
console.log(Gender.GIRL); // 0
var WEEK;
(function (WEEK) {
    WEEK[WEEK["Tuesday"] = 4] = "Tuesday";
    WEEK[WEEK["Friday"] = 5] = "Friday";
})(WEEK || (WEEK = {}));
console.log(WEEK.Tuesday, WEEK.Friday); // 4 5
console.log(WEEK[0], WEEK[4]); // undefined 4
console.log(0 /* RED */, 1 /* YELLOW */, 2 /* BLUE */); //0, 1, 2
// Color[0] 常数枚举这种表达方式不行
/**
 * any 任意类型
 * 如果一个类型是any类型，那就相当于放弃了类型检查，可以把任意值付给它
 * TS内置了很多类型，比如说给常用的DOM库提供对应的ts类型
 */
var root = document.getElementById("aa");
/**
 * 解决办法
 * 1. 强转成any 断言成any类型
 * 2. 非空断言 !就表示告诉TS我这个root肯定不为null，你就放心让我调属性吧
 */
root.style.color = 'red';
//如果定义了一个变量不赋值，也不定义类型，那么就是any
var root2;
//如果定义的没有定义类型，但是赋值了，进行类型的推断
var root3 = document.getElementById('root');
/**
 * null undefined
 * 如果strictNullChecks为false，就是不进行null和undefined严格检查，此时可以赋给任意值
 *
 */
var str;
str = null;
/**
 * void 表示没有任何类型
 * 如果strictNullChecks为false，可以返回null
 * 如果strictNullChecks为false，不可以返回null
 */
function greeting(name) {
    return null;
}
/**
 * never 永远不 永远到达不了
 * never是其他的类型（null undefined）的子类型，代表不会出现的值
 *
 * never 有两种可能
 * 1. 函数中间抛异常
 * 2. 函数里有死循环
 */
function getName() {
    var a = 1;
    throw new Error();
    //Unreachable code detected
    console.log(a);
}
function count() {
    while (true) {
        console.log(1);
    }
    //Unreachable code detected
    console.log(2);
}
function fn(x) {
    if (typeof x === 'number') {
        console.log(x);
    }
    else if (typeof x === 'string') {
        console.log(x);
    }
    else {
        //strictNullChecks模式下 x: never 
        console.log(x); //Unreachable code detected
    }
}
/**
 * 类型推论
 * 1. 是指编程语言中能够自动推导出值的类型的能力，它是一些强静态类型语言中出现的特性
 * 2. 定义时未赋值就会推论成any类型
 * 3. 如果定义的时候就赋值就能利用到类型推论
 */
var type1;
type1 = 10;
type1 = null;
type1 = 'hhh';
/**
 * 包装对象
 * js原始数据类型：string, null, undefined, number, boolean, symbol
 * 当你在原始类型上调用方法的时候，内部会自动进行包装，把原始类型包装成对象类型
 */
var wrapName = 'wang';
console.log(wrapName.toUpperCase());
var isOk = true;
var isOk2 = Boolean(1);
// let isOk3: boolean = new Boolean(1); 对象类型不能赋给原始类型
/**
 * 类型断言
 * 可以把一个联合类型，指定为一个具体类型
 */
var name3;
// console.log(name3.toUpperCase()); 这里会报错
console.log(name3.toUpperCase());
console.log(name3.toFixed(2));
console.log(name3.length);
/**
 * 字面量类型
 * 值 联合类型 只能是其中的值
 */
var v4;
v4 = 1;
v4 = 2;
v4 = 3;
v4 = 'one';
