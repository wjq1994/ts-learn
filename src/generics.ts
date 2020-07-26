export {}

/**
 * 泛型函数
 */

 function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
            result[i] = value;
    }
    return result;
 }

 let result = createArray(3, true);
 console.log(result);

 // 类数组
 function sum(...rest: any[]) {
     let args: IArguments = arguments;
     for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
     }
 }
 sum(1, 2, 3);
 namespace a {
     let root: HTMLElement | null = document.getElementById('root');
     let children: HTMLCollection | undefined = root?.children;
     let childNodes: NodeListOf<ChildNode> = root!.childNodes;
}
// 泛型类
namespace b {
    class MyArray<T> {
        private list: T[] = [];
        add(value: T) {
            this.list.push(value);
        }
        getMax() {
            let result: T = this.list[0];
            for (let i = 1; i < this.list.length; i++) {
                if (this.list[i] > result) {
                    result = this.list[i];
                }
            }
        }
    }
    let array = new MyArray<number>();
    array.add(1);
    array.add(2);
    array.add(3);
    console.log(array.getMax());
}
// 泛型接口
namespace c {
    interface Calculate {
        <T>(a: T, b: T): T
    }
    const add: Calculate = function <T>(a: T, b: T): T {
        return (a as any) + (b as any);
    }

    add(1, 1);
}
// 多个类型参数
namespace d {
    function swap<A, B>(tuple: [A, B]):[B, A] {
        return [tuple[1], tuple[0]];
    }
    let result3 = swap<string, number>(['a', 1]);
    console.log(result3)
}
// 默认泛型
namespace e {
    function createArray2<T = number>(length: number, value: T): Array<T> {
        let result: T[] = [];
        for (let i = 0; i < length; i++) {
                result[i] = value;
        }
        return result;
     }
    
     let result = createArray2(3, true);
     console.log(result);
}
// 泛型的约束
namespace f {
    interface LengthWise {
        name: string;
    }
    let len: LengthWise = {name: "222"};
    function logger<T extends LengthWise>(val: T) {
        console.log(val.name);
    }
    logger(len);
}
// 泛型的接口
namespace g {
    interface Cart<T> {
        list: T[]
    }
    interface Product {
        id: number;
        name: string
    }
    let cart: Cart<Product> = {
        list: [{id: 1, name: '计算机'}];
    }
}
// type指的是泛型类型的别名
// 泛型别名可以表达更为复杂的类型
namespace h {
    type Cart2<T> = { list: T[] } | T[];
    let cart2: Cart2<number> = { list: [1] };
    let cart3: Cart2<number> = [1]
}

/**
 * type interface的区别
 *  1. interface才是真正的类型，创建一个真实的类型名称，可以在任何地方被调用
 *  而类型别名并不能创建类型名称，比如报错的时候就不能用
 *  2. type类型别名不能被extends implements。如果要继承和实现接口的话必须要用interface
 *  3. 当你需要用联合类型的，可以用别名
 */