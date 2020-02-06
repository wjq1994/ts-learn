"use strict";
//let 和 type有什么区别
//let是定义变量 type是定义类型
//let可以赋值给变量 type不给以赋值给变量
var sourceFunc = function (abc) { };
var target1Func = function (abc) { };
var target2Func = function (abc) { };
//"strictFunctionTypes": true, 改为false
sourceFunc = target1Func;
sourceFunc = target2Func;
