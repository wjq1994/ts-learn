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
namespace inter {
    interface Speakable {
        speak(): void;
        name: string;
        age: number
    }
   
   //对象的形态就是描述一个对象有哪些属性，属性的类型是什么
   let speaker: Speakable = {
       speak: (): number => {
           return 1;
       },
       name: 'wang',
       age: 1
   }
   //描述的是一个函数的话
   interface Inter1 {
       (a: number, b: number): void;
   }
   let it1: Inter1 = () => {
        
   }
   //描述的是一个对象的话
   interface Inter2 {
       add: () => void;
   }
   let it2: Inter2 = {
        add: () => {

        }
   }
}

/**
  * 2. 描述行为的抽象
  * 
  * 
  */
 namespace action {
    interface Speakable {
        speak(): void;
    }

    interface Eatable {
        eat(): void;
    }

    //一个类只能继承一个父类，但是可以实现多个接口
    class Person implements Speakable, Eatable {
        speak(): void {
            throw new Error("Method not implemented");
        }
        eat(): void {
            throw new Error("Method not implemented");
        }
    }

    //任意属性
    // 任意属性第一种
    // interface Props {
    //     name: string;
    //     age: number;
    //     [propName: string]: any
    // }
    // 任意属性第二种
    interface Props extends Record<string, any> {
        name: string;
        age: number;
    }
    
    let props: Props = {
        name: 'wang',
        age: 1,
        home: "beijing" //home不在props指定属性里
    }

    // 接口里使用readonly
    interface Person2 {
        readonly id: number;
        name: string
    }

    let p2: Person2 = {
        id: 1,
        name: 'wang'
    }
    // p2.id = 2; 只读属性不能更换

    // 5. 函数类型的接口 就是对方法传入的参数和返回值进行约束
    interface Discount {
        (price: number): number; // 不能加函数名
    }
    let cost: Discount = function (price) {
        return price;
    }

    // 6. 可索引接口 可以对数组和对象进行约束
    interface IUser {
        [index: number]: string
    }
    let arr: IUser = ['a', 'b', 'c'];
    let obj: IUser = {0: 'a', 1: 'b'};
}

namespace g {
    // 7. 类接口
    interface Speakable {
        name: string;
        speak(words: string): void
    }
    class Dog implements Speakable {
        name: string;
        speak(): void {
            console.log("A dog in the room")
        };
    }
    let dog = new Dog();
    dog.name;
    dog.speak();

    // 用接口来约束 类的构造函数
    // Animal代表一个类型 代表类的实例 的类型
    class Animal {
        constructor(public name: string) {

        }
    }   
     // 构造函数的类型
    interface WithNameClass {
        // new是构造函数
        new(name: string): Animal
    } 
    function createAnimal(clazz: WithNameClass, name: string) {
            return new clazz(name);
    }
    let animal = createAnimal(Animal, 'wang');
    console.log(animal);
}