interface Person {
  name: string;
  age: number;
  weight: number;
  //  1.如果我们希望这个值可有可无 可以 属性名?:类型
  bust?: number;
  //  2.如果我们想让他可以传一个任意的属性过来  propname:属性名为string 类型any
  [propname: string]: any;
  //  3.添加方法 规定返回值为string
  say(): string;
}
// 4.类可以和接口很好的结合:实现了这个接口就要定义对应的属性
class LiuYing implements Person {
  name = "刘英";
  age = 18;
  weight = 90;
  say() {
    return "我是person2类";
  }
}
console.log(new LiuYing());

let person1 = {
  name: "张三",
  age: 19,
  weight: 110,
  bust: 95,
  sex: "女",
  hobby: "睡觉",
  say() {
    return "欢迎光临!!!";
  },
};

const screenResume = (person: Person) => {
  person.age < 30 &&
    person.weight <= 100 &&
    console.log(person.name + "符合要求");
  person.age >= 30 ||
    (person.weight > 100 && console.log(person.name + "淘汰"));
};
const getResume = (person: Person) => {
  console.log(person.name + "年龄是" + person.age);
  console.log(person.name + "体重是" + person.weight);
  person.bust && console.log(person.name + "胸围是：" + person.bust);
  person.sex && console.log("性别是：" + person.sex);
  person.hobby && console.log("爱好是：" + person.hobby);
  console.log(person.say());
};
screenResume(person1);
getResume(person1);

// 5.接口的继承
interface Teacheror extends Person {
  teach(): string;
}
// 5.1当我们这个时候要用 Teacheror 作为注解对象时，那么我们之前传的person1,不包含teach方法 因此报错
const screenResume2 = (person: Teacheror) => {
  person.age < 30 &&
    person.weight <= 100 &&
    console.log(person.name + "符合要求");
  person.age >= 30 ||
    (person.weight > 100 && console.log(person.name + "淘汰"));
};
//   screenResume2(person1) //报错
let person2 = {
  name: "阿菲",
  age: 19,
  weight: 110,
  bust: 95,
  sex: "女",
  hobby: "睡觉",
  say() {
    return "欢迎光临!!!";
  },
  teach() {
    return "上课";
  },
};
// 只能传入带有teach 方法的对象
screenResume2(person2);
