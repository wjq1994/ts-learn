/**
 * 泛型函数
 */
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
var result = createArray(3, true);
console.log(result);
// 类数组
function sum() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var args = arguments;
    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
sum(1, 2, 3);
var a;
(function (a) {
    var _a;
    var root = document.getElementById('root');
    var children = (_a = root) === null || _a === void 0 ? void 0 : _a.children;
    var childNodes = root.childNodes;
})(a || (a = {}));
// 泛型类
var b;
(function (b) {
    var MyArray = /** @class */ (function () {
        function MyArray() {
            this.list = [];
        }
        MyArray.prototype.add = function (value) {
            this.list.push(value);
        };
        MyArray.prototype.getMax = function () {
            var result = this.list[0];
            for (var i = 1; i < this.list.length; i++) {
                if (this.list[i] > result) {
                    result = this.list[i];
                }
            }
        };
        return MyArray;
    }());
    var array = new MyArray();
    array.add(1);
    array.add(2);
    array.add(3);
    console.log(array.getMax());
})(b || (b = {}));
// 泛型接口
var c;
(function (c) {
    var add = function (a, b) {
        return a + b;
    };
    add(1, 1);
})(c || (c = {}));
// 多个类型参数
var d;
(function (d) {
    function swap(tuple) {
        return [tuple[1], tuple[0]];
    }
    var result3 = swap(['a', 1]);
    console.log(result3);
})(d || (d = {}));
// 默认泛型
var e;
(function (e) {
    function createArray2(length, value) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
    var result = createArray2(3, true);
    console.log(result);
})(e || (e = {}));
// 泛型的约束
var f;
(function (f) {
    var len = { name: "222" };
    function logger(val) {
        console.log(val.name);
    }
    logger(len);
})(f || (f = {}));
// 泛型的接口
var g;
(function (g) {
    var cart = {
        list: [{ id: 1, name: '计算机' }]
    };
})(g || (g = {}));
// type指的是泛型类型的别名
// 泛型别名可以表达更为复杂的类型
var h;
(function (h) {
    var cart2 = { list: [1] };
    var cart3 = [1];
})(h || (h = {}));
/**
 * type interface的区别
 *  1. interface才是真正的类型，创建一个真实的类型名称，可以在任何地方被调用
 *  而类型别名并不能创建类型名称，比如报错的时候就不能用
 *  2. type类型别名不能被extends implements。如果要继承和实现接口的话必须要用interface
 *  3. 当你需要用联合类型的，可以用别名
 */ 
