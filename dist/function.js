"use strict";
/**
 * 函数定义
 * 1. 参数
 * 2. 返回值
 */
function hello(name) {
    console.log('hello', name);
}
hello('zhufeng');
var getUserName = function (firstName, lastName) {
    return firstName + lastName;
};
var result = getUserName('wang', 'zhe');
console.log(result);
/**
 * 函数没有返回值
 */
function hello3() {
    return undefined;
}
/**
 * 函数可选参数
 * 1. 可选参数只能跟在最后
 */
function print(name, age) {
    console.log(name, age);
}
print('wang', 10);
print('wang');
/**
 * 函数默认参数
 */
function ajax(url, method) {
    if (method === void 0) { method = 'get'; }
    console.log(url, method);
}
/**
 * 剩余参数
 */
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a + b; }, 0);
}
console.log(sum(1, 2, 3));
function sum3(a, b) {
}
sum3(1, 1);
sum3('aa', 'aa');
// sum3(true, 1);  没有重载，报错
