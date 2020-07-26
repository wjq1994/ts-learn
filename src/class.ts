/**
 * 类 class
 * 1. 变量初始化
 *      - 直接赋值
 *      - 通过构造函数
 * 2. getter setter
 *      通过读存取器 类中属性的读取和赋值
 * 
 * 3. readonly
 *      这个属性是定义在实例上的
 *
 * 4. 属性是定义在实例上（不共享放在实例上），方法是定义在原型上
 * 
 * 5. 修饰符
 *      public 自己 自己孩子 外人都可以访问
 *      protected 自己 自己孩子能访问 外人不能访问
 *      private 自己 能访问， 自己孩子和外人不能访问
 * 
 * 6. 静态方法和静态属性
 * 
 * 7. 类的类型
 *      - 类型 type
 *      - 值 value
 *      - 当你写一个类时其实得到了两个类型
 *          第一个类型 实例的类型
 *          第二个类型 构造函数的类型
 * 8. 重写
 * 9. 重载
 * 10. 继承
 *      - 继承(Inheritance)子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
 * 11. 多态
 *      - 多态(Polymorphism)由继承而产生了相关的不同的类，对同一个方法可以有不同的行为
 */

 /**
  * 变量初始化
  */
 class Person {
     // strictPropertyInitialization = true; 变量需要初始化
     // 变量初始化1
     name: string = 'jjjj';
     constructor() {
         // 变量初始化2
         this.name = "wang";
     }
     getName() : void {
        console.log(this.name)
     }
 }

 /**
  * getter setter
  */
 class User {
     myName: string;
     get name(): string {
         return this.myName;
     }
     set name(newValue) {
         this.myName = newValue.toUpperCase();
     }
 }

 /**
  * readonly
  */
class Animal {
    public readonly name: string = 'wang';
}

let a = new Animal();
// a.name = ''; ts编译中进行代码检查，运行时还是会执行

/**
 * 修饰符 
 * 静态方法和静态属性
 */
class Father {
    static className = "father";
    static getClassName() {
        return Father.className;
    }
    constructor(public name: string, protected age: number,private money: number) {
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getMoney() {
        return this.money;
    }
}
console.log(Father.className, Father.getClassName())

/**
 * 类的类型
 * Person1 实例的类型
 * PersonType 构造函数的类型
 */
class Person1 {
    name: string;
}
let p: Person1 = {name: "wang"};
type PersonType = typeof Person1;
let p2: PersonType = Person1;

/**
 * 重写
 */
namespace override {
    class Animal{
        speak(word:string):string{
            return '动作叫:'+word;
        }
    }
    class Cat extends Animal{
        speak(word:string):string{
            return '猫叫:'+word;
        }
    }
    let cat = new Cat();
    console.log(cat.speak('hello'));
}

 /**
 * 重载
 */
 namespace overload {
    function double(val:number):number
    function double(val:string):string
    function double(val:any):any{
      if(typeof val == 'number'){
        return val * 2;
      }
      return val + val;
    }
    
    let r = double(1);
    console.log(r);
 }

 /**
  * 继承 和 多态
  */
 namespace inheritance {
    class Animal{
        speak(word:string):string{
            return 'Animal: '+word;
        }
    }
    class Cat extends Animal{
        speak(word:string):string{
            return 'Cat:'+word;
        }
    }
    class Dog extends Animal{
        speak(word:string):string{
            return 'Dog:'+word;
        }
    }
    let cat = new Cat();
    console.log(cat.speak('hello'));
    let dog = new Dog();
    console.log(dog.speak('hello'));
 }
