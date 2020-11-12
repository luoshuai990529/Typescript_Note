/* 
    TypeScript 类的 Getter、Setter 和 static 使用
*/

class Xjj {
  constructor(private _age: number, private _name: string) {}
  //
  get age() {
    return this._age - 5;
  }
  get name() {
    return this._name + "呀";
  }
  set age(age) {
    this._age = age + 3;
  }
  set name(othername) {
    this._name =this._name + othername;
  }
  //   加上static 变成静态方法，只能类本身调用
  static say() {
    console.log("say hi");
  }
}
let xjj = new Xjj(25, "小胡");
// 给xjj 设置 age 出发 setter age
xjj.age = 30;
console.log(xjj.age);

// 给xjj 设置 name 触发 setter name
xjj.name = "同学";

// 再触发 age 和 name 的 getter
console.log(xjj.name, xjj.age);

// xjj.say();
Xjj.say()
