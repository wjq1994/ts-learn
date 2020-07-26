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
 * 类型保护
 * 类型保护就是一些表达式，他们在编译的时候就能通过类型信息确保某个作用域内变量的类型
 * 类型保护就是能够通过关键字判断出分支中的类型
 * 1. typeof类型保护
 * 2. instanceof类型保护
 * 3. null保护
 * 4. 链判断运算符
 * 5. 可辨识的联合类型
 * 6. in操作符
 * 7. 自定义的类型保护
 * 8. unknown
 *      - any类型（顶级类型）
 *      - unknown类型（顶级类型）
 *      - 缩小unknown类型范围
 *      - 联合类型中的unknown类型
 *      - 交叉类型中的unknown类型
 *      - never是unknown的子类型
 *      - keyof unknown = never
 *      - 只能对unknown进行等或不等的操作看，不能进行其他操作
 *      - 不能做任何操作
 *      - 映射属性
 */
// 1. typeof类型保护
var a;
(function (a) {
    function double(input) {
        if (typeof input === 'string') {
            return input + input;
        }
        else {
            if (typeof input === 'number') {
                return input * 2;
            }
            else {
                return !input;
            }
        }
    }
})(a || (a = {}));
// 2. instanceof类型保护
var b;
(function (b) {
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
    function getName(animal) {
        if (animal instanceof Bird) {
            console.log(animal.swing);
        }
        else {
            console.log(animal.name);
        }
    }
})(b || (b = {}));
// 3. null保护
var c;
(function (c) {
    function getFirstLetter(s) {
        //第一种方式是加上null判断
        if (s == null) {
            return '';
        }
        //第二种处理是增加一个或的处理
        s = s || '';
        return s.charAt(0);
    }
    //它并不能处理一些复杂的判断，需要加非空断言操作符
    function getFirstLetter2(s) {
        function log() {
            console.log(s.trim());
        }
        s = s || '';
        log();
        return s.charAt(0);
    }
})(c || (c = {}));
// 4. 链判断运算符
//  链判断运算符是一种先检查属性是否存在，再尝试访问该属性的运算符，其符号为 ?.
//  如果运算符左侧的操作数 ?. 计算为 undefined 或 null，则表达式求值为 undefined 。否则，正常触发目标属性访问，方法或函数调用。
var d;
(function (d) {
    var _a, _b, _c, _d;
    (_a = a) === null || _a === void 0 ? void 0 : _a.b; //如果a是null/undefined,那么返回undefined，否则返回a.b的值.
    a == null ? undefined : a.b;
    (_b = a) === null || _b === void 0 ? void 0 : _b[x]; //如果a是null/undefined,那么返回undefined，否则返回a[x]的值
    a == null ? undefined : a[x];
    (_c = a) === null || _c === void 0 ? void 0 : _c.b(); // 如果a是null/undefined,那么返回undefined
    a == null ? undefined : a.b(); //如果a.b不函数的话抛类型错误异常,否则计算a.b()的结果
    (_d = a) === null || _d === void 0 ? void 0 : _d(); //如果a是null/undefined,那么返回undefined
    a == null ? undefined : a(); //如果A不是函数会抛出类型错误
    //否则 调用a这个函数
})(d || (d = {}));
// 5. 可辨识的联合类型
//    就是利用联合类型中的共有字段进行类型保护的一种技巧
//    相同字段的不同取值就是可辨识
var e;
(function (e) {
    function getButton(button) {
        if (button.class == 'warning') {
            console.log(button.text1);
        }
        if (button.class == 'danger') {
            console.log(button.text2);
        }
    }
})(e || (e = {}));
// 6. in操作符
var f;
(function (f) {
    function getNumber(x) {
        if ("swing" in x) {
            return x.swing;
        }
        return x.leg;
    }
})(f || (f = {}));
// 7. 自定义的类型保护
// TypeScript 里的类型保护本质上就是一些表达式，它们会在运行时检查类型信息，以确保在某个作用域里的类型是符合预期的
// type is Type1Class就是类型谓词
// 谓词为 parameterName is Type这种形式,parameterName必须是来自于当前函数签名里的一个参数名
// 每当使用一些变量调用isType1时，如果原始类型兼容，TypeScript会将该变量缩小到该特定类型
var g;
(function (g) {
    // function isType1(type: Type1Class | Type2Class): type is Type1Class {
    //     return (<Type1Class>type).func1 !== undefined;
    // }
    //没有相同字段可以定义一个类型保护函数
    function isBird(x) {
        return x.swing == 2;
        //return (x as Bird).swing == 2;
    }
    function getAnimal(x) {
        if (isBird(x)) {
            return x.swing;
        }
        return x.leg;
    }
})(g || (g = {}));
// 8. unknown
var h;
(function (h) {
    // 如果没有类型断言或类型细化时，不能在unknown上面进行任何操作
    var value = "Hello World";
    var someString = value;
})(h || (h = {}));
