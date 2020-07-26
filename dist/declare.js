/**
 * 类型声明
 * 声明文件可以让我们不需要将JS重构为TS，只需要加上声明文件就可以使用系统
 * 类型声明在编译的时候都会被删除，不会影响真正的代码
 *
 * 1. 普通类型声明
 * 2. 外部枚举
 * 3. namespace
 * 4. 类型声明文件
 * 5. 第三方声明文件
 * 6. 扩展全局变量的类型
 * 7. 合并声明
 */
// 1. 普通类型声明
var a;
(function (a) {
    $('#root').click();
    console.log($('#root').width);
    console.log(name, age);
    getName();
    new Animal();
    // export default {};
})(a || (a = {}));
// 2. 外部枚举
var b;
(function (b) {
    var seasons = [
        Seasons.Spring,
        Seasons.Summer,
        Seasons.Autumn,
        Seasons.Winter
    ];
})(b || (b = {}));
// 3. namespace
// 4. 类型声明文件
// 5. 第三方声明文件
// 6. 扩展全局变量的类型
// 7. 合并声明
