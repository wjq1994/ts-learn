"use strict";
/**
 * 类 class
 * 1. 变量初始化
 *      - 直接赋值
 *      - 通过构造函数
 * 2. getter setter
 *      通过读存取器 类中属性的读取和赋值
 *
 * 3. readonly
 *      这个属性是定义在实例上的
 *
 * 4. 属性是定义在实例上（不共享放在实例上），方法是定义在原型上
 *
 * 5. 修饰符
 *      public 自己 自己孩子 外人都可以访问
 *      protected 自己 自己孩子能访问 外人不能访问
 *      private 自己 能访问， 自己孩子和外人不能访问
 *
 * 6. 静态方法和静态属性
 *
 * 7. 类的类型
 *      - 类型 type
 *      - 值 value
 *      - 当你写一个类时其实得到了两个类型
 *          第一个类型 实例的类型
 *          第二个类型 构造函数的类型
 * 8. 重写
 * 9. 重载
 * 10. 继承
 *      - 继承(Inheritance)子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
 * 11. 多态
 *      - 多态(Polymorphism)由继承而产生了相关的不同的类，对同一个方法可以有不同的行为
 */
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
 * 变量初始化
 */
var Person = /** @class */ (function () {
    function Person() {
        // strictPropertyInitialization = true; 变量需要初始化
        // 变量初始化1
        this.name = 'jjjj';
        // 变量初始化2
        this.name = "wang";
    }
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    return Person;
}());
/**
 * getter setter
 */
var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this.myName;
        },
        set: function (newValue) {
            this.myName = newValue.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
/**
 * readonly
 */
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = 'wang';
    }
    return Animal;
}());
var a = new Animal();
// a.name = ''; ts编译中进行代码检查，运行时还是会执行
/**
 * 修饰符
 * 静态方法和静态属性
 */
var Father = /** @class */ (function () {
    function Father(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Father.getClassName = function () {
        return Father.className;
    };
    Father.prototype.getName = function () {
        return this.name;
    };
    Father.prototype.getAge = function () {
        return this.age;
    };
    Father.prototype.getMoney = function () {
        return this.money;
    };
    Father.className = "father";
    return Father;
}());
console.log(Father.className, Father.getClassName());
/**
 * 类的类型
 * Person1 实例的类型
 * PersonType 构造函数的类型
 */
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    return Person1;
}());
var p = { name: "wang" };
var p2 = Person1;
/**
 * 重写
 */
var override;
(function (override) {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.speak = function (word) {
            return '动作叫:' + word;
        };
        return Animal;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.speak = function (word) {
            return '猫叫:' + word;
        };
        return Cat;
    }(Animal));
    var cat = new Cat();
    console.log(cat.speak('hello'));
})(override || (override = {}));
/**
* 重载
*/
var overload;
(function (overload) {
    function double(val) {
        if (typeof val == 'number') {
            return val * 2;
        }
        return val + val;
    }
    var r = double(1);
    console.log(r);
})(overload || (overload = {}));
/**
 * 继承 和 多态
 */
var inheritance;
(function (inheritance) {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.speak = function (word) {
            return 'Animal: ' + word;
        };
        return Animal;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.speak = function (word) {
            return 'Cat:' + word;
        };
        return Cat;
    }(Animal));
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.speak = function (word) {
            return 'Dog:' + word;
        };
        return Dog;
    }(Animal));
    var cat = new Cat();
    console.log(cat.speak('hello'));
    var dog = new Dog();
    console.log(dog.speak('hello'));
})(inheritance || (inheritance = {}));
