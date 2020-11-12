class ITman {
  //  1.如果我们希望这个属性只能只读，那么可已加上readonly
  public readonly _name: string;
  constructor(name: string) {
    this._name = name;
  }
}

const it1 = new ITman("大白");
// it1.name = "小白"; //家还是那个只读属性之后 编译报错
console.log(it1._name);

// 2.抽象类:abstract
abstract class Girls{
    abstract skill()
}
// 注意：继承了抽象类 就必须实现其抽象类中的抽象方法
class Waiter extends Girls {
    skill(){
        console.log("大爷 请喝水");
    }
}
class BaseTeacher extends Girls{
    skill(){
        console.log("大爷  力度合适吗");
    }
}



