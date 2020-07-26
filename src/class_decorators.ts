export { }
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

function enhancer(target: any) {
    console.log(target);
    target.prototype.name = 'wang';
    target.prototype.getName = function () {
        console.log(this.name);
    }
}
@enhancer
class Person {

}
let p = new Person();
//ts是不识别装饰器的，所以下面语句会报错
//1. as any
console.log((p as any).name);
(p as any).getName();

//装饰器修改类，需要把原来类的属性加入
function connect(target: any) {
    return class {
        age: number = 10;
        name: string = 'hello';
    }
}
@connect
class App {
    age: number = 10;
}
let app = new App();
console.log((app as any).name);
console.log((app as any).age);

/**
 * 修饰属性
 */
namespace b {
    //属性装饰器有两个参数target就是类的原型对象 propertyKey属性的名字
    function uppercase(target: any, propertyKey: string) {
        let value = target[propertyKey];
        const getter = function () {
            return value;
        }
        const setter = function (newValue: string) {
            value = newValue.toUpperCase();
        }
        if (delete target[propertyKey]) {
            Object.defineProperty(target, propertyKey, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            })
        }
    }
    //当装饰的是一个类的实例方法
    //target 类的原型 prototype
    //methodName = getName
    //descriptor = 属性描述器(set get value enumerable configurable )
    function noEnumable(target: any, methodName: string, descriptor: any) {
        descriptor.enumerable = false;
    }
    function converToNumber(target: any, methodName: string, descriptor: any) {
        let oldMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            args = args.map(item => parseInt(item));
            return oldMethod.apply(this, args);
        }
    }
    class Person {
        @uppercase
        name: string = 'wang';
        @noEnumable
        getName() {
            console.log(this.name);
        }
        @converToNumber
        sum(...args: any[]) {
            return args.reduce((total, current) => total + current, 0);
        }
    }
    let p = new Person();
    console.log('p.name: ' + p.name);
    console.log('p.getName: ' + p.getName());
    let result = p.sum(1, '2', 3);
    console.log(result);
}

/**
 * 参数装饰器
 */
namespace c {
    // 扩展Person属性
    interface Person {
        age: number
    }
    //target静态成员就是构造函数 普通成员就是类的原型
    //methodName = login   paramIndex = 参数位置索引
    function addAge(target: any, methodName: string, paramIndex: number) {
        target.age = 10;
    }
    //target静态成员就是构造函数
    function addHome(target: any, methodName: string, paramIndex: number) {
        target.home = '北京';
    }

    class Person {
        static addHome(@addHome home: string) {

        }
        login(username: string, @addAge password: string) {
            console.log(this.age, username, password);
        }
    
    }
    let p = new Person();
    console.log((Person as any).home);
}

/**
 * 装饰器执行顺序
 */

namespace d {
    function Class1Decorator() {
        return function (target: any) {
            console.log("类1装饰器");
        }
    }
    function Class2Decorator() {
        return function (target: any) {
            console.log("类2装饰器");
        }
    }
    function MethodDecorator() {
        return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
            console.log("方法装饰器");
        }
    }
    function Param1Decorator() {
        return function (target: any, methodName: string, paramIndex: number) {
            console.log("参数1装饰器");
        }
    }
    function Param2Decorator() {
        return function (target: any, methodName: string, paramIndex: number) {
            console.log("参数2装饰器");
        }
    }
    function PropertyDecorator(name: string) {
        return function (target: any, propertyName: string) {
            console.log(name + "属性装饰器");
        }
    }

    @Class1Decorator()
    @Class2Decorator()
    class Person {
        @PropertyDecorator('name')
        name: string = 'zhufeng';
        @PropertyDecorator('age')
        age: number = 10;
        @MethodDecorator()
        greet(@Param1Decorator() p1: string, @Param2Decorator() p2: string) { }
    }
}
/**
name属性装饰器
age属性装饰器
参数2装饰器
参数1装饰器
方法装饰器
类2装饰器
类1装饰器
 */