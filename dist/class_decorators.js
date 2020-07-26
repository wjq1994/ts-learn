var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * 装饰器
 *      1. 修饰类
 *          - 类装饰器在类声明之前声明，用来监视、修改或替换类定义
 *          - 装饰器其实是一个函数
 *      2. 修饰属性
 */
/**
 * 如果装饰用来装饰一个类
 * @param target 是类的构造函数
 */
function enhancer(target) {
    console.log(target);
    target.prototype.name = 'wang';
    target.prototype.getName = function () {
        console.log(this.name);
    };
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person = __decorate([
        enhancer
    ], Person);
    return Person;
}());
var p = new Person();
//ts是不识别装饰器的，所以下面语句会报错
//1. as any
console.log(p.name);
p.getName();
//装饰器修改类，需要把原来类的属性加入
function connect(target) {
    return /** @class */ (function () {
        function class_1() {
            this.age = 10;
            this.name = 'hello';
        }
        return class_1;
    }());
}
var App = /** @class */ (function () {
    function App() {
        this.age = 10;
    }
    App = __decorate([
        connect
    ], App);
    return App;
}());
var app = new App();
console.log(app.name);
console.log(app.age);
/**
 * 修饰属性
 */
var b;
(function (b) {
    //属性装饰器有两个参数target就是类的原型对象 propertyKey属性的名字
    function uppercase(target, propertyKey) {
        var value = target[propertyKey];
        var getter = function () {
            return value;
        };
        var setter = function (newValue) {
            value = newValue.toUpperCase();
        };
        if (delete target[propertyKey]) {
            Object.defineProperty(target, propertyKey, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
    //当装饰的是一个类的实例方法
    //target 类的原型 prototype
    //methodName = getName
    //descriptor = 属性描述器(set get value enumerable configurable )
    function noEnumable(target, methodName, descriptor) {
        descriptor.enumerable = false;
    }
    function converToNumber(target, methodName, descriptor) {
        var oldMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (item) { return parseInt(item); });
            return oldMethod.apply(this, args);
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'wang';
        }
        Person.prototype.getName = function () {
            console.log(this.name);
        };
        Person.prototype.sum = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return args.reduce(function (total, current) { return total + current; }, 0);
        };
        __decorate([
            uppercase
        ], Person.prototype, "name", void 0);
        __decorate([
            noEnumable
        ], Person.prototype, "getName", null);
        __decorate([
            converToNumber
        ], Person.prototype, "sum", null);
        return Person;
    }());
    var p = new Person();
    console.log('p.name: ' + p.name);
    console.log('p.getName: ' + p.getName());
    var result = p.sum(1, '2', 3);
    console.log(result);
})(b || (b = {}));
/**
 * 参数装饰器
 */
var c;
(function (c) {
    //target静态成员就是构造函数 普通成员就是类的原型
    //methodName = login   paramIndex = 参数位置索引
    function addAge(target, methodName, paramIndex) {
        target.age = 10;
    }
    //target静态成员就是构造函数
    function addHome(target, methodName, paramIndex) {
        target.home = '北京';
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.addHome = function (home) {
        };
        Person.prototype.login = function (username, password) {
            console.log(this.age, username, password);
        };
        __decorate([
            __param(1, addAge)
        ], Person.prototype, "login", null);
        __decorate([
            __param(0, addHome)
        ], Person, "addHome", null);
        return Person;
    }());
    var p = new Person();
    console.log(Person.home);
})(c || (c = {}));
/**
 * 装饰器执行顺序
 */
var d;
(function (d) {
    function Class1Decorator() {
        return function (target) {
            console.log("类1装饰器");
        };
    }
    function Class2Decorator() {
        return function (target) {
            console.log("类2装饰器");
        };
    }
    function MethodDecorator() {
        return function (target, methodName, descriptor) {
            console.log("方法装饰器");
        };
    }
    function Param1Decorator() {
        return function (target, methodName, paramIndex) {
            console.log("参数1装饰器");
        };
    }
    function Param2Decorator() {
        return function (target, methodName, paramIndex) {
            console.log("参数2装饰器");
        };
    }
    function PropertyDecorator(name) {
        return function (target, propertyName) {
            console.log(name + "属性装饰器");
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'zhufeng';
            this.age = 10;
        }
        Person.prototype.greet = function (p1, p2) { };
        __decorate([
            PropertyDecorator('name')
        ], Person.prototype, "name", void 0);
        __decorate([
            PropertyDecorator('age')
        ], Person.prototype, "age", void 0);
        __decorate([
            MethodDecorator(),
            __param(0, Param1Decorator()), __param(1, Param2Decorator())
        ], Person.prototype, "greet", null);
        Person = __decorate([
            Class1Decorator(),
            Class2Decorator()
        ], Person);
        return Person;
    }());
})(d || (d = {}));
/**
name属性装饰器
age属性装饰器
参数2装饰器
参数1装饰器
方法装饰器
类2装饰器
类1装饰器
 */ 
