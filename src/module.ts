export { }
/**
 * 模块vs命名空间
 * 1. 模块
 *      - 模块是TS中外部模块的简称，侧重于代码和复用
 *      - 模块在期自身的作用域里执行，而不是在全局作用域里
 *      - 一个模块里的变量、函数、类等在外部是不可见的，除非你把它导出
 *      - 如果想要使用一个模块里导出的变量，则需要导入
 * 2. 命名空间
 *      - 在代码量较大的情况下，为了避免命名空间冲突，可以将相似的函数、类、接口放置到命名空间内
 *      - 命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象，命名空间内通过export向外导出
 *      - 命名空间是内部模块，主要用于组织代码，避免命名冲突
 */

// 1. 模块
namespace a {
    // export const a = 1;
    // export const b = 2;
    // export default 'wang';

    // import name, { a, b } from './1';
    // console.log(name, a, b);
}
// 2. 命名空间
namespace b {
    // export namespace zoo {
    //     export class Dog { eat() { console.log('zoo dog'); } }
    // }
    // export namespace home {
    //     export class Dog { eat() { console.log('home dog'); } }
    // }
    // let dog_of_zoo = new zoo.Dog();
    // dog_of_zoo.eat();
    // let dog_of_home = new home.Dog();
    // dog_of_home.eat();

    // import { zoo } from './3';
    // let dog_of_zoo = new zoo.Dog();
    // dog_of_zoo.eat();
}