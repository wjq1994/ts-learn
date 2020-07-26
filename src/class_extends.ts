/**
 * 类实现继承
 */

class Person {
    name: string = '666';
    constructor(name: string) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setName(name: string) {
        this.name = name;
    }
}

class Student extends Person {
    private _stuNo: string = "";
    public get getstuNo(): string {
        return this._stuNo;
    }
    public set setstuNo(value: string) {
        this._stuNo = value;
    }
    constructor(name: string, stuNo: string) {
        super(name);
        this._stuNo = stuNo;
    }

}

let student1 = new Student("zhangsan", "1203020118");

student1.setName = "dgdgdfg";

console.log(student1.getName);

export { };
