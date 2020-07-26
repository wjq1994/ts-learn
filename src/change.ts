export { }
/**
 *  类型变换
 *  1. 交叉类型
 *  2. typeof
 *  3. 索引访问操作符
 *  4. keyof
 *  5. 映射类型
 *  6. 内置工具类型
 *  7. 条件类型
 *      - 定义条件类型
 *      - 条件类型的分发
 *      - 内置条件类型
 */

// 1. 交叉类型
namespace a {
    interface Bird {
        name: string,
        fly(): void
    }
    interface Person {
        name: string,
        talk(): void
    }
    type BirdPerson = Bird & Person;
    let p: BirdPerson = { name: 'wang', fly() { }, talk() { } };
    p.fly;
    p.name
    p.talk;
}
// 2. typeof
namespace b {
    //先定义类型，再定义变量
    type People = {
        name: string,
        age: number,
        gender: string
    }
    let p1: People = {
        name: 'zhufeng',
        age: 10,
        gender: 'male'
    }
    //先定义变量，再定义类型
    let p2 = {
        name: 'wang',
        age: 10,
        gender: 'male'
    }
    type People2 = typeof p2;
    function getName(p: People): string {
        return p.name;
    }
    getName(p1);
}
// 3. 索引访问操作符
namespace c {
    interface Person {
        name: string;
        age: number;
        job: {
            name: string
        };
        interests: { name: string, level: number }[]
    }
    let FrontEndJob: Person['job'] = {
        name: '前端工程师'
    }
    let interestLevel: Person['interests'][0]['level'] = 2;
}
// 4. keyof
namespace d {
    interface Person {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }
    //type PersonKey = 'name'|'age'|'gender';
    type PersonKey = keyof Person;

    function getValueByKey(p: Person, key: PersonKey) {
        return p[key];
    }
    let val = getValueByKey({ name: 'zhufeng', age: 10, gender: 'male' }, 'name');
    console.log(val);
}
// 5. 映射类型
namespace e {
    interface Person {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }
    //批量把一个接口中的属性都变成可选的
    type PartPerson = {
        [Key in keyof Person]?: Person[Key]
    }

    let p1: PartPerson = {};
    //也可以使用泛型
    type Part<T> = {
        [key in keyof T]?: T[key]
    }
    let p2: Part<Person> = {};
}
// 6. 内置工具类型
// 7. 条件类型
//    在定义泛型的时候能够添加进逻辑分支，以后泛型更加灵活
//    https://www.typescriptlang.org/docs/handbook/utility-types.html
// 定义条件类型
namespace g {
    interface Fish {
        name: string
    }
    interface Water {
        name: string
    }
    interface Bird {
        name: string
    }
    interface Sky {
        name: string
    }
    //三元运算符
    type Condition<T> = T extends Fish ? Water : Sky;
    let condition: Condition<Fish> = { name: '水' };
}
// 条件类型的分发
namespace h {
    interface Fish {
        fish: string
    }
    interface Water {
        water: string
    }
    interface Bird {
        bird: string
    }
    interface Sky {
        sky: string
    }
    
    type Condition<T> = T extends Fish ? Water : Sky;
    //(Fish extends Fish ? Water : Sky) | (Bird extends Fish ? Water : Sky)
    // Water|Sky
    let condition1: Condition<Fish | Bird> = { water: '水' };
    let condition2: Condition<Fish | Bird> = { sky: '天空' };
}