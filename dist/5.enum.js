"use strict";
//兼容性
var A;
(function (A) {
    var Color;
    (function (Color) {
        Color[Color["BLACK"] = 0] = "BLACK";
        Color[Color["RED"] = 1] = "RED";
    })(Color || (Color = {}));
    var c;
    c = 1;
    console.log(c);
})(A || (A = {}));
