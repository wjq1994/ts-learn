"use strict";
/**
 * 接口
 *  1. 描述对象的形状
 *  2. 描述行为的抽象
 *      - 一个类只能继承一个父类，但是可以实现多个接口
 *  3. 任意属性
 *  4. readonly
 *  5. 函数类型的接口
 *  6. 可索引接口 可以对数组和对象进行约束
 *  7. 类接口
 *  8. 构造函数的类型
 */
/**
 * 1. 描述对象的形状
 */
var inter;
(function (inter) {
    //对象的形态就是描述一个对象有哪些属性，属性的类型是什么
    var speaker = {
        speak: function () {
            return 1;
        },
        name: 'wang',
        age: 1
    };
    var it1 = function () {
    };
    var it2 = {
        add: function () {
        }
    };
})(inter || (inter = {}));
/**
  * 2. 描述行为的抽象
  *
  *
  */
var action;
(function (action) {
    //一个类只能继承一个父类，但是可以实现多个接口
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.speak = function () {
            throw new Error("Method not implemented");
        };
        Person.prototype.eat = function () {
            throw new Error("Method not implemented");
        };
        return Person;
    }());
    var props = {
        name: 'wang',
        age: 1,
        home: "beijing" //home不在props指定属性里
    };
    var p2 = {
        id: 1,
        name: 'wang'
    };
    var cost = function (price) {
        return price;
    };
    var arr = ['a', 'b', 'c'];
    var obj = { 0: 'a', 1: 'b' };
})(action || (action = {}));
var g;
(function (g) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.speak = function () {
            console.log("A dog in the room");
        };
        ;
        return Dog;
    }());
    var dog = new Dog();
    dog.name;
    dog.speak();
    // 用接口来约束 类的构造函数
    // Animal代表一个类型 代表类的实例 的类型
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    function createAnimal(clazz, name) {
        return new clazz(name);
    }
    var animal = createAnimal(Animal, 'wang');
    console.log(animal);
})(g || (g = {}));
