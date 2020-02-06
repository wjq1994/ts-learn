//Pick 能够帮助我们从传入的属性中摘取某一项返回

interface Person {
    name: string;
    age: number;
    sex: string;
}

let pick1: Pick<Person, 'name' | 'age'> = {name: 'wang', age: 6};

// Property 'sex' is missing in type '{ name: string; age: number; }' but required in type 'Person'.
// let pick2: Person = {name: 'wang', age: 6};

type MyPick<T,  K extends keyof T> = { [P in K]: T[P] };

let pick3: MyPick<Person, 'name' | 'age'> = {name: 'wang', age: 6};