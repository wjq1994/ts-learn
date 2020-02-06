interface Empty<T> {
    data: T;
}

//泛型的兼容性
namespace A {
    let Empty1: Empty<number> = {data: 1};
    let Empty2: Empty<number>;
    //let Empty2: Empty<string>; 报错
    
    //先判断具体类型在判断兼容性
    Empty2 = Empty1;
    Empty1 = Empty2;
    
}

namespace B {
    let Empty3: Empty<number> = {data: 1};
    let Empty4: Empty<number | string>;
    // 多的不能赋值给少的
    // Empty3 = Empty4; 报错
    // 少的能赋值给多的
    Empty4 = Empty3;  
}
