/**
 * 函数定义
 * 1. 参数
 * 2. 返回值
 */
function hello(name: string): void {
    console.log('hello', name);
}
hello('zhufeng');

/**
 * 函数表达式
 * 1. 定义函数的类型
 */

type GetUserNameType = (x: string, y: string) => string;
let getUserName: GetUserNameType = function (firstName, lastName) {
    return firstName + lastName;
}
let result = getUserName('wang', 'zhe');
console.log(result);

/**
 * 函数没有返回值
 */
function hello3(): void {
    return undefined;
}

/**
 * 函数可选参数
 * 1. 可选参数只能跟在最后
 */
function print(name: string, age?: number) {
    console.log(name, age);
}
print('wang', 10);
print('wang');

/**
 * 函数默认参数
 */
function ajax(url: string, method: string = 'get'): void {
    console.log(url, method)
}

/**
 * 剩余参数
 */
function sum(...numbers: Array<number>) {
    return numbers.reduce((a, b) => a + b, 0)
}
console.log(sum(1, 2, 3));

/**
 * 函数的重载
 * 1. 指同名函数有不同的参数组件
 * 2. 重载生命要紧密联系在一起，中间不能插入别的代码，注释没事
 */

function sum3(a: number, b: number): void
//注释
function sum3(a: string, b: string): void
function sum3(a: any, b: any): void {

}
sum3(1, 1);
sum3('aa', 'aa');
// sum3(true, 1);  没有重载，报错