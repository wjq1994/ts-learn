export { }

namespace a {
    abstract class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        //普通方法
        getName() {
            return this.name;
        }
        //抽象方法
        abstract speak(): void;
    }

    class Cat extends Animal {
        speak(): void {
            console.log("喵");
        }
    }

    class Dog extends Animal {
        speak(): void {
            console.log("旺");
        }
    }

    let cat = new Cat("猫");
    let dog = new Dog("狗");
    cat.speak();
    dog.speak();
}