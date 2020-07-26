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
var a;
(function (a) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        //普通方法
        Animal.prototype.getName = function () {
            return this.name;
        };
        return Animal;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.speak = function () {
            console.log("喵");
        };
        return Cat;
    }(Animal));
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.speak = function () {
            console.log("旺");
        };
        return Dog;
    }(Animal));
    var cat = new Cat("猫");
    var dog = new Dog("狗");
    cat.speak();
    dog.speak();
})(a || (a = {}));
