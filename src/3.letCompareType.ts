//let 和 type有什么区别
//let是定义变量 type是定义类型
//let可以赋值给变量 type不给以赋值给变量

let sourceFunc = (abc: number | string) => { };
type sourceFuncType = (abc: number | string) => void; //类型肯定没有返回体

let target1Func = (abc: number) => { };
let target2Func = (abc: number | string | undefined) => { };

//"strictFunctionTypes": true, 改为false
sourceFunc = target1Func;
sourceFunc = target2Func;