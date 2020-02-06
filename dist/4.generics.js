"use strict";
//泛型的兼容性
var A;
(function (A) {
    var Empty1 = { data: 1 };
    var Empty2;
    //let Empty2: Empty<string>; 报错
    //先判断具体类型在判断兼容性
    Empty2 = Empty1;
    Empty1 = Empty2;
})(A || (A = {}));
var B;
(function (B) {
    var Empty3 = { data: 1 };
    var Empty4;
    // 多的不能赋值给少的
    // Empty3 = Empty4; 报错
    // 少的能赋值给多的
    Empty4 = Empty3;
})(B || (B = {}));
