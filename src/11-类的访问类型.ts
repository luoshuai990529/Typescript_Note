// private protected
// public 在程序里的意思就是允许在类的内部和外部被调用.
// private 访问属性的意思是，只允许再类的内部被调用，外部不允许调用
// protected 允许在类内及继承的子类中使用
class Persons {
  //   name: string;
  //   上面这种写法其实相当于在name前加了public
  //   public name: string;
  //   当我们改用private 那么下面的代码会直接编译报错
  //   private name: string;
    protected name: string;
  say() {
    return this.name + "hello shuai";
  }
}

const person = new Persons();
person.say();
//使用private 与 protected 下面两行会报错
// person.name = "xiaohuajiao";
// console.log(person.name);

// 这个时候我们再写一个类 Teacher来继承 Persons
class Teachers extends Persons {
  public teach() {
    // 如果父类 使用private定义的  那么这里也会编译报错
    return this.name + "上课";
  }
}
