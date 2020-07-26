"use strict";
function getArray(value, items) {
    if (items === void 0) { items = 5; }
    return new Array(items).fill(value);
}
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
getArray("1", 1).map(function (items) {
    return;
});
