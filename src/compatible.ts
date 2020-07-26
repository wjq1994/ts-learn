export {}
/**
 * 兼容性
 * 兼容性原理：所有属性都存在
 * 1. 接口兼容性
 * 2. 变量兼容性
 *      - 装箱 将普通类型封装成对象
 * 3. 类的兼容性
 *      - ts 并不类型系统，类型并不重要，属性才重要
 *      - 子类可以给父类 父类不可以给子类 
 *      - 同时子类不能有父类没有的属性，否则也不能赋值（类不重要，属性才重要）
 * 4. 函数的兼容性
 *     - 参数的兼容性
 *       - 参数可以少不能多
 *     - 返回值的兼容性
 *       - 返回值可以多不能少
 * 5. 函数参数的双向协变
 *     - 当比较函数参数的类型的时候，只有当源函数参数能够赋值给目标函数或者反过来才能赋值成功
 *     - 满足strictFunctionTypes: false
 * 6. 泛型的兼容性
 *     - 先判断返回的具体类型在判断兼容性
 * 7. 枚举的兼容性
 *     - 枚举类型相当于返回的类型是number
 */

// 1. 接口兼容性
namespace a {
    interface Animal {
        name: string;
        age: number;
    }
    
    interface Person {
        name: string;
        age: number;
        idcard: number;
    }
    
    // 参数类型是Animal，传的是Person
    // 编译通过原因：兼容性检查 
    // 兼容性原理：所有属性都存在
    function getName(animal: Animal): string {
        return animal.name;
    }
    
    let person: Person = {
        name: 'zhufeng',
        age: 10,
        idcard: 0
    }
    
    let name = getName(person);
}

// 2. 变量兼容性
namespace b {
    let num: string | number = 1;
    let str: string = "2等等";

    num = str; // 可以
    str = num; // 不可以? 好像是可以的
    // 什么是鸭子检查
    let num2: {
        toString(): string
    }
    let str2: string = 'wang';
    /**
     * 自动装箱 new String('wang');
     * toString(): string
     */
    let str22: string = str2.toString();
    num2 = str2; // str2 实际是自动装箱 new String('wang'), 有toString(),所以可以赋值
    // str2 = num2; // 不可以，因为str2的一些属性，num2没有
}

// 3. 类的兼容性
//      - 子类可以给父类 父类不可以给子类 
//      - 同时子类不能有父类没有的属性，否则也不能赋值（类不重要，属性才重要）
namespace c {
    class Animal {
        name: string
    }
    class Bird extends Animal {
        swing: number;
    }
    let a: Animal;
    let b: Bird;
    // a = b; 
    // b = a;
}

// 4. 函数的兼容性
//      - 参数的兼容性
//        - 参数可以少不能多
//      - 返回值的兼容性
//        - 返回值可以多不能少

// 参数的兼容性
namespace d {
    type sumFunc = (a: number, b: number) => number;
    let sum: sumFunc;
    function f1(a: number, b: number): number {
        return a;
    }
    sum = f1;
    // 可以省略一个参数
    function f2(a: number): number {
        return a;
    }
    // 可以省略二个参数
    function f3(): number {
        return 1;
    }
    sum = f3;
    // 不能多加参数
    function f4(a: number, b: number, c: number) {
        renturn 1;
    }
    sum = f4;
}

// 返回值的兼容性
namespace e {
    // 这里不是箭头函数是连接符
    type getPerson = () => { name: string, age: number};
    function g1() {
        return {
            name: 'wang',
            age: 10
        }
    }
    let g: getPerson = g1;

    //返回值属性可以多不能少
    function g2() {
        return {
            name: "wamg",
            age: 10,
            home: 1
        }
    }
    let gx: getPerson = g2;
}

// 5. 函数参数的双向协变
// 当比较函数参数的类型的时候，只有当源函数参数能够赋值给目标函数或者反过来才能赋值成功
// let 是定义变量，或者说定义值 type是定义类型
// let 值是可以放在等号的右边给变量赋值的，而type是不能放在等号右边给变量赋值的，可以给type赋值
namespace g {
    let sourceFunc = (args: number | string) => {}; // 这里是一个箭头函数
    type source2Func = (args: number | string) => void; // 这里是类型，肯定没有函数体
    interface something {
        (a: string): void,
        a: () => void
    }
    let target1Func = (args: number) => {}
    let target2Func = (args: number | string | boolean) => {}
    sourceFunc = target1Func; // 满足strictFunctionTypes: false
    sourceFunc = target2Func;
    
    let v1: number | string = 'd';
    let v2: number = 1;
    let v3: number | string | boolean;
    v3 = v1;
    v1 = v2;

}


// 6. 泛型的兼容性
//      - 先判断返回的具体类型在判断兼容性
namespace h {
    interface Empty<T> {
        data: T
    }
    let x!: Empty<string>; // 返回的类型 {data: string}
    let y!: Empty<number | string>; // 返回的类型 {data: string | number}

    // 第一步： x返回的类型 {data: string}，y返回的类型 {data: string | number}
    // 第二步： {data: string} 和 {data: string | number} 的兼容性
    // 结论：  x = y no  y = x yes
    // x = y;
    // y = x;
}

// 7. 枚举的兼容性
//      - 枚举类型相当于返回的类型是number
namespace i {
    enum Colors {
        Red,
        Yellow
    }
    let c: Colors;
    c = 1;

    let n: number;
    n = c;
}
