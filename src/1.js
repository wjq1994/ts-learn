var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { 
                for (var p in b) {
                    console.log(p)
                    if (b.hasOwnProperty(p)) 
                    d[p] = b[p]; 
                }
            };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = '666';
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, stuNo) {
        var _this = _super.call(this, name) || this;
        _this._stuNo = "";
        _this._stuNo = stuNo;
        return _this;
    }
    Object.defineProperty(Student.prototype, "getstuNo", {
        get: function () {
            return this._stuNo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setstuNo", {
        set: function (value) {
            this._stuNo = value;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}(Person));
var student1 = new Student("zhangsan", "1203020118");
student1.setName = "dgdgdfg";
console.log(student1.getName);
