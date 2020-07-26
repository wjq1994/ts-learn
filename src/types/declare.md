# 类型声明文件
- [第三方声明文件](#第三方声明文件)
    - [使用jquery](#使用jquery)
    - [安装声明文件](#安装声明文件)
    - [自己编写声明文件](#自己编写声明文件)
    - [npm声明文件可能的位置](#npm声明文件可能的位置)
- [扩展全局变量的类型](#扩展全局变量的类型)
    - [扩展局部变量类型](#扩展局部变量类型)
    - [模块内全局扩展](#模块内全局扩展)
- [合并声明](#合并声明)
    - [合并类型声明](#合并类型声明)
    - [使用命名空间扩展类](#使用命名空间扩展类)
    - [使用命名空间扩展函数](#使用命名空间扩展函数)
    - [使用命名空间扩展枚举类型](#使用命名空间扩展枚举类型)
    - [扩展Store](#扩展Store)
- [生成声明文件](#生成声明文件)

## 第三方声明文件
1. 可以安装使用第三方的声明文件
2. @types是一个约定的前缀，所有的第三方声明的类型库都会带有这样的前缀
3. JavaScript 中有很多内置对象，它们可以在 TypeScript 中被当做声明好了的类型
4. 内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准
这些内置对象的类型声明文件，就包含在TypeScript 核心库的类型声明文件中 https://github.com/Microsoft/TypeScript/tree/master/src/lib

### 使用jquery
```javascript
cnpm i jquery -S
```

### 安装声明文件
```javascript
cnpm i @types/jquery -S
```

### 自己编写声明文件
1. [模块查找规则](https://www.tslang.cn/docs/handbook/module-resolution.html)
2. `node_modules\@types\jquery/index.d.ts
3. 可以自己编写声明文件并配置tsconfig.json

#### index.d.ts
```javascript
declare function jQuery(selector:string):HTMLElement;
declare namespace jQuery{
  function ajax(url:string):void
}
export default jQuery;
```
#### tsconfig.json
1. 如果配置了paths,那么在引入包的的时候会自动去paths目录里找类型声明文件
2. 在 tsconfig.json 中，我们通过 compilerOptions 里的 paths 属性来配置路径映射
3. paths是模块名到基于baseUrl的路径映射的列表

```javascript
{
"baseUrl": "./",// 使用 paths 属性的话必须要指定 baseUrl 的值
"paths": {
"*":["types/*"]
}
```

### npm声明文件可能的位置
- node_modules/jquery/package.json
    - "types":"types/xxx.d.ts"
- node_modules/jquery/index.d.ts
- node_modules/@types/jquery/index.d.ts

## 扩展全局变量的类型

### 扩展局部变量类型
```javascript
declare var String: StringConstructor;
interface StringConstructor {
    new(value?: any): String;
    (value?: any): string;
    readonly prototype: String;
}
interface String {
    toString(): string;
}
```

```javascript
//扩展类的原型
interface String {
    double():string;
}

String.prototype.double = function(){
    return this+'+'+this;
}
console.log('hello'.double());

//扩展类的实例
interface Window{
    myname:string
}
console.log(window.myname);
//export {} 没有导出就是全局扩展
```

### 模块内全局扩展

```javascript
declare global{
    interface String {
        double():string;
    }
    interface Window{
        myname:string
    }
}

export  {}
```

## 合并声明
- 同一名称的两个独立声明会被合并成一个单一声明
- 合并后的声明拥有原先两个声明的特性

### 合并类型声明
- 可以通过接口合并的特性给一个第三方为扩展类型声明
```javascript
// 通过接口合并的特性给一个第三方为扩展类型声明
interface Animal{
    name:string
}
let a1:Animal={name:'wang',age:10};
console.log(a1.name);
console.log(a1.age);
//注意不要加export {} ,这是全局的
```

```javascript
// 第三方类型声明
interface Animal{
    age:number
}
```

### 使用命名空间扩展类
- 我们可以使用 namespace 来扩展类，用于表示内部类
```javascript
class Form {
  username: Form.Item='';
  password: Form.Item='';
}
//Item为Form的内部类
namespace Form {
  export class Item {}
}
let item:Form.Item = new Form.Item();
console.log(item);
```

### 使用命名空间扩展函数

```javascript
function greeting(name: string): string {
    return greeting.words+name;
}

namespace greeting {
    export let words = "Hello,";
}

console.log(greeting('wang'))
```

### 使用命名空间扩展枚举类型 

```javascript
enum Color {
    red = 1,
    yellow = 2,
    blue = 3
}

namespace Color {
    export const green=4;
    export const purple=5;
}
console.log(Color.green)
```

### 扩展Store

```javascript
import { createStore, Store } from 'redux';
type StoreExt = Store & {
    ext: string
}
let store: StoreExt = createStore(state => state);
store.ext = 'hello';
```

## 生成声明文件
- 把TS编译成JS后丢失类型声明，我们可以在编译的时候自动生成一份JS文件

```javascript
{
  "compilerOptions": {
     "declaration": true, /* Generates corresponding '.d.ts' file.*/
  }
}
```